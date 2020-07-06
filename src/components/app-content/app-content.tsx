import React from "react";
import { getMovieWatchList } from "../../common/services/movie";
import { processWatchList } from "../../common/data-convertor";
import { Movie } from "../../common/movie";
import MovieCardDecks from "../movie-card-decks/movie-card-decks";

interface AppContentState {
  movieWatchList: Array<Movie>;
}

/**
 * Stateful container component holding the state of movies.
 * This component makes API call to fetch User's watchlist. This is done by calling an open API to fetch movies
 * and adding a date(planned date to watch movie) to each movie result. In reality, this will be an
 * API call to get movies saved against a user
 */
class AppContent extends React.Component<any, AppContentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      movieWatchList: []
    };
  }
  async componentDidMount() {
    const watchList = await getMovieWatchList();
    if (watchList.error === "") {
      const movieWatchList = processWatchList(watchList.movies);
      this.setState({ movieWatchList });
    }
  }
  onRemoveMovie = (movie: Movie) => {
    const newList = this.state.movieWatchList.filter(
      (item) => item.id !== movie.id
    );
    this.setState({ movieWatchList: newList });
  };
  onUpdateMovie = (movie: Movie) => {
    const index = this.state.movieWatchList.findIndex(
      (item) => item.id === movie.id
    );
    const movieWatchList = this.state.movieWatchList;
    movieWatchList.splice(index, 1, movie);
    this.setState({ movieWatchList });
  };
  render() {
    return (
      <div className="app-content">
        <MovieCardDecks
          movies={this.state.movieWatchList}
          onRemoveMovie={this.onRemoveMovie}
          onUpdateMovie={this.onUpdateMovie}
        />
      </div>
    );
  }
}

export default AppContent;
