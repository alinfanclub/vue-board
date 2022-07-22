import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            userName: "",
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
    },
});

export default store;
