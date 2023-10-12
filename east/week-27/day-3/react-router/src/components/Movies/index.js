import { NavLink, Switch, Route } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
        <Switch>
          <Route path="/movies/:movieId">
            <MovieDetails movies={movies} />
          </Route>
        </Switch>
      </ul>
    </div>
  );
}

export default Movies;
