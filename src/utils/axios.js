import axios from "axios";

export const apiInstance = axios.create({
    baseURL: 'https://swapi.dev/api/',
});