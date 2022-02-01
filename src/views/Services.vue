<template>
    <div class="services-container">
        <div
            v-for="(section, i) in sections"
            :key="i"
            class="pos-relative mb-6"
        >
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

        <div class="pos-relative">
            <v-img src="@/assets/services/42.jpg" height="100vh"></v-img>

            <div class="cross-stone-holder">
                <v-img
                    src="@/assets/logo-icon.png"
                    width="130"
                    height="auto"
                    class="mx-auto mb-5"
                ></v-img>

                <h1 class="cross-stone-title">ԽԱՉՔԱՐ</h1>

                <span class="cross-stone-subtitle">Մտածիր</span>

                <span class="cross-stone-subtitle" style="margin: 0 124px"
                    >Ստեղծիր</span
                >

                <span class="cross-stone-subtitle">Արժևորիր</span>
            </div>
        </div>

        <ServiceSection :item="sectionOne" />

        <div class="pos-relative">
            <v-img src="@/assets/services/47.jpg" height="100vh"></v-img>

            <div class="cross-stone-holder">
                <v-img
                    src="@/assets/logo-icon.png"
                    width="130"
                    height="auto"
                    class="mx-auto mb-10"
                ></v-img>

                <h1 class="cross-stone-title">ԶԱՐԴԱՔԱՆԴԱԿ</h1>

                <span class="cross-stone-subtitle">Գեղեցիկը</span>

                <span class="cross-stone-subtitle mx-12">շինության</span>

                <span class="cross-stone-subtitle">մեջ</span>
            </div>
        </div>

        <ServiceSection :item="sectionTwo" />

        <div class="pos-relative">
            <v-img src="@/assets/services/52.jpg" height="100vh"></v-img>

            <div class="cross-stone-holder">
                <v-img
                    src="@/assets/logo-icon.png"
                    width="130"
                    height="auto"
                    class="mx-auto mb-10"
                ></v-img>

                <h1 class="cross-stone-title">ԱՐՁԱՆ/ԿԻՍԱՆԴՐԻ/ՀՐԵՇՏԱԿ</h1>

                <span class="cross-stone-subtitle">Ստեղծիր</span>

                <span class="cross-stone-subtitle mx-12">հիմա,</span>

                <span class="cross-stone-subtitle mr-12">մնա</span>

                <span class="cross-stone-subtitle">հավերժ</span>
            </div>
        </div>

        <ServiceSection :item="sectionThree" />

        <div class="pos-relative">
            <v-img src="@/assets/services/57.jpg" height="100vh"></v-img>

            <div class="cross-stone-holder">
                <v-img
                    src="@/assets/logo-icon.png"
                    width="130"
                    height="auto"
                    class="mx-auto mb-10"
                ></v-img>

                <h1 class="cross-stone-title">ԿԱՌՈՒՑԱՊԱՏՄԱՆ ԱՇԽԱՏԱՆՔՆԵՐ</h1>

                <span class="cross-stone-subtitle">Ամուր</span>

                <span class="cross-stone-subtitle mx-12">հիմք.</span>

                <span class="cross-stone-subtitle mr-12">Ամուր</span>

                <span class="cross-stone-subtitle">սկիզբ</span>
            </div>
        </div>

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

export default {
    name: "Services",

    components: { ServiceSection },

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
    font-family: Braind Yerevan;
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 2.5px;
}

.b-centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.b-info-holder {
    background-color: white;
    color: black;
    padding: 145px 0;
}

.b-info-text {
    margin: auto;
    max-width: 740px;
    line-height: 36px;
    text-align: center;
}

.cross-stone-title {
    font-family: Braind Yerevan;
    font-size: 4.5rem;
    letter-spacing: 12px;
    font-weight: normal;
    margin-bottom: 50px;
}

.cross-stone-subtitle {
    font-size: 1.6rem;
    letter-spacing: 8px;
}

.cross-stone-holder {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 69px;
}
</style>
