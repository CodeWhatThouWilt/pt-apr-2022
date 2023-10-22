import { useFavoriteFruit } from "../context/FavFruitContext";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { FavFruitContext } from "../context/FavFruitContext";

const FavoriteFruit = ({ fruits }) => {
    const { favFruitId } = useFavoriteFruit();

    const favFruit = fruits.find((fruit) => fruit.id === favFruitId);

    return (
        <section>
            <h2>Favorite Fruit</h2>
            <Link to={`/fruits/${favFruit.id}`}>
                <h3>{favFruit.name}</h3>
            </Link>
        </section>
    );
};

export default FavoriteFruit;
