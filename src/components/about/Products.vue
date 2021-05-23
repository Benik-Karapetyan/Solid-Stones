<template>
    <section class="products-container">
        <v-row no-gutters justify="center" align="center">
            <v-col cols="5">
                <img
                    src="@/assets/about/21.jpg"
                    alt="waterbride"
                    class="waterbride"
                />
            </v-col>

            <v-col cols="4" style="transform: translateX(-50px)">
                <b-info-banner
                    background-color="#1C191A"
                    style="padding: 50px 80px"
                >
                    <template v-slot:header>
                        ԼՈՐԵՄ ԻՊՍՈՒՄ
                    </template>

                    Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                    համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝
                    Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության
                    ստանդարտ մոդելային տեքստ
                </b-info-banner>
            </v-col>
        </v-row>

        <v-row no-gutters justify="space-between" class="products-holder">
            <v-col
                v-for="product in products"
                :key="product.title"
                cols="3"
                class="product-box mx-1"
            >
                <h1 class="product-title" v-text="product.title"></h1>
                <p class="product-text" v-text="product.text"></p>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "AboutProducts",

    data: () => ({
        products: [
            {
                title: "ԽԱՉՔԱՐ",
                text:
                    "Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից:",
            },
            {
                title: "ԶԱՐԴԱՔԱՆԴԱԿ",
                text:
                    "Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից:",
            },
            {
                title: "ԱՐՁԱՆ",
                text:
                    "Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից:",
            },
            {
                title: "ԿԻՍԱՆԴՐԻ",
                text:
                    "Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից:",
            },
            {
                title: "ՀՐԵՇՏԱԿ",
                text:
                    "Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից:",
            },
            {
                title: "ԿԱՌՈՒՑԱՊԱՏՈՒՄ",
                text:
                    "Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից:",
            },
        ],
    }),
};
</script>

<style scoped>
.products-container {
    padding: 0 150px;
}

.waterbride {
    width: 100%;
    height: 500px;
    object-fit: cover;
    vertical-align: middle;
}

.products-holder {
    padding: 100px 0 180px;
}

.product-box {
    margin-top: 80px;
}

.product-title {
    margin: 0 0 24px 0;
    font-size: 26px;
    line-height: 32px;
}

.product-text {
    line-height: 32px;
}
</style>
