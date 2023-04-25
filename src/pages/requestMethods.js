import axios from "axios";

const BASE_URL = "http://localhost:8080";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2VlOWVlNjRiOTMxN2QzZDE3MWM2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjQ0OTAyMywiZXhwIjoxNjgyNzA4MjIzfQ.Ww6OfZXQlnoAQKXY0obc0-RCRbIyxpViLVnE7oLFExI";

export const publicRequest = axios.create({
   baseURL: BASE_URL,
});
export const userRequest = axios.create({
   baseURL: BASE_URL,
   header: { token: `Bearer ${Token}` }
})