<template>
    <footer class="app-footer">
        <img
            src="@/assets/main-logo-footer.jpg"
            alt="website logo"
            style="width: 300px; height: auto; display: block; margin: 0 auto 40px;"
        />

        <router-link
            v-for="navLink in navLinks"
            :key="navLink.title"
            :to="navLink.to"
            v-text="navLink.title"
            class="footer-link"
            exact-active-class="footer-link--active"
            exact
        ></router-link>
    </footer>
</template>

<script>
export default {
    name: "AppFooter",

    data: () => ({
        navLinks: [
            { title: "Գլխավոր", to: "/" },
            { title: "Ծառայություններ", to: "/services" },
            { title: "Քարերի Տեսականի", to: "/stones" },
            { title: "Ինչու Ընտրել Մեզ", to: "/why-pick-us" },
            { title: "Մեր Մասին", to: "/about" },
        ],
    }),
};
</script>

<style scoped>
.app-footer {
    background-color: rgb(30, 30, 30);
    color: white;
    padding: 50px;
    text-align: center;
}

.footer-link {
    text-decoration: none;
    color: white;
    margin: 0 12px;
    font-family: DejaVu Sans;
    font-size: 0.9rem;
}

.footer-link--active {
    font-weight: bold;
}

.footer-link:hover {
    text-decoration: underline;
}
</style>
