import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

//axios dont use axios create
// function registerUser(userData) {
//     const url = "http://localhost:3000/signup";
//     return axios.post(url, userData);
// }

//use axios create
function registerUser(userData) {
    return instance.post("signup", userData);
}

function logIn(loginData) {
    return instance.post("login", loginData);
}

export { registerUser, logIn };
