import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  });

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  return (
    <div className="flex overflow-x-auto gap-8 scrollbar-none pt-8 px-5 pb-8 ">
      {movieList.map((item, index) => (
        <MovieCard movie={item} />
      ))}
    </div>
  );
}

export default MovieList;
