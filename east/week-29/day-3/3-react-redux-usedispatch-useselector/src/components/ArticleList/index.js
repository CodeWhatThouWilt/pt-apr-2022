import { Route, Switch, NavLink } from "react-router-dom";
import SingleArticle from "../SingleArticle";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articleReducer";
import { useEffect } from "react";

const ArticleList = () => {
    const dispatch = useDispatch();

    const articles = useSelector((state) => state.articleState.entries);

    useEffect(() => {
        dispatch(loadArticles());
    }, [dispatch]);

    return (
        <div>
            <h1>Article List</h1>
            <ol>
                {articles.map((article) => (
                    <NavLink to={`/article/${article.id}`} key={article.id}>
                        <li>{article.title}</li>
                    </NavLink>
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
