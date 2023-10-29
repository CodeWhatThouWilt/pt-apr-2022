const ADD_TO_CART = "cart/addToCart";
const REMOVE_FROM_CART = "cart/removeFromCart";
const INCREASE_COUNT = "cart/increaseCount";
const DECREASE_COUNT = "cart/decreaseCount";
const INPUT_COUNT = "cart/inputCount";
const EMPTY_CART = "cart/emptyCart";

export const addToCart = (itemId) => ({
    type: ADD_TO_CART,
    itemId,
});

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    itemId,
});

export const increaseCount = (itemId) => ({
    type: INCREASE_COUNT,
    itemId,
});

export const decreaseCount = (itemId) => ({
    type: DECREASE_COUNT,
    itemId,
});

export const inputCount = (payload) => ({
    type: INPUT_COUNT,
    payload,
});

export const emptyCart = () => ({
    type: EMPTY_CART,
});

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { itemId } = action;
            return {
                ...state,
                [itemId]: { id: itemId, count: 1 },
            };
        }
        case REMOVE_FROM_CART: {
            const newState = { ...state };
            delete newState[action.itemId];
            return newState;
        }
        case INCREASE_COUNT: {
            const newState = { ...state };
            newState[action.itemId].count++;
            return newState;
        }
        case DECREASE_COUNT: {
            const newState = { ...state };
            newState[action.itemId].count--;
            return newState;
        }
        case INPUT_COUNT: {
            const newState = { ...state };
            const { itemId, count } = action.payload;
            console.log(action);
            newState[itemId].count = count;
            return newState;
        }
        case EMPTY_CART: {
            return {};
        }
        default:
            return state;
    }
};

export default cartReducer;
