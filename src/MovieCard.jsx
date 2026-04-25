import React from "react";

export default function MovieCard({ movie }) {

  const getRatingColor = (vote) => {
    if (vote >= 8) return "green";
    if (vote >= 5) return "red";
    return "orange";
  };

  const imagePath = movie.poster_path
    ? "https://image.tmdb.org/t/p/w1280" + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="col-md-3 col-sm-6">
      <div className="card custom-card">
        <img src={imagePath} alt={movie.title} height="350" />

        <div className="overview">
          <h5>{movie.title}</h5>

          <p>
            <b>Overview:</b> {movie.overview}
          </p>

          <span style={{ color: getRatingColor(movie.vote_average) }}>
            Rating: {movie.vote_average}
          </span>
          <br />
          <span>Release Date: {movie.release_date}</span>
          <br />
          <span>Language: {movie.original_language}</span>
          <br />
          <span>Total Votes: {movie.vote_count}</span>
        </div>
      </div>
    </div>
  );
}
