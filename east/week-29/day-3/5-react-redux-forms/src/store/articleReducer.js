import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";
const ADD_ARTICLE = "article/addArticle";

export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        articles,
    };
};

export const addArticle = (payload) => ({
    type: ADD_ARTICLE,
    payload,
});

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...action.articles] };
        case ADD_ARTICLE:
            return { ...state, entries: [...state.entries, action.payload] };
        default:
            return state;
    }
};

// const articleReducer = (state = initialState, action) => {
//     const newState = {...state};

//     switch (action.type) {
//         case LOAD_ARTICLES:
//             return { ...state, entries: [...action.articles] };
//         case ADD_ARTICLE:
//             newState.entries.push(action.payload);
//             return newState;
//         default:
//             return state;
//     }
// };

export default articleReducer;
