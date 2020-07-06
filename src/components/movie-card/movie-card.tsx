import React from "react";
import DatePicker, { DayValue } from "react-modern-calendar-datepicker";
import { truncate } from "lodash";
import { Movie } from "../../common/movie";
import FA from "react-fontawesome";

interface MovieCardProps {
  movie: Movie;
  onRemoveMovie: Function;
  onUpdateMovie: Function;
}
interface MovieCardState {
  selectedDate: Date;
}

class MovieCard extends React.Component<MovieCardProps, MovieCardState> {
  constructor(props: MovieCardProps) {
    super(props);
    this.state = {
      selectedDate: props.movie.watchDate ? props.movie.watchDate : new Date()
    };
  }
  handleRemoveButtonClick = (movie: Movie) => {
    this.props.onRemoveMovie(movie);
  };
  handleDateChange = (value: DayValue) => {
    this.setState(
      {
        selectedDate: new Date(value!.year, value!.month, value!.day)
      },
      () => {
        this.props.movie.watchDate = this.state.selectedDate;
        this.props.onUpdateMovie(this.props.movie);
      }
    );
  };
  render() {
    const { movie } = { ...this.props };
    const watchDate = {
      day: this.state.selectedDate.getDate(),
      month: this.state.selectedDate.getMonth(),
      year: this.state.selectedDate.getFullYear()
    };
    return (
      <div className="card">
        <div className="card-action">
          <button
            className="btn btn-danger btn-xs btn-rounded"
            onClick={() => this.handleRemoveButtonClick(movie)}
          >
            <FA name="remove" style={{ color: "#FFF" }} />
          </button>
        </div>
        <img
          className="card-img-top"
          src={movie.posterUrl}
          alt="poster"
        ></img>
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="card-text" title={movie.description}>
            {truncate(movie.description, { length: 100 })}
          </div>
          <div className="card-text watch-date">
            <b className="mr-2">WATCH ON</b>
            {movie.watchDate && (
              <DatePicker
                wrapperClassName="movie-datepicker"
                value={watchDate}
                onChange={this.handleDateChange}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
