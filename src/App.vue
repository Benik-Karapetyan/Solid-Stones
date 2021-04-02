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

    data: () => ({}),
};
</script>

<style>
@font-face {
    font-family: "Braind Yerevan";
    src: url("./assets/fonts/BraindYerevan.otf");
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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
