<template>
    <span
        class="b-icon"
        :class="dark ? 'theme--dark' : 'theme--light'"
        :style="{
            color,
            caretColor: color,
            fontSize: size + 'px',
            height: size + 'px',
            width: size + 'px',
        }"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            class="b-icon__svg"
            :style="{
                fontSize: size + 'px',
                height: size + 'px',
                width: size + 'px',
            }"
        >
            <path :d="text"></path>
        </svg>
    </span>
</template>

<script>
export default {
    name: "BIcon",

    props: {
        text: String,
        dark: Boolean,
        color: String,
        size: String,
    },
};
</script>

<style scoped>
.b-icon {
    align-items: center;
    display: inline-flex;
    font-feature-settings: "liga";
    font-size: 24px;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    position: relative;
    text-indent: 0;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.b-icon__svg {
    height: 24px;
    width: 24px;
    fill: currentColor;
}

.b-icon::after {
    background-color: currentColor;
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transform: scale(1.3);
    width: 100%;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.theme--light.b-icon {
    color: rgba(0, 0, 0, 0.54);
}

.theme--dark.b-icon {
    color: #ffffff;
}
</style>
