<template>
    <div class="b-overlay"></div>
</template>

<script>
export default {
    name: "BOverlay",
};
</script>

<style scoped>
.b-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.25);
}
</style>
