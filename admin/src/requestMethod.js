import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI0NGUzN2YxOTQxYzAwNWQwYjc5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTQ0NjA0MiwiZXhwIjoxNjc1NzA1MjQyfQ.V7o_uzlTrRUV5yBecexQ2noaVxYghjo5W8bJS4XnoU4"
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
 export const userRequest=axios.create({
     baseURL:BASE_URL,
     headers:{Authorization:`Bearer ${TOKEN}`}
 }); 
