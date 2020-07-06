import Axios from "axios";
import { API_KEY, MOVIE_WATCH_LIST_API_URL } from "../constants";

/**
 * API to get watch list for user. Currently it is simulated
 * by fetching "Now Playing" movies
 */
export const getMovieWatchList = async () => {
  let response: {
    movies: any | null;
    error: string;
  };
  response = { movies: null, error: "" };

  let apiParams = "?api_key=" + API_KEY;
  apiParams += "&page=2";

  try {
    let apiResponse = await Axios.get(MOVIE_WATCH_LIST_API_URL + apiParams);
    if (apiResponse.data && Array.isArray(apiResponse.data.results)) {
      response.movies = apiResponse.data.results;
    } else {
      response.error = "Error fetching current playing movies";
    }
  } catch (e) {
    response.error = e;
  }
  return response;
};
