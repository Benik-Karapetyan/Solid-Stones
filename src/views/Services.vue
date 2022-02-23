<template>
    <div class="services-container">
        <div
            v-for="(section, i) in sections"
            :key="i"
            class="pos-relative mb-6"
        >
            <b-overlay></b-overlay>

            <v-img :src="section.img" width="100%" height="215"></v-img>

            <div class="b-main-title b-centered">
                {{ section.text }}
            </div>
        </div>

        <div class="b-info-holder">
            <p class="b-info-text">
                Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված
                մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը
                հանդիսացել է տպագրական արդյունաբերության ստանդարտ:
            </p>
        </div>

        <CrossStoneSection />

        <ServiceSection :item="sectionOne" />

        <OrnamentSection />

        <ServiceSection :item="sectionTwo" />

        <AngelSection />

        <ServiceSection :item="sectionThree" />

        <ConstructionSection />

        <ServiceSection :item="sectionFour" />
    </div>
</template>

<script>
import image1 from "@/assets/services/42.jpg";
import image2 from "@/assets/services/47.jpg";
import image3 from "@/assets/services/52.jpg";
import image4 from "@/assets/services/61.jpg";
import image5 from "@/assets/services/43.jpg";
import image6 from "@/assets/services/44.jpg";
import image7 from "@/assets/services/45.jpg";
import image8 from "@/assets/services/46.jpg";
import image9 from "@/assets/services/48.jpg";
import image10 from "@/assets/services/49.jpg";
import image11 from "@/assets/services/50.jpg";
import image12 from "@/assets/services/51.jpg";
import image13 from "@/assets/services/53.jpg";
import image14 from "@/assets/services/54.jpg";
import image15 from "@/assets/services/55.jpg";
import image16 from "@/assets/services/56.jpg";
import image17 from "@/assets/services/58.jpg";
import image18 from "@/assets/services/59.jpg";
import image19 from "@/assets/services/60.jpg";
import image20 from "@/assets/services/61.jpg";

import ServiceSection from "@/components/services/ServiceSection.vue";
import CrossStoneSection from "@/components/services/CrossStoneSection.vue";
import OrnamentSection from "@/components/services/OrnamentSection.vue";
import AngelSection from "@/components/services/AngelSection.vue";
import ConstructionSection from "@/components/services/ConstructionSection.vue";

export default {
    name: "Services",

    components: {
        ServiceSection,
        CrossStoneSection,
        OrnamentSection,
        AngelSection,
        ConstructionSection,
    },

    data: () => ({
        sections: [
            { img: image1, text: "Խաչքար" },
            { img: image2, text: "Զարդաքանդակ" },
            { img: image3, text: "Արձան/Կիսանդրի/Հրեշտակ" },
            { img: image4, text: "Կառուցապատման Աշխատանքներ" },
        ],

        sectionOne: {
            text: `
                Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար
                նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը
                հանդիսացել է տպագրական ստանդարտ տեքստ։ Լորեմ Իպսումը տպագրության և
                տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։
            `,
            mainImage: image5,
            items: [
                {
                    image: image6,
                    title: "Մտածիր",
                    text: `
                        Խաչքարերի ստեղծման գործում առանձնահատուկ նշանակություն ունի
                        զարդանախշերի, համաչափ, հավասար խորությամբ դետալների
                        օգտագործումը։
                    `,
                },
                {
                    image: image7,
                    title: "Ստեղծիր Քարարվեստ",
                    text: `
                        Ստեղծիր ո՛չ ձեռքով, այլ մտքով։ Մենք դուրս ենք եկել արհեստի սահմաններից
                        ու ստեղծում ենք արվեստ՝ միաձուլելով միտքը, ձեռքն ու ժամանակակից տեխնոլոգիաները։
                    `,
                },
                {
                    image: image8,
                    title: "Արժևորիր Պատմությունը",
                    text: `
                        Խաչքարը քայլում է ժամանակի, պատմության ու մշակույթի միջով, 
                        իսկ մեր քանդակած խաչքարերը շարունակում են պահպանել ու
                        փոխանցել նրա բարձր արժեքը։ 
                    `,
                },
            ],
        },

        sectionTwo: {
            text: `
                Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար
                նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը
                հանդիսացել է տպագրական ստանդարտ տեքստ։ Լորեմ Իպսումը տպագրության և
                տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։
            `,
            mainImage: image9,
            items: [
                {
                    image: image10,
                    title: "Մտածիր",
                    text: `
                        Խաչքարերի ստեղծման գործում առանձնահատուկ նշանակություն ունի
                        զարդանախշերի, համաչափ, հավասար խորությամբ դետալների
                        օգտագործումը։
                    `,
                },
                {
                    image: image11,
                    title: "Ստեղծիր Քարարվեստ",
                    text: `
                        Ստեղծիր ո՛չ ձեռքով, այլ մտքով։ Մենք դուրս ենք եկել արհեստի սահմաններից
                        ու ստեղծում ենք արվեստ՝ միաձուլելով միտքը, ձեռքն ու ժամանակակից տեխնոլոգիաները։
                    `,
                },
                {
                    image: image12,
                    title: "Արժևորիր Պատմությունը",
                    text: `
                        Խաչքարը քայլում է ժամանակի, պատմության ու մշակույթի միջով, 
                        իսկ մեր քանդակած խաչքարերը շարունակում են պահպանել ու
                        փոխանցել նրա բարձր արժեքը։ 
                    `,
                },
            ],
        },

        sectionThree: {
            text: `
                Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար
                նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը
                հանդիսացել է տպագրական ստանդարտ տեքստ։ Լորեմ Իպսումը տպագրության և
                տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։
            `,
            mainImage: image13,
            items: [
                {
                    image: image14,
                    title: "Մոտ Եղիր Իրականությանը",
                    text: `
                        Նախապես կատարվող 3D մոդելավորումը հնարավորություն է տալիս ստեղծել
                        անսխալ, իրականին մոտ ու վերջնական արդյունքին լիարժեք նման աշխատանք։
                    `,
                },
                {
                    image: image15,
                    title: "Այն Ինչը Տեսանելի ՉԷ",
                    text: `
                        <div>- ընդգծված միկրոդիմագծեր</div>
                        <div>- հայացք</div>
                        <div>- արձանին տրված շունչ</div>
                        <div>Դու կտեսնես այն, ինչը թվում է տեսանելի չէ։</div>
                    `,
                },
                {
                    image: image16,
                    title: "Արժևորիր Պատմությունը",
                    text: `
                        Խաչքարը քայլում է ժամանակի, պատմության ու մշակույթի միջով, 
                        իսկ մեր քանդակած խաչքարերը շարունակում են պահպանել ու
                        փոխանցել նրա բարձր արժեքը։ 
                    `,
                },
            ],
        },

        sectionFour: {
            text: `
                Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար
                նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը
                հանդիսացել է տպագրական ստանդարտ տեքստ։ Լորեմ Իպսումը տպագրության և
                տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։
            `,
            mainImage: image17,
            items: [
                {
                    image: image18,
                    title: "Ճարտարապետական Արժեք",
                    text: `
                        Այն դադարել է լինել ՛՛պարզապես շինարարական աշխատանք՛՛ ու դարձել
                        է մասնագետների ստեղծագործությունը: Քո շինությունը ճարտարապետական արժեք է:
                    `,
                },
                {
                    image: image19,
                    title: "Հաջորդ Քայլը՝ Նոր Մոտեցում",
                    text: `
                        Օգտագործիր զարդաքանդակներ, ներքին և արտաքին դեկորներ, յուրահատուկ քարեր 
                        ու ճարտարապետական լուծումներ: Դու ստեղծում ես նոր արժեքներ:
                    `,
                },
                {
                    image: image20,
                    title: "Ամուր Հիմքը, Ամուր Սկիզբ Է",
                    text: `
                        Մենք Քո ճանապարհի հիմքը դնում ենք տարիների փորձի ու հմուտ մասնագետների հետ: 
                        Սպասված արդյունքը երկար ժամանակ չի պահանջի:  
                    `,
                },
            ],
        },
    }),
};
</script>

<style scoped>
.services-container {
    background-color: black;
    color: white;
}

.b-main-title {
    width: 100%;
    font-family: Braind Yerevan;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-align: center;
    z-index: 1;
}

.b-centered {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.b-info-holder {
    background-color: white;
    color: black;
    padding: 40px 0;
}

.b-info-text {
    margin: auto;
    padding: 0 40px;
    max-width: 740px;
    line-height: 36px;
    text-align: center;
}

@media screen and (min-width: 600px) {
    .b-info-holder {
        padding: 80px 0;
    }
}

@media screen and (min-width: 960px) {
    .b-info-holder {
        padding: 120px 0;
    }

    .b-info-text {
        padding: 0;
    }
}
</style>
