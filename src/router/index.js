import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "header" */ "@/components/AppHeader.vue"
                ),
            default: () =>
                import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
            footer: () =>
                import(
                    /* webpackChunkName: "footer" */ "@/components/AppFooter.vue"
                ),
        },
    },
    {
        path: "/services",
        name: "Services",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "header" */ "@/components/AppHeader.vue"
                ),
            default: () =>
                import(
                    /* webpackChunkName: "services" */ "@/views/Services.vue"
                ),
            footer: () =>
                import(
                    /* webpackChunkName: "footer" */ "@/components/AppFooter.vue"
                ),
        },
    },
    {
        path: "/stones",
        name: "Stones",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "header" */ "@/components/AppHeader.vue"
                ),
            default: () =>
                import(/* webpackChunkName: "stones" */ "@/views/Stones.vue"),
            footer: () =>
                import(
                    /* webpackChunkName: "footer" */ "@/components/AppFooter.vue"
                ),
        },
    },
    {
        path: "/why-pick-us",
        name: "WhyPickUs",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "header" */ "@/components/AppHeader.vue"
                ),
            default: () =>
                import(
                    /* webpackChunkName: "whyPickUs" */ "@/views/WhyPickUs.vue"
                ),
            footer: () =>
                import(
                    /* webpackChunkName: "footer" */ "@/components/AppFooter.vue"
                ),
        },
    },
    {
        path: "/about",
        name: "About",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "header" */ "@/components/AppHeader.vue"
                ),
            default: () =>
                import(/* webpackChunkName: "about" */ "@/views/About.vue"),
            footer: () =>
                import(
                    /* webpackChunkName: "footer" */ "@/components/AppFooter.vue"
                ),
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
