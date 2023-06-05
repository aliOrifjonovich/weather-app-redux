import axios from "axios";

export const request = axios.create({
    baseUrl: `https://api.openweathermap.org/data/2.5/weather?q=${slug}&appid=f6363b23154d6b7d3c0c40c1e8d6a98e`
})