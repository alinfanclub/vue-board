<template>
    <div class="contents">
        <h1 class="page-header">글작성</h1>
        <div class="form-wrapper">
            <form @submit.prevent="createPost" class="form">
                <div>
                    <label for="title">title:</label>
                    <input id="title" type="text" v-model="titleData" />
                </div>
                <div>
                    <label for="contents">Contents:</label>
                    <textarea
                        id="contents"
                        rows="5"
                        v-model="contentsData"
                    ></textarea>
                </div>
                <button type="submit" class="btn" @keypress="enter">
                    submit
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titleData: "",
            contentsData: "",
        };
    },
    methods: {
        async createPost() {
            try {
                const postData = {
                    title: this.titleData,
                    contents: this.contentsData,
                };
                await this.$store.dispatch("CREATE_POST", postData);
                this.$router.push("/main");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
.form-wrapper .form {
    width: 100%;
}
.btn {
    color: white;
}
</style>
