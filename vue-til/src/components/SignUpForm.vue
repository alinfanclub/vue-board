<template>
    <div class="contents">
        <div class="form-wrapper form-wrapper-sm">
            <form @submit.prevent="submitForm" class="form">
                <div>
                    <label for="username">id: </label>
                    <input id="username" type="text" v-model="username" />
                </div>
                <div>
                    <label for="password">pw: </label>
                    <input id="password" type="text" v-model="password" />
                </div>
                <div>
                    <label for="nickname">nickname: </label>
                    <input id="nickname" type="text" v-model="nickname" />
                </div>
                <button
                    type="submit"
                    class="btn"
                    :disabled="!isFormValid || !password"
                >
                    회원 가입
                </button>
            </form>
            <p class="log">{{ logMsg }}</p>
        </div>
    </div>
</template>

<script>
import { registerUser } from "@/api/api";
import { validateEmail } from "@/utils/validation";
export default {
    data() {
        return {
            username: "",
            password: "",
            nickname: "",
            //log
            logMsg: "",
        };
    },
    methods: {
        async submitForm() {
            try {
                const userData = {
                    username: this.username,
                    password: this.password,
                    nickname: this.nickname,
                };
                const { data } = await registerUser(userData);
                console.log(data.username);
                this.logMsg = `${data.nickname}님이 성공적으로 가입 되었습니다.`;
                this.initForm();
            } catch (error) {
                this.logMsg = "올바른 입력값을 넣어 주세요";
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
    name: "SignUpForm",
};
</script>

<style></style>
