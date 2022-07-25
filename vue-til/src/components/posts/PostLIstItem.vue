<template>
    <li>
        <div class="post-title">
            {{ postItem.title }}
             <div>
                <button>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
        </div>
        <div class="post-contents">
            {{ postItem.contents }}
        </div>
        <div class="post-time">
            {{ postItem.createdAt }}
        </div>
    </li>
</template>

<script>
export default {
    props: {
        postItem: {
            type: Object,
            require: true,
        },
    },
};
</script>

<style scoped>
.post-title {
    display: flex;
    justify-content: space-between;
}
</style>
