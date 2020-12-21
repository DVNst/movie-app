import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header/header.jsx";
import MovieItem from "./components/movie-item/movie-item.jsx";
import Footer from "./components/footer/footer.jsx";

// import { moviesData } from "./moviesData.js";

const API_KEY="6f6619cbc5b3e425c95dd474d5046eec";

//Get Details
//https://api.themoviedb.org/3/movie/ID?api_key=API_KEY

//Get Alternative Titles
//https://api.themoviedb.org/3/movie/299536/alternative_titles?api_key=6f6619cbc5b3e425c95dd474d5046eec
//{"id": 299536, "titles": [{"iso_3166_1": "RU", "title": "Мстители: Война бесконечности. Часть 1", "type": ""}]}

//Get актеры
//https://api.themoviedb.org/3/movie/299536/credits?api_key=6f6619cbc5b3e425c95dd474d5046eec&language=en-US

//get movies
//https://api.themoviedb.org/3/discover/movie?api_key=6f6619cbc5b3e425c95dd474d5046eec&language=ru-RU&sort_by=popularity.desc&include_adult=false&page=1
//language=en-US
//sort_by=popularity.asc (популярность по возрастанию), popularity.desc (популярность по убыванию), vote_average.asc, vote_average.desc (рейтинг)

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_REQUEST="https://api.themoviedb.org/3/discover/movie";
    const language="ru-RU"
    const sortingType=["popularity.asc", "popularity.desc", "vote_average.asc", "vote_average.desc", "release_date.asc", "release_date.desc", "primary_release_date.asc", "primary_release_date.desc"];
    const page = 1;

    axios.get(`${API_REQUEST}?api_key=${API_KEY}&language=${language}&sort_by=${sortingType[1]}&include_adult=false&page=${page}`)
      .then(({ data }) => {setMovies(data.results)});
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const addFavoriteMovie = (movie) => {
    console.log("Favorite", movie.id, movie.title);
  };

  const addWatchMovie = (movie) => {
    console.log("Watch", movie.id, movie.title);
  };

  return (
    <>
      <Header />
      <ul className="movies">
        {movies.length>0 && movies.map((movie, i) => (
          <MovieItem
            movie={movie}
            key={movie.id}
            addFavoriteMovie={addFavoriteMovie}
            addWatchMovie={addWatchMovie}
          />
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default App;
