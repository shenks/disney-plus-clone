import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

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
    <div className="relative">
      <IoChevronBackOutline className="text-[50px]  ml-4 z-10 cursor-pointer hidden md:block absolute mt-[225px] text-white" />
      <div className="flex overflow-x-auto gap-8 scrollbar-none pt-8 px-5 pb-8 ">
        {movieList.map((item, index) => (
          <MovieCard movie={item} />
        ))}
      </div>
      <IoChevronForwardOutline className="text-[50px] text-white hidden md:block cursor-pointer z-10 top-0 absolute right-0 mt-[225px] " />
    </div>
  );
}

export default MovieList;
