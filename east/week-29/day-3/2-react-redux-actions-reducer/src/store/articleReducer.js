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

const intialState = { entries: [], isLoading: true };

const articleReducer = (state = intialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...action.articles] };
        default:
            return state;
    }
};

// const articleReducer = (state = intialState, action) => {
//     const newState = {...state};

//     switch (action.type) {
//         case LOAD_ARTICLES:
//             newState.entries = [...action.articles];
//             return newState;
//         default:
//             return state;
//     }
// };

export default articleReducer;
