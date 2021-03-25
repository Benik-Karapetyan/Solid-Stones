<template>
    <div id="app">
        <router-view name="header"></router-view>
        <router-view />
    </div>
</template>

<style>
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
