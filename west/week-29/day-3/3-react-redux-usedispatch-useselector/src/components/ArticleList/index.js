import { Route, Switch, NavLink } from "react-router-dom";
import SingleArticle from "../SingleArticle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadArticles } from "../../store/articleReducer";

const ArticleList = () => {
    const dispatch = useDispatch();

    const articles = useSelector((state) => state.articleState.entries);

    useEffect(() => {
        dispatch(loadArticles());
    }, []);

    return (
        <div>
            <h1>Article List</h1>
            <ol>
                {articles.map((article) => (
                    <li key={article.id}>
                        <NavLink to={`/article/${article.id}`}>
                            {article.title}
                        </NavLink>
                    </li>
                ))}
            </ol>

            <Switch>
                <Route path="/article/:id">
                    <SingleArticle />
                </Route>
            </Switch>
        </div>
    );
};

export default ArticleList;
