<template>
    <v-row
        no-gutters
        class="pa-5 white--text"
        :style="{ backgroundColor: color }"
    >
        <v-col
            v-for="benefit in benefits"
            :key="benefit.title"
            cols="12"
            sm="6"
            md="3"
            class="text-center py-5"
        >
            <img :src="benefit.icon" alt="benefit icon" class="benefit-image" />
            <h3 class="benefit-title" v-text="benefit.title"></h3>
            <p class="benefit-text" v-text="benefit.text"></p>
        </v-col>
    </v-row>
</template>

<script>
import qualityMaterials from "@/assets/icons/quality-materials.png";
import plaesedCustomers from "@/assets/icons/plaesed-customers.png";
import justifiedPrices from "@/assets/icons/justified-prices.png";
import thousandCustomers from "@/assets/icons/1000-customers.png";

export default {
    name: "Benefits",

    props: {
        color: String,
    },

    data: () => ({
        benefits: [
            {
                icon: qualityMaterials,
                title: "ՈՐԱԿՅԱԼ ՆՅՈՒԹԵՐ",
                text: `Լորեմ Իպսումը տպագրական մոդելային տեքստ է։`,
            },
            {
                icon: plaesedCustomers,
                title: "ԲԱՎԱՐԱՐՎԱԾ ՀԱՃԱԽՈՐԴՆԵՐ",
                text: `Լորեմ Իպսումը տպագրական մոդելային տեքստ է։`,
            },
            {
                icon: justifiedPrices,
                title: "ԱՐԴԱՐԱՑՎԱԾ ԳՆԵՐ",
                text: `Լորեմ Իպսումը տպագրական մոդելային տեքստ է։`,
            },
            {
                icon: thousandCustomers,
                title: "1000+ ՀԱՃԱԽՈՐԴՆԵՐ",
                text: `Լորեմ Իպսումը տպագրական մոդելային տեքստ է։`,
            },
        ],
    }),
};
</script>

<style scoped>
.benefit-image {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    margin: 0 0 30px;
}

.benefit-title {
    font-family: Braind Yerevan;
    font-weight: 500;
    font-size: 1.3rem;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

.benefit-text {
    font-size: 13px;
    margin: 0 auto;
    max-width: 50%;
}

@media screen and (min-width: 600px) {
    .benefit-text {
        max-width: 60%;
    }
}

@media screen and (min-width: 960px) {
    .benefit-text {
        max-width: 60%;
    }
}

@media screen and (min-width: 1264px) {
    .benefit-text {
        max-width: 50%;
    }
}
</style>
