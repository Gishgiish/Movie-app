import React, { useState } from "react";
import { useEffect } from "react";

import MovieCard from "./MovieCard";
import "./App.css";
import searchIcon from "./search.svg";

//get api key for loading movies from OMDBAPI.com
const API_URL = "http://www.omdbapi.com?apikey=4a6b1151"; //paste API key at the end of this url

const App = () => {
  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovie(data.Search);
  };
  /*useEffect(() => {
    searchMovies("Shrek");
  }, []);*/
  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((movies) => (
            <MovieCard movies={movies} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
