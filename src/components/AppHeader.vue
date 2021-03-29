<template>
    <header class="app-header">
        <nav class="app-navbar">
            <div class="app-title">
                <img
                    src="@/assets/main-logo.png"
                    alt="website logo"
                    class="header-logo"
                />
            </div>

            <ul class="b-list">
                <li
                    v-for="link in navLinks"
                    :key="link.title"
                    class="b-list-item"
                >
                    <router-link
                        class="b-list-item-link"
                        active-class="b-list-item-link--active"
                        :to="link.to"
                        exact
                    >
                        {{ link.title }}
                        <v-icon
                            v-if="link.hasIcon"
                            dark
                            v-text="icons.mdiChevronDown"
                        ></v-icon>
                    </router-link>
                </li>
            </ul>
        </nav>

        <div class="banner-container">
            <div class="info-banner">
                <div class="title-holder">
                    <div>Խաչքարեր</div>
                    <div>Զարդաքանդակներ</div>
                    <div>Արձաններ</div>
                </div>
                <div class="underline"></div>
                <div class="banner-text">
                    Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված
                    մոդելային տեքստ է։
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

export default {
    name: "AppHeader",

    data: () => ({
        icons: { mdiChevronDown, mdiChevronUp },
        navLinks: [
            { title: "Գլխավոր", to: "/" },
            { title: "Ծառայություններ", to: "/services", hasIcon: true },
            { title: "Քարեր", to: "/stones" },
            { title: "Ինչու Մենք", to: "/why-pick-us" },
            { title: "Մեր Մասին", to: "/about" },
        ],
    }),
};
</script>

<style scoped>
.app-header {
    background: url("../assets/angel-cutted.jpg") no-repeat;
    background-size: cover;
    height: 75vh;
}

.app-navbar {
    background-color: rgb(0, 0, 0, 0.7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 150px;
}

.app-title {
    display: flex;
    align-items: center;
}

.header-logo {
    width: 270px;
    height: auto;
}

.b-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.b-list-item {
    display: inline-block;
}

.b-list-item-link {
    text-decoration: none;
    display: block;
    color: white;
    padding: 36px 16px;
}

.b-list-item-link--active {
    background-color: black;
}

.b-list-item-link:hover {
    background-color: black;
}

.banner-container {
    height: calc(75vh - 97.45px);
    padding: 0 150px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.info-banner {
    max-width: 500px;
    background-color: black;
    color: white;
    text-align: center;
    padding: 50px;
}

.title-holder {
    font-family: Braind Yerevan;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 2.5px;
}

.underline {
    border-top: 3px solid white;
    width: 45px;
    margin: 15px auto 45px;
}

.banner-text {
    font-size: 15px;
}
</style>
