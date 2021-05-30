<template>
    <div class="info-banner" :style="{ minWidth, maxWidth, backgroundColor }">
        <div class="title-holder">
            <slot name="header"></slot>
        </div>
        <div v-if="underline" class="underline"></div>
        <div class="banner-text">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoBanner",

    props: {
        minWidth: {
            type: String,
            default: "",
        },
        maxWidth: {
            type: String,
            default: "500px",
        },
        backgroundColor: {
            type: String,
            default: "black",
        },
        underline: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.info-banner {
    color: white;
    text-align: center;
}

.title-holder {
    font-family: Braind Yerevan;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 2.5px;
    margin-bottom: 20px;
}

.underline {
    border-top: 4px solid white;
    width: 60px;
    margin: 0 auto 50px;
}

.banner-text {
    font-size: 15px;
}
</style>
