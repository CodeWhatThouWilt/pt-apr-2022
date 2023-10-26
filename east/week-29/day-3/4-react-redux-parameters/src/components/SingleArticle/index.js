import "./SingleArticle.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleArticle = () => {
    const { id } = useParams();

    const articles = useSelector((state) => state.articleState.entries);

    const currArticle = articles.find((article) => article.id === id);

    console.log("CURRENT ARTICLE: ", currArticle);

    return (
        <div className="singleArticle">
            <h1>{currArticle.title}</h1>
            <img src={currArticle.imageUrl} alt="article image" />
            <p>{currArticle.body}</p>
        </div>
    );
};

export default SingleArticle;
