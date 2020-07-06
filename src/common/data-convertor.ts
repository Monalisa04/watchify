import { Movie } from "./movie";
import moment from "moment";
import { POSTER_PATH_BASE_URL } from "./constants";

/**
 * Function that convert movies returned from API response to array of Movie objects
 * */
export const processWatchList = (response: Array<any>): Array<Movie> => {
  let movies: Array<Movie> = [];

  response.forEach((item, index) => {
    let movie: Movie = {
      id: item.id,
      title: item.title,
      description: item.overview,
      releaseDate: moment(item.releaseDate).format("YYYY"),
      rating: item.vote_average,
      posterUrl: POSTER_PATH_BASE_URL + item.poster_path,
      watchDate: moment().add(index, "days").toDate()
    };
    movies.push(movie);
  });
  return movies;
};
