import axios from "axios";

const key = "2U0MGUunILhDGndTH6yMT5CMXlA3";

// get all matches scheduled
export const getMatches = () => {
   return axios.get(`https://cricapi.com/api/matches?apikey=${key}`)
    .then((res)=>res.data)
    .catch((err)=>console.log("error: ",err))
};

// load match details
export const getMatchDetail = (id) => {
    return axios.get(`https://cricapi.com/api/cricketScore?apikey=${key}&unique_id=${id}`)
        .then((res)=>res.data)
        .catch((err)=>console.log("error :",err))
};