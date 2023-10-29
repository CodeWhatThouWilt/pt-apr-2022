import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseCount } from "../../store/cart";

function ProduceDetails({ produce }) {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart[produce.id]);

    const handleAdd = () => {
        if (cartItem) {
            dispatch(increaseCount(produce.id));
        } else {
            dispatch(addToCart(produce.id));
        }
    };

    return (
        <li className="produce-details">
            <span>{produce.name}</span>
            <span>
                <button
                    className={
                        "like-button" + (produce.liked ? " selected" : "")
                    }
                >
                    <i className={"fas fa-heart"} />
                </button>
                <button
                    className={"plus-button" + (cartItem ? " selected" : "")}
                    onClick={handleAdd}
                >
                    <i className="fas fa-plus" />
                </button>
            </span>
        </li>
    );
}

export default ProduceDetails;
