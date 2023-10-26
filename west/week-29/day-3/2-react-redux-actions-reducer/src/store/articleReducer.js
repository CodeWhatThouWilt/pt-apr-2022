import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";

// export const loadArticles = () => {
//     return {
//         type: LOAD_ARTICLES,
//         articles
//     }
// }

export const loadArticles = () => ({
    type: LOAD_ARTICLES,
    articles,
});

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...articles] };
        default:
            return state;
    }
};

// const articleReducer = (state = initialState, action) => {
//     const newState = {...state};

//     switch (action.type) {
//         case LOAD_ARTICLES:
//             newState.entries = articles;
//             return newState;
//         default:
//             return state;
//     }
// };

export default articleReducer;
