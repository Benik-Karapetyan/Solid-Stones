<template>
    <v-app>
        <v-main>
            <router-view name="header"></router-view>
            <router-view></router-view>
            <router-view name="footer"></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        isMobile: false,
    }),
};
</script>

<style>
@font-face {
    font-family: "Braind Yerevan";
    src: url("./assets/fonts/BraindYerevan.otf");
}

@font-face {
    font-family: "DejaVuSans";
    src: url("./assets/fonts/DejaVuSans.ttf");
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-size: 16px !important;
    scroll-behavior: smooth;
}

.bb {
    border: 1px solid black;
}

.bw {
    border: 1px solid white;
}

#app {
    font-family: DejaVu Sans, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.pos-relative {
    position: relative;
}

.pos-absolute {
    position: absolute;
}

.b-image {
    display: block;
    object-fit: cover;
}
</style>
