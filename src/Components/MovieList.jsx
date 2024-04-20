import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

function MovieList({ genreId }) {
  useEffect(() => {
    getMovieByGenreId();
  });

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      console.log(resp.data.results);
    });
  };

  return <div>movies</div>;
}

export default MovieList;
