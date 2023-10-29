import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    removeFromCart,
    increaseCount,
    decreaseCount,
    inputCount,
} from "../../store/cart";

function CartItem({ item }) {
    const [count, setCount] = useState(item.count);

    const dispatch = useDispatch();

    const handleDelete = () => dispatch(removeFromCart(item.id));
    const handleIncrease = () => dispatch(increaseCount(item.id));
    const handleDecrease = () => dispatch(decreaseCount(item.id));
    const handleSpecificNum = () => {
        if (count <= 0) return handleDelete();
        dispatch(inputCount({ itemId: item.id, count }));
    };
    const removeOrDelete = count === 1 ? handleDelete : handleDecrease;

    useEffect(() => {
        setCount(item.count);
    }, [item.count]);

    return (
        <li className="cart-item">
            <div className="cart-item-header">{item.name}</div>
            <div className="cart-item-menu">
                {" "}
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    onBlur={handleSpecificNum}
                />
                <button className="cart-item-button" onClick={handleIncrease}>
                    +
                </button>
                <button className="cart-item-button" onClick={removeOrDelete}>
                    -
                </button>
                <button className="cart-item-button" onClick={handleDelete}>
                    Remove
                </button>
            </div>
        </li>
    );
}

export default CartItem;
