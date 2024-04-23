import axios from "axios";
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params:{
        api_key : "0a1e1ac69550c51c58f6d7efbcaa7d3b",
        language: "ko-KR"
    },
});

export default instance