<template>
    <header>
        <NavBar />

        <div class="pos-relative">
            <v-img
                src="@/assets/angel.jpg"
                width="100%"
                height="auto"
                max-height="100vh"
            ></v-img>

            <div v-if="this.$route.path === '/'" class="banner-container">
                <b-info-banner underline style="padding: 50px 40px">
                    <template v-slot:header>
                        <div>Խաչքարեր</div>
                        <div>Զարդաքանդակներ</div>
                        <div>Արձաններ</div>
                    </template>

                    Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված
                    մոդելային տեքստ է։
                </b-info-banner>
            </div>
        </div>
    </header>
</template>

<script>
import NavBar from "./NavBar";

export default {
    name: "AppHeader",

    components: { NavBar },

    data: () => ({}),
};
</script>

<style scoped>
.banner-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

@media screen and (min-width: 600px) {
    .banner-container {
        padding: 75px;
        padding-bottom: 15px;
    }
}

@media screen and (min-width: 960px) {
    .banner-container {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0;
    }
}

@media screen and (min-width: 1264px) {
    .banner-container {
        position: absolute;
        top: 50%;
        right: 150px;
        transform: translateY(-20%);
    }
}
</style>
