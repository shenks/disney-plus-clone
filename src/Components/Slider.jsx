import React, { useState, useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos()
      .then((resp) => {
        console.log(resp.data.results);
        setMovieList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  };
  return (
    <div>
      <h1>hi</h1>
      {movieList.map((item) => (
        <img
          key={item.id}
          src={IMAGE_BASE_URL + item.backdrop_path}
          className="min-w-full h-[310px]"
        />
      ))}
    </div>
  );
}

export default Slider;
