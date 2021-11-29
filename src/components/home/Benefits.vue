<template>
    <section class="benefits-container">
        <div class="pos-relative">
            <div class="mastery-title-holder">
                <h1 class="mastery-title">CREATE FROM NOTHING</h1>
                <div class="underline"></div>
            </div>
            <v-img
                src="@/assets/mastery.jpg"
                width="100%"
                height="auto"
                min-height="340"
                max-height="85vh"
            ></v-img>
        </div>

        <v-row no-gutters class="pa-5">
            <v-col
                v-for="benefit in benefits"
                :key="benefit.title"
                cols="12"
                sm="6"
                md="3"
                class="text-center py-5"
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
.benefits-container {
    background-color: rgb(30, 30, 30);
    color: white;
}

.mastery-title-holder {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
}

.mastery-title {
    font-size: 4.3vw !important;
    font-weight: 500;
    letter-spacing: 0.9rem;
    text-align: center;
    margin-bottom: 10px;
}

.underline {
    border-top: 3px solid white;
    width: 100px;
    margin: auto;
}

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
    .mastery-title-holder {
        padding: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .mastery-title {
        font-weight: 500;
        letter-spacing: 0.9rem;
        text-align: center;
        margin-bottom: 20px;
    }

    .underline {
        border-top: 4px solid white;
    }

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
