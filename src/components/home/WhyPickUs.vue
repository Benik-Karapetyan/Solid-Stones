<template>
    <section class="why-pick-us-container">
        <div class="pos-relative">
            <div class="b-overlay"></div>

            <div class="title-holder">
                <h1 class="main-title">ՄԵՆՔ ՍՏԵՂԾՈՒՄ ԵՆՔ</h1>

                <div class="underline"></div>
            </div>

            <v-img
                src="@/assets/home/whyPickUs/12.jpg"
                width="100%"
                height="auto"
                min-height="340"
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

        <v-img
            src="@/assets/home/whyPickUs/19.jpg"
            alt="half ready man status"
            width="100%"
            height="auto"
            min-height="340"
            max-height="70vh"
        ></v-img>

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
                mainImage: "assets/home/whyPickUs/13.jpg",
                secondaryImage: "assets/home/whyPickUs/14.jpg",
            },
            {
                title: "ՄԵՆՔ ՄՇԱԿՈՒՄ ԵՆՔ",
                text: `
                    Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                    համար նախատեսված մոդելային տեքստ է։ Սկսած
                    1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական
                    ստանդարտ տեքստ:
                `,
                mainImage: "assets/home/whyPickUs/15.jpg",
                secondaryImage: "assets/home/whyPickUs/16.jpg",
            },
            {
                title: "ՄԵՆՔ ԱՌԱՔՈՒՄ ԵՆՔ",
                text: `
                    Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                    համար նախատեսված մոդելային տեքստ է։ Սկսած
                    1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական
                    ստանդարտ տեքստ:
                `,
                mainImage: "assets/home/whyPickUs/17.jpg",
                secondaryImage: "assets/home/whyPickUs/18.jpg",
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
/* @TODO - fix overlays height */
.b-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 77vh;
    z-index: 1;
    background: rgba(0, 0, 0, 0.25);
}

.title-holder {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
}

.main-title {
    font-family: Braind Yerevan;
    font-size: 4.3vw;
    font-weight: 500;
    letter-spacing: 12px;
    text-align: center;
}

.underline {
    border-top: 3px solid white;
    width: 100px;
    margin: 10px auto 0;
}

.sections-container {
    background-color: rgb(0, 0, 0);
    padding: 130px 24px 50px;
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
    .underline {
        border-top: 4px solid white;
    }

    .sections-container {
        padding: 130px 50px 50px;
    }
}

@media screen and (min-width: 1264px) {
    .sections-container {
        padding: 130px 80px 50px;
    }
}

@media screen and (min-width: 1400px) {
    .sections-container {
        padding: 130px 150px 50px;
    }
}
</style>
