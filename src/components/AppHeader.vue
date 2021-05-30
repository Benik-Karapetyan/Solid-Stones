<template>
    <header>
        <NavBar />

        <div class="pos-relative black">
            <v-img
                :src="mainImage"
                width="100%"
                height="auto"
                :max-height="mainImageMaxHeight"
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

            <div
                v-else-if="this.$route.path === '/stones'"
                class="stones-banner-container"
            >
                <b-info-banner class="stones-banner">
                    <template v-slot:header>
                        <v-img
                            src="@/assets/logo-icon.png"
                            width="75"
                            height="auto"
                            class="ma-auto mb-3"
                        ></v-img>

                        ՔԱՐԵՐԻ ՄԵԾ ՏԵՍԱԿԱՆԻ
                    </template>

                    <div
                        style="font-family: Braind Yerevan; font-size: 18px; letter-spacing: 2px"
                    >
                        Լորեմ Իպսումը տպագրական արդյունաբերության համար
                        նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝
                        Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության
                        ստանդարտ մոդելային տեքստ:
                    </div>
                </b-info-banner>
            </div>
        </div>
    </header>
</template>

<script>
import NavBar from "./NavBar";
import angelPic from "@/assets/angel.jpg";
import stonesPic from "@/assets/stones.jpg";
import lionPic from "@/assets/lion.jpg";

export default {
    name: "AppHeader",

    components: { NavBar },

    data: () => ({}),

    computed: {
        mainImage() {
            switch (this.$route.path) {
                case "/":
                    return angelPic;
                case "/stones":
                    return stonesPic;
                case "/about":
                    return lionPic;
                default:
                    return angelPic;
            }
        },

        mainImageMaxHeight() {
            switch (this.$route.path) {
                case "/stones":
                    return "70vh";
                default:
                    return "100vh";
            }
        },
    },
};
</script>

<style scoped>
.banner-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.stones-banner-container {
    display: flex;
    justify-content: center;
}

.stones-banner {
    padding: 48px;
    min-width: 100%;
}

@media screen and (min-width: 600px) {
    .banner-container {
        padding: 75px;
        padding-bottom: 15px;
    }

    .stones-banner {
        padding: 48px 96px;
        min-width: 100%;
    }
}

@media screen and (min-width: 960px) {
    .banner-container {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0;
    }

    .stones-banner-container {
        transform: translateY(-65%);
    }

    .stones-banner {
        padding: 48px 96px;
        min-width: 800px;
    }
}

@media screen and (min-width: 1264px) {
    .banner-container {
        position: absolute;
        top: 50%;
        right: 150px;
        transform: translateY(-20%);
    }

    .stones-banner {
        padding: 72px 96px;
        min-width: 1000px;
    }
}
</style>
