import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import SingleArticle from "../SingleArticle";
import { fetchArticles } from "../../store/articleReducer";

const ArticleList = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articleState.entries);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // dispatch(fetchArticles()).then(() => setIsLoading(false));

        const getArticles = async () => {
            try {
                await dispatch(fetchArticles());
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        getArticles();
    }, [dispatch]);

    return (
        <div>
            <h1>Article List</h1>
            <ol>
                {articles.map(({ id, title }) => (
                    <li key={id}>
                        <NavLink to={`/article/${id}`}>{title}</NavLink>
                    </li>
                ))}
            </ol>

            <Switch>
                <Route path="/article/:id">
                    {!isLoading && <SingleArticle articles={articles} />}
                </Route>
            </Switch>
        </div>
    );
};

export default ArticleList;
