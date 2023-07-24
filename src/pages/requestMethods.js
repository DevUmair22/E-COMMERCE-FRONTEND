import axios from "axios";

const BASE_URL = "http://localhost:8080";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2VlOWVlNjRiOTMxN2QzZDE3MWM2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTYxMDQyNSwiZXhwIjoxNjg5ODY5NjI1fQ.fvksRU8z7aAr_p9ayqw3XaDgiscw3LuwFb7Mjx7jQms";

export const publicRequest = axios.create({
   baseURL: BASE_URL,
});
export const userRequest = axios.create({
   baseURL: BASE_URL,
   header: { token: `Bearer ${Token}` }
})