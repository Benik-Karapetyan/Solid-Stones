<template>
    <div>
        <v-row no-gutters>
            <v-col cols="6">
                <v-img
                    src="@/assets/about/22.jpg"
                    width="100%"
                    height="auto"
                ></v-img>
            </v-col>
            <v-col cols="6" class="values-content">
                <v-img
                    src="@/assets/logo-icon.png"
                    width="120"
                    class="mx-auto"
                ></v-img>
                <h1 class="values-title">ՄԵՐ ԱՐԺԵՔՆԵՐԸ</h1>
                <p class="values-text">
                    Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                    համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝
                    Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության
                    ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից
                    տարբեր տառատեսակների օրինակների
                </p>
                <p class="values-text">
                    Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                    համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝
                    Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության
                    ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից
                    տարբեր տառատեսակների օրինակների
                </p>
            </v-col>
        </v-row>
        <v-img src="@/assets/about/23.jpg" width="100%" height="auto"></v-img>
        <p class="ma-0 values__bottom-text">
            Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար
            նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը
            հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ,
            ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների
            հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ,
            ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների
        </p>
    </div>
</template>

<script>
export default {
    name: "OurValues",
};
</script>

<style scoped>
.values-content {
    padding: 60px 120px !important;
}

.values-title {
    margin: 36px 0 0;
    text-align: center;
    font-family: Braind Yerevan;
    font-size: 56px;
    font-weight: normal;
    line-height: 61px;
    letter-spacing: 7px;
}

.values-text {
    margin-top: 60px;
    text-align: center;
    font-size: 18px;
    line-height: 30px;
}

.values__bottom-text {
    margin: 0;
    padding: 160px 320px;
    text-align: center;
    line-height: 30px;
}
</style>
