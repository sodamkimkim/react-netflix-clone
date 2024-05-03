import axios from "axios";
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params:{
        api_key : process.env.REACT_APP_MOVIE_DB_API_KEY,
        language: "ko-KR"
    },
});

export default instance

// https://api.themoviedb.org/3/search/multi?include_adult=false&query=spider&api_key=0a1e1ac69550c51c58f6d7efbcaa7d3b&language=ko-KR