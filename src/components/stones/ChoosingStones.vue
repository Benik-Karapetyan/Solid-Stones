<template>
    <section>
        <v-row no-gutters>
            <v-col cols="6">
                <b-info-banner
                    max-width="100%"
                    background-color="#1C191A"
                    style="padding: 80px 160px"
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

                    <p>
                        Լորեմ Իպսումը տպագրական արդյունաբերության համար
                        նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝
                        Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության
                        ստանդարտ մոդելային տեքստ: Լորեմ Իպսումը տպագրական
                        արդյունաբերության համար նախատեսված մոդելային տեքստ է։
                    </p>

                    <p class="ma-0">
                        Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է
                        տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ:
                        Լորեմ Իպսումը տպագրական արդյունաբերության համար
                        նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝
                        Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության
                        ստանդարտ մոդելային տեքստ:
                    </p>
                </b-info-banner>
            </v-col>
            <v-col cols="6">
                <v-img
                    src="@/assets/stones/26.jpg"
                    width="100%"
                    height="100%"
                ></v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "Assortment",
};
</script>
