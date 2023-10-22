import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function FruitForm({ fruits }) {
    const [name, setName] = useState("");
    const [sweetness, setSweetness] = useState(1);
    const [fruitColor, setFruitColor] = useState("orange");
    const [seeds, setSeeds] = useState("yes");
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleName = (e) => setName(e.target.value);
    const handleColor = (e) => setFruitColor(e.target.value);
    const handleSweetness = (e) => setSweetness(e.target.value);
    const handleSeeds = (e) => setSeeds(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name,
            sweetness,
            color: fruitColor,
            seeds,
        };

        console.log(payload);

        history.push("/");
    };

    useEffect(() => {
        const currErrors = {};

        const fruitExists = fruits.find((fruit) => fruit.name === name);

        if (name.length < 3) {
            currErrors.name = "Name must be 3 or more characters";
        } else if (name.length > 20) {
            currErrors.name = "Name must be 20 characters or less";
        } else if (fruitExists) {
            currErrors.name = "Name already exists";
        }

        if (sweetness < 1 || sweetness > 10) {
            currErrors.sweetness = "Sweetness must be between 1 and 10";
        }

        setErrors(currErrors);
    }, [name, sweetness]);

    return (
        <form className="fruit-form" onSubmit={handleSubmit}>
            <h2>Enter a Fruit</h2>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />
            </label>
            <p>{errors.name}</p>
            <label>
                Select a Color
                <select value={fruitColor} onChange={handleColor}>
                    {COLORS.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Sweetness
                <input
                    type="number"
                    name="sweetness"
                    value={sweetness}
                    onChange={handleSweetness}
                />
            </label>
            <p>{errors.sweetness}</p>
            <label>
                <input
                    type="radio"
                    value="no"
                    name="seeds"
                    onChange={handleSeeds}
                    checked={seeds === "no"}
                />
                No Seeds
            </label>
            <label>
                <input
                    type="radio"
                    value="yes"
                    name="seeds"
                    onChange={handleSeeds}
                    checked={seeds === "yes"}
                />
                Seeds
            </label>
            <button type="submit" disabled={Object.keys(errors).length}>
                Submit Fruit
            </button>
        </form>
    );
}

export default FruitForm;
