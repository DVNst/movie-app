// import React from "react";

import "./movie-item.scss";

const MovieItem = ({ movie }) => {
  const { poster_path, original_title, release_date, vote_average } = movie;
  const movieDate = new Date(release_date).getFullYear();
  return (
    <li className="movie-card">
      <a href="#" className="movie-card__link">
        <img
          className="movie-card__img"
          width="220px"
          height="330px"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
          alt="" />
      </a>

      <p className="movie-card__title">
        <a href="#" className="movie-card__link">{original_title}</a>
      </p>
      <p className="movie-card__text">{movieDate}</p>
      <p className="movie-card__rating">{vote_average * 10}%</p>
    </li>
  );
};

export default MovieItem;
