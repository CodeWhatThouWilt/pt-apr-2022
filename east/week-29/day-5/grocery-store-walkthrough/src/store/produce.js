import produceData from "../mockData/produce.json";

export const getAllProduce = (state) => Object.values(state.produce);

const LOAD_PRODUCE = "produce/loadProduce";

export const loadProduce = () => ({
    type: LOAD_PRODUCE,
    produceData,
});

const produceReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_PRODUCE:
            return action.produceData.reduce((produce, item) => {
                produce[item.id] = item;
                return produce;
            }, {});
        default:
            return state;
    }
};

export default produceReducer;
