import axios from "axios";
import { setIntersepters } from "./common/interceptors";
//엑시오스 초기화 함수
function createInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    });

    return setIntersepters(instance);
}

const instance = createInstance();

//axios dont use axios create
// function registerUser(userData) {
//     const url = "http://localhost:3000/signup";
//     return axios.post(url, userData);
// }

//use axios create
//회원가입 API
function registerUser(userData) {
    return instance.post("signup", userData);
}
//로그인 API
function logIn(loginData) {
    return instance.post("login", loginData);
}

//학습 노트 데이터 조회하는 API
function fetchPosts() {
    return instance.get("posts");
}

//학습 노트 생성
function createPost(postData) {
    return instance.post("posts", postData);
}

export { registerUser, logIn, fetchPosts, createPost };
