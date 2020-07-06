import React from "react";
import { Movie } from "../../common/movie";
import MovieCard from "../movie-card/movie-card";

interface MovieCardDecksProps {
  movies: Array<Movie>;
  onRemoveMovie: Function;
  onUpdateMovie: Function;
}
/**
 * Stateless component to display decks of movie cards
 */
const MovieCardDecks = (props: MovieCardDecksProps) => {
  const { movies } = { ...props };

  return movies.length > 0 ? (
    <div className="row bg-white box-shadow">
      {movies.map((movie: Movie) => (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={movie.id}>
          <MovieCard
            movie={movie}
            onRemoveMovie={props.onRemoveMovie}
            onUpdateMovie={props.onUpdateMovie}
          ></MovieCard>
        </div>
      ))}
    </div>
  ) : (
    <div className="bg-white box-shadow p-5">
      <h5 className="text-muted">There are no movies in your watch list</h5>
    </div>
  );
};

export default MovieCardDecks;
