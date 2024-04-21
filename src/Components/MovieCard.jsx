import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <div>
      <img src={IMAGE_BASE_URL + movie.poster_path} className="w-[110px]" />
    </div>
  );
}

export default MovieCard;
