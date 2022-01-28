<template>
    <section class="why-pick-us-container">
        <div class="pos-relative">
            <div class="title-holder">
                <h1 class="main-title">ՄԵՆՔ</h1>
                <h1 class="main-title">
                    ՍՏԵՂԾՈՒՄ ԵՆՔ
                </h1>
                <div class="underline"></div>
            </div>

            <v-img
                src="@/assets/home/whyPickUs/12.jpg"
                width="100%"
                height="auto"
                max-height="90vh"
            ></v-img>
        </div>

        <div class="sections-container">
            <WhyUsSection
                v-for="(section, i) in sections"
                :key="section.title"
                :reversed="i === 1"
                :title="section.title"
                :text="section.text"
                :mainImage="section.mainImage"
                :secondaryImage="section.secondaryImage"
            />
        </div>

        <img
            src="@/assets/home/whyPickUs/19.jpg"
            alt="half ready man statue"
            class="image__bottom"
        />

        <div class="logo-container">
            <h1 class="logo-title">SOLID STONES</h1>

            <p class="logo-text">
                Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված
                մոդելային տեքստ է։ Իպսումը հանդիսացել է տպագրական ստանդարտ
                տեքստ:
            </p>

            <h5 class="logo-subtitle">ԼՈՐԵՄ ԻՊՍՈՒՄ</h5>
        </div>
    </section>
</template>

<script>
import WhyUsSection from "./WhyUsSection.vue";

export default {
    name: "WhyPickUs",

    components: { WhyUsSection },

    data: () => ({
        sections: [
            {
                title: "ՄԵՆՔ ՍՏԵՂԾՈՒՄ ԵՆՔ",
                text: `
                    Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                    համար նախատեսված մոդելային տեքստ է։ Սկսած
                    1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական
                    ստանդարտ տեքստ:
                `,
                mainImage: "assets/whyPickUs/13.jpg",
                secondaryImage: "assets/whyPickUs/14.jpg",
            },
            {
                title: "ՄԵՆՔ ՄՇԱԿՈՒՄ ԵՆՔ",
                text: `
                    Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                    համար նախատեսված մոդելային տեքստ է։ Սկսած
                    1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական
                    ստանդարտ տեքստ:
                `,
                mainImage: "assets/whyPickUs/15.jpg",
                secondaryImage: "assets/whyPickUs/16.jpg",
            },
            {
                title: "ՄԵՆՔ ԱՌԱՔՈՒՄ ԵՆՔ",
                text: `
                    Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                    համար նախատեսված մոդելային տեքստ է։ Սկսած
                    1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական
                    ստանդարտ տեքստ:
                `,
                mainImage: "assets/whyPickUs/17.jpg",
                secondaryImage: "assets/whyPickUs/18.jpg",
            },
        ],
    }),
};
</script>

<style scoped>
.why-pick-us-container {
    background-color: black;
    color: white;
}

.title-holder {
    text-align: center;
    padding: 48px;
    padding-top: 0;
    z-index: 1000;
}

.main-title {
    color: white;
    font-family: Braind Yerevan;
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: 12px;
}

.underline {
    border-top: 3px solid white;
    max-width: 95px;
    margin: 10px auto 0;
    transform: translateX(-6px);
}

.sections-container {
    background-color: rgb(0, 0, 0);
    padding: 130px 24px;
}

.image__bottom {
    display: block;
    width: 100%;
    height: auto;
    max-height: 70vh;
}

.logo-container {
    text-align: center;
    padding: 50px 24px;
}

.logo-title {
    color: white;
    font-family: Braind Yerevan;
    font-size: 2.7rem;
    font-weight: 500;
    letter-spacing: 5px;
    margin-bottom: 15px;
}

.logo-text {
    max-width: 500px;
    color: white;
    font-family: DejaVu Sans;
    font-weight: 300;
    margin: 0 auto 25px;
}

.logo-subtitle {
    color: white;
    font-family: Braind Yerevan;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 5px;
}

@media screen and (min-width: 600px) {
    .logo-container {
        padding: 100px 24px;
    }
}

@media screen and (min-width: 960px) {
    .title-holder {
        position: absolute;
        top: 5%;
        left: 5%;
        max-width: 320px;
        padding: 0;
    }

    .sections-container {
        padding: 130px 50px;
    }
}

@media screen and (min-width: 1264px) {
    .title-holder {
        position: absolute;
        top: 11%;
        left: 9%;
        max-width: 320px;
        padding: 0;
    }

    .sections-container {
        padding: 130px 80px;
    }
}

@media screen and (min-width: 1400px) {
    .sections-container {
        padding: 130px 150px;
    }
}
</style>
