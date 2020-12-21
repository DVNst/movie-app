import React, { useState, useEffect } from "react";

import Header from "./components/header/header.jsx";
import MovieItem from "./components/movie-item/movie-item.jsx";
import Footer from "./components/footer/footer.jsx";

import { moviesData } from "./moviesData.js";

console.log(moviesData);

function App() {
  const [movies, setMovies] = useState(moviesData);

  useEffect(() => {
    // axios.get("http://localhost:3001/lists/?_expand=color&_embed=tasks").then(({ data }) => {
    //   setMovies(moviesData);
    // });

    setMovies(moviesData);
  }, []);

  return (
    <>
      <Header />
      <ul className="movies">
        {movies.map((movie, i) => (
          <MovieItem
            movie={movie}
            key={movie.id}
          />
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default App;
