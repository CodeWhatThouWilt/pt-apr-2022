import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProduce } from "./store/produce";
import Cart from "./components/Cart";
import ProduceList from "./components/ProduceList";

function App() {
    const [showCart, setShowCart] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProduce());
    }, []);

    return (
        <>
            <nav>
                <h1>Grocery Store</h1>
                <button
                    className="checkout-button"
                    onClick={() => setShowCart(true)}
                >
                    <i className="fas fa-shopping-bag" />
                    Checkout
                </button>
            </nav>
            <main style={showCart ? { marginRight: "300px" } : {}}>
                <ProduceList />
            </main>
            <div
                className="sidebar"
                style={showCart ? { transform: "translateX(-100%)" } : {}}
            >
                <div className="sidebar-header">
                    <button
                        className="arrow-button"
                        onClick={() => setShowCart(false)}
                    >
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <Cart />
            </div>
        </>
    );
}

export default App;
