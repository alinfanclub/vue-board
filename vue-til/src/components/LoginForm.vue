<template>
    <div class="contents">
        <div class="form-wrapper form-wrapper-sm">
            <form @submit.prevent="loginForm" class="form">
                <div>
                    <label for="username">id : </label>
                    <input id="username" v-model="username" type="text" />
                    <p class="validation-text">
                        <span class="warning" v-if="!isFormValid && username">
                            Please enter an email address
                        </span>
                    </p>
                </div>
                <div>
                    <label for="password">password : </label>
                    <input id="password" v-model="password" type="password" />
                </div>
                <button :disabled="!isFormValid || !password" class="btn">
                    login
                </button>
                <p class="log">{{ loginMsg }}</p>
            </form>
        </div>
    </div>
</template>

<script>
import { logIn } from "@/api/api";
import { validateEmail } from "@/utils/validation";

export default {
    data() {
        return {
            username: "",
            password: "",
            //loginData
            loginMsg: "",
        };
    },
    methods: {
        async loginForm() {
            try {
                const loginData = {
                    username: this.username,
                    password: this.password,
                };
                const { data } = await logIn(loginData);
                this.$store.commit("setUsername", data.user.nickname);
                console.log(data.user);
                this.$router.push("/main");
            } catch (error) {
                console.log(error.response.data);
                this.loginMsg = error.response.data;
            } finally {
                this.initForm();
            }
        },
        initForm() {
            this.username = "";
            this.password = "";
            this.nickname = "";
        },
    },
    computed: {
        isFormValid() {
            return validateEmail(this.username);
        },
    },
};
</script>

<style></style>
