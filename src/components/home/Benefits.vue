<template>
    <section class="benefits">
        <div class="mastery-container">
            <h1 class="mastery-title">CREATE FROM NOTHING</h1>
            <div class="underline"></div>
        </div>

        <v-row no-gutters style="padding: 50px 75px">
            <v-col
                v-for="benefit in benefits"
                :key="benefit.title"
                cols="3"
                class="text-center"
            >
                <img
                    :src="benefit.icon"
                    alt="benefit icon"
                    class="benefit-image"
                />
                <h3 class="benefit-title" v-text="benefit.title"></h3>
                <p class="benefit-text" v-text="benefit.text"></p>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import qualityMaterials from "@/assets/icons/quality-materials.png";
import plaesedCustomers from "@/assets/icons/plaesed-customers.png";
import justifiedPrices from "@/assets/icons/justified-prices.png";
import thousandCustomers from "@/assets/icons/1000-customers.png";

export default {
    name: "Benefits",

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
.benefits {
    background-color: rgb(30, 30, 30);
    color: white;
}

.mastery-container {
    background: url("../../assets/mastery.jpg") no-repeat;
    background-size: cover;
    height: 140vh;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}

.mastery-title {
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 0.9rem;
    flex-basis: 100%;
    text-align: center;
}

.underline {
    border-top: 4px solid white;
    width: 100px;
    margin-top: 20px;
}

.benefit-image {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    margin-bottom: 30px;
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
    margin: 0;
    padding: 0 70px;
}
</style>
