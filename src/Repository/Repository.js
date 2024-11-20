import axios from "axios";
const baseURL = `https://carticket.herokuapp.com/`;
// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1ODkzMzUzLCJleHAiOjE2ODc0MjkzNTN9.uEauxxj3ij2f0QoznBDaWMBgyWvzIs8RvwymO_Yedp0";
// let token = JSON.parse(localStorage.getItem("auth"));

export default axios.create({
  baseURL,
//   headers: {
//     "Cache-Control": "no-cache",
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token?.stsTokenManager?.accessToken}`,
//   },
});
