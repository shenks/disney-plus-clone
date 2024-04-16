import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "28ea26224d25c751b7b51e73dd27292d";
const getTrendingVideos = axios.get(
  this.movieBaseUrl + "/trending/all/day?api_key" + api_key
);

export default {
  getTrendingVideos,
};
