import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const API_KEY = "04c35731a5ee918f014970082a0088b1";

  const TOPMOVIESAPIURL =
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

  const SEARCHAPI =
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const fetchMovies = async (API) => {
    const response = await fetch(API);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    if (search === "") {
      fetchMovies(TOPMOVIESAPIURL);
    } else {
      fetchMovies(SEARCHAPI + search);
    }
  }, [search]);

  return (
    <div className="bg-black text-white min-vh-100">

      <div className="input-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

    </div>
  );
}
