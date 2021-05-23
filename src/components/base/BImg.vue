<template>
    <img
        :src="src"
        :alt="alt"
        :style="{ width, height }"
        class="b-image"
        :class="{ 'b-image--contain': contain }"
    />
</template>

<script>
export default {
    name: "BImg",

    props: {
        src: String,
        alt: String,
        width: String,
        height: String,
        contain: Boolean,
    },
};
</script>

<style scoped>
.b-image {
    display: block;
    object-fit: cover;
}

.b-image--contain {
    object-fit: contain;
}
</style>
