<template>
    <header>
        <div>
            <router-link to="/" class="logo"> TIL </router-link>
        </div>
        <div class="navigations">
            <template v-if="isUserLogin">
                <div v-show="this.$store.state.userName" id="userInfo">
                    <p>Hellow! {{ this.$store.state.userName }}</p>
                    <button @click="logoutUser">logout</button>
                </div>
            </template>
            <template v-else>
                <router-link to="/login">로그인 </router-link>
                <router-link to="/signup">회원가입</router-link>
            </template>
        </div>
    </header>
</template>

<script>
export default {
    computed: {
        isUserLogin() {
            return this.$store.getters.isLogin;
        },
    },
    methods: {
        logoutUser() {
            this.$store.commit("clearUsername");
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #927dfc;
    z-index: 2;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
    color: #dedede;
    font-size: 18px;
}
a.logo {
    font-size: 30px;
    font-weight: 900;
    color: white;
}
.logo > span {
    font-size: 14px;
    font-weight: normal;
}
.navigations a {
    margin-right: 10px;
}
.fixed {
    position: fixed;
    top: 0;
    width: 100%;
}
a.router-link-exact-active {
    color: white;
    font-weight: bold;
}
.navigations {
    display: flex;
    align-items: center;
}
.navigations p {
    font-weight: bold;
    color: white;
}
#userInfo {
    display: flex;
    align-items: center;
}

#userInfo p {
    margin-right: 20px;
}
</style>
