<template>
    <nav class="app-navbar" :class="$route.path === '/' ? 'pos-absolute' : ''">
        <v-row no-gutters justify="space-between" align="center">
            <v-col cols="auto">
                <router-link to="/">
                    <img
                        src="@/assets/main-logo.png"
                        alt="website logo"
                        class="header-logo"
                    />
                </router-link>
            </v-col>

            <v-col cols="auto">
                <v-btn
                    icon
                    dark
                    class="d-md-none"
                    large
                    @click="drawer = !drawer"
                >
                    <v-icon v-text="icons.mdiMenu" size="28"></v-icon>
                </v-btn>
                <ul class="b-list d-none d-md-block">
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
                            <b-icon
                                v-if="link.hasIcon"
                                dark
                                :text="icons.mdiChevronDown"
                            ></b-icon>
                        </router-link>
                    </li>
                </ul>
            </v-col>
        </v-row>
    </nav>
</template>

<script>
import { mdiChevronDown, mdiChevronUp, mdiMenu } from "@mdi/js";

export default {
    name: "NavBar",

    data: () => ({
        icons: { mdiChevronDown, mdiChevronUp, mdiMenu },
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
.app-navbar {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 22px 12px 22px 24px;
    width: 100%;
    z-index: 1000;
}

.header-logo {
    cursor: pointer;
    width: 240px;
    height: auto;
    vertical-align: middle;
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

@media screen and (min-width: 960px) {
    .app-navbar {
        padding: 0;
        padding-left: 24px;
    }
}

@media screen and (min-width: 1264px) {
    .app-navbar {
        padding: 0 150px;
    }

    .header-logo {
        width: 270px;
    }
}
</style>
