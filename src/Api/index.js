import axios from "axios";

export const API = axios.create({
    baseURL: "https://644f3d3bb61a9f0c4d1eafa6.mockapi.io/api/v1",
    headers: {"Content-Type": "application/json"},
});