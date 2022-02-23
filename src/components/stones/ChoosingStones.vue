<template>
    <section>
        <v-row no-gutters class="black">
            <v-col order="2" order-md="1" cols="12" md="6">
                <b-info-banner
                    max-width="100%"
                    background-color="#1C191A"
                    class="b-text-container"
                >
                    <template v-slot:header>
                        <v-img
                            src="@/assets/logo-icon.png"
                            width="75"
                            height="auto"
                            class="ma-auto mb-3"
                        ></v-img>

                        ՔԱՐԵՐԻ ԸՆՏՐՈՒԹՅՈՒՆԸ
                    </template>

                    <p class="mx-auto" style="max-width: 440px">
                        Լորեմ Իպսումը տպագրական արդյունաբերության համար
                        նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝
                        Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության
                        ստանդարտ մոդելային տեքստ: Լորեմ Իպսումը տպագրական
                        արդյունաբերության համար նախատեսված մոդելային տեքստ է։
                    </p>

                    <p class="mx-auto mb-0" style="max-width: 440px">
                        Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է
                        տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ:
                        Լորեմ Իպսումը տպագրական արդյունաբերության համար
                        նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝
                        Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության
                        ստանդարտ մոդելային տեքստ:
                    </p>
                </b-info-banner>
            </v-col>
            <v-col order="1" order-md="2" cols="12" md="6">
                <v-img src="@/assets/stones/26.jpg" class="b-image"></v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "Assortment",
};
</script>

<style scoped>
.b-text-container {
    padding: 80px 20px;
    width: 100%;
    max-width: 483px !important;
    margin: auto;
}

.b-image {
    width: 100%;
    max-width: 483px;
    height: 483px;
    margin: auto;
}

@media screen and (min-width: 960px) {
    .b-image {
        max-width: none;
        height: 100%;
    }

    .b-text-container {
        max-width: 100% !important;
    }
}
</style>
