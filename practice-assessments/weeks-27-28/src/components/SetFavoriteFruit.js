import { useFavoriteFruit } from "../context/FavFruitContext";

const SetFavoriteFruit = ({ fruits }) => {
    const { favFruitId, setFavFruitId } = useFavoriteFruit();

    const handleFav = (e) => setFavFruitId(e.target.value);

    return (
        <div className="set-fav-fruit">
            <h2>Select your Favorite Fruit</h2>
            <label>
                <select value={favFruitId} onChange={handleFav}>
                    {fruits.map((fruit) => (
                        <option key={fruit.id} value={fruit.id}>
                            {fruit.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default SetFavoriteFruit;
