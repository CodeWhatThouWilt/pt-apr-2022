import { useParams } from "react-router-dom"

function MovieDetails({ movies }) {
  const { movieId } = useParams();

  const currMovie = movies.find(movie => movie.id === parseInt(movieId));

  return (
    <div className='comp purple'>
      <h1>{currMovie.title}</h1>
      <p>{currMovie.description}</p>
    </div>
  );
}

export default MovieDetails;