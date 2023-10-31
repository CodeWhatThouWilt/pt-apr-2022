import peopleData from "../mockData/data.json";

const LOAD_PEOPLE = "people/loadPeople";
const GET_DETAILS = "people/getDetails";

export const loadPeople = () => ({
    type: LOAD_PEOPLE,
    peopleData,
});

const getDetails = (payload) => ({
    type: GET_DETAILS,
    payload,
});

export const fetchPerson = (personId) => async (dispatch) => {
    const res = await fetch(`https://swapi.dev/api/people/${personId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(getDetails({ ...data, id: personId }));
        return data;
    }
    return res;
};

const peopleReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_PEOPLE:
            return peopleData;
        case GET_DETAILS:
            const newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
};

export default peopleReducer;
