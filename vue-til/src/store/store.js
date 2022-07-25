import { createStore } from "vuex";
import { getAuthFromCookie, getUserFromCookie } from "@/utils/cookies";
import { logIn, createPost } from "@/api/api";
import { saveAuthToCookie, saveUserToCookie } from "@/utils/cookies";

const store = createStore({
    state() {
        return {
            userName: getUserFromCookie() || "",
            token: getAuthFromCookie() || "",
            title: "",
            contents: "",
        };
    },
    getters: {
        isLogin(state) {
            return state.userName !== "";
        },
    },
    mutations: {
        setUsername(state, username) {
            state.userName = username;
        },
        clearUsername(state) {
            state.userName = "";
        },
        setToken(state, token) {
            state.token = token;
        },
        setTilte(state, title) {
            state.title = title;
        },
        setContents(state, contents) {
            state.contents = contents;
        },
    },
    actions: {
        async LOGIN({ commit }, loginData) {
            const { data } = await logIn(loginData);
            commit("setToken", data.token);
            commit("setUsername", data.user.nickname);
            saveAuthToCookie(data.token);
            saveUserToCookie(data.user.username);
            return data;
        },
        async CREATE_POST({ commit }, postData) {
            const { data } = await createPost(postData);
            commit("setTitle", data.title);
            commit("setContents", data.contents);
        },
    },
});

export default store;
