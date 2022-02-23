<template>
    <section class="assortment-container">
        <v-row no-gutters justify="center" justify-md="space-around">
            <v-col
                v-for="stone in stones"
                :key="stone.title"
                cols="12"
                md="6"
                lg="5"
                class="px-0 px-sm-5"
            >
                <v-img
                    :src="stone.image"
                    width="380"
                    height="380"
                    class="ma-auto"
                ></v-img>

                <b-info-banner
                    background-color="#1C191A"
                    class="pa-10 mx-auto"
                    style="margin-bottom: 140px"
                >
                    <template v-slot:header>
                        {{ stone.title }}
                    </template>

                    {{ stone.text }}
                </b-info-banner>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import img1 from "@/assets/stones/27.jpg";
import img2 from "@/assets/stones/28.jpg";
import img3 from "@/assets/stones/29.jpg";
import img4 from "@/assets/stones/30.jpg";
import img5 from "@/assets/stones/31.jpg";
import img6 from "@/assets/stones/32.jpg";

export default {
    name: "Assortment",

    data: () => ({
        stones: [
            {
                image: img1,
                title: "Տուֆ",
                text: `
                    Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ 
                    Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ:Իպսումը:
                `,
            },
            {
                image: img2,
                title: "Բազալտ",
                text: `
                    Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ 
                    Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ:Իպսումը:
                `,
            },
            {
                image: img3,
                title: "Գրանիտ",
                text: `
                    Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ 
                    Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ:Իպսումը:
                `,
            },
            {
                image: img4,
                title: "Մարմար",
                text: `
                    Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ 
                    Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ:Իպսումը:
                `,
            },
            {
                image: img5,
                title: "Ֆելզիտ",
                text: `
                    Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ 
                    Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ:Իպսումը:
                `,
            },
            {
                image: img6,
                title: "Տրավերտին",
                text: `
                    Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ 
                    Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ:Իպսումը:
                `,
            },
        ],
    }),
};
</script>

<style scoped>
.assortment-container {
    background-color: black;
    padding: 140px 0;
    padding-bottom: 0;
}
</style>
