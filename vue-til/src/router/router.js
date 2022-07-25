import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        component: () => import("../views/LoginPage.vue"),
    },
    {
        path: "/signup",
        component: () => import("../views/SignUpPage.vue"),
    },
    {
        path: "/main",
        component: () => import("../views/MainPage.vue"),
    },
    {
        path: "/:catchAll(.*)",
        component: () => import("../views/NotFoundPage.vue"),
    },
    {
        path: "/add",
        component: () => import("../views/PostAddPage"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
