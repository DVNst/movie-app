// import React from "react";

import "./movie-item.scss";

const MovieItem = ({ movie, addFavoriteMovie, addWatchMovie }) => {
  const { poster_path, title, original_title, release_date, vote_average } = movie;
  const movieDate = release_date ? new Date(release_date).getFullYear() : "-";
  return (
    <li className="movie-card">
      <a href="#" className="movie-card__link movie-card__poster">
        {
          poster_path &&
          <img
            className="movie-card__img"
            width="220px"
            height="330px"
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
            alt="" />
        }
      </a>

      <p className="movie-card__title">
        <a href="#" className="movie-card__link">
          {title ? title : original_title}
        </a>
      </p>
      <p className="movie-card__date">{movieDate}</p>

      <div className="movie-card__indicators">
        <p className="movie-card__rating">{vote_average * 10}%</p>
        <button 
          className="movie-card__btn movie-card__btn--favorite"
          title="Добавить в Избранное"
          onClick={() => addFavoriteMovie(movie)}
        >
          <span className="visually-hidden">Добывить в избранное</span>
        </button>
        <button
          className="movie-card__btn movie-card__btn--watch"
          title="Добавить в свой список отслеживания"
          onClick={() => addWatchMovie(movie)}
        >
          <span className="visually-hidden">Добавить в свой список отслеживания</span>
        </button>
      </div>
    </li>
  );
};

export default MovieItem;
