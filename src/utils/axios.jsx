import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzExMWE4NzVhNDkxMmVjZTE3NTA0ZGMwN2UyOTA4ZiIsIm5iZiI6MTcyOTI3NTc0Ni4yNDYzNzQsInN1YiI6IjY3MTJhMzRhOGU4NDQ2NTdiN2ZiM2Y1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UC_8GGZE6bxrza2sYaGgyu3TshBGY1i4mGna82Hvpxc",
  },
});

export default instance;