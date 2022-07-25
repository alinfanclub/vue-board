<template>
    <div>
        <div class="main list-container contents">
            <h1 class="page-header">Today I Learned</h1>
            <loading-spinner v-if="isLoading"></loading-spinner>
            <ul v-else>
                <PostLIstItem
                    v-for="postItem in postItems"
                    :key="postItem._id"
                    :postItem="postItem"
                >
                </PostLIstItem>
            </ul>
        </div>
        <router-link to="/add" class="create-button">
            <ion-icon name="add-outline"></ion-icon>
        </router-link>
    </div>
</template>

<script>
import { fetchPosts } from "@/api/api";
import PostLIstItem from "../components/posts/PostLIstItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
export default {
    data() {
        return {
            postItems: [],
            isLoading: false,
        };
    },
    methods: {
        async fetchData() {
            this.isLoading = true;
            const { data } = await fetchPosts();
            this.isLoading = false;
            console.log(data);
            this.postItems = data.posts;
        },
    },
    created() {
        this.fetchData();
    },
    components: {
        PostLIstItem,
        LoadingSpinner,
    },
};
</script>

<style scoped>
ion-icon {
    font-size: 40px;
    --ionicon-stroke-width: 60px;
}
</style>
