<template>
    <div class="about-container">
        <Start />
        <Products />
        <OurValues />
    </div>
</template>

<script>
import Start from "../components/about/Start.vue";
import Products from "../components/about/Products.vue";
import OurValues from "../components/about/OurValues.vue";

export default {
    name: "About",

    components: { Start, Products, OurValues },
};
</script>

<style scoped>
.about-container {
    background-color: black;
    color: white;
}

.title {
    font-family: Braind Yerevan;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 2.5px;
}
</style>
