<template>
    <section class="why-pick-us">
        <div class="main-picture">
            <div class="title-holder">
                <h1 class="main-title">ՄԵՆՔ</h1>
                <h1 class="main-title">
                    ՍՏԵՂԾՈՒՄ ԵՆՔ
                </h1>
                <div class="underline"></div>
            </div>
        </div>

        <div class="sections-container">
            <div class="b-row" style="margin-bottom: 50px">
                <div style="position: relative">
                    <img
                        src="@/assets/whyPickUs/13.jpg"
                        alt="old man statue"
                        style="width: 350px; height: 460px; vertical-align: middle"
                    />

                    <img
                        src="@/assets/whyPickUs/14.jpg"
                        alt="coin statue"
                        class="floating-left"
                    />
                </div>

                <div style="padding-right: 70px">
                    <h1 class="section-title">ՄԵՆՔ ՍՏԵՂԾՈՒՄ ԵՆՔ</h1>

                    <p class="section-text">
                        Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                        համար նախատեսված մոդելային տեքստ է։ Սկսած
                        1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական
                        ստանդարտ տեքստ:
                    </p>

                    <router-link class="b-btn" to="/"
                        >ԿԱՐԴԱԼ ԱՎԵԼԻՆ</router-link
                    >
                </div>
            </div>

            <div class="b-row" style="margin-bottom: 50px">
                <div style="padding-right: 70px">
                    <h1 class="section-title">ՄԵՆՔ ՄՇԱԿՈՒՄ ԵՆՔ</h1>

                    <p class="section-text">
                        Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                        համար նախատեսված մոդելային տեքստ է։ Սկսած
                        1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական
                        ստանդարտ տեքստ:
                    </p>

                    <router-link class="b-btn" to="/"
                        >ԿԱՐԴԱԼ ԱՎԵԼԻՆ</router-link
                    >
                </div>

                <div style="position: relative">
                    <img
                        src="@/assets/whyPickUs/15.jpg"
                        alt="girl angel statue"
                        style="width: 350px; height: 460px; vertical-align: middle"
                    />

                    <img
                        src="@/assets/whyPickUs/16.jpg"
                        alt="baby angel statue"
                        class="floating-right"
                    />
                </div>
            </div>

            <div class="b-row">
                <div style="position: relative">
                    <img
                        src="@/assets/whyPickUs/17.jpg"
                        alt="old man statue"
                        style="width: 350px; height: 460px; vertical-align: middle;"
                    />

                    <img
                        src="@/assets/whyPickUs/18.jpg"
                        alt="coin statue"
                        class="floating-left"
                    />
                </div>

                <div style="padding-right: 70px">
                    <h1 class="section-title">ՄԵՆՔ ԱՌԱՔՈՒՄ ԵՆՔ</h1>

                    <p class="section-text">
                        Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության
                        համար նախատեսված մոդելային տեքստ է։ Սկսած
                        1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական
                        ստանդարտ տեքստ:
                    </p>

                    <router-link class="b-btn" to="/"
                        >ԿԱՐԴԱԼ ԱՎԵԼԻՆ</router-link
                    >
                </div>
            </div>
        </div>

        <img
            src="@/assets/whyPickUs/19.jpg"
            alt="half ready man statue"
            style="width: 100%; height: 80vh; vertical-align: middle"
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
export default {
    name: "WhyPickUs",
};
</script>

<style scoped>
.main-picture {
    background: url("../../assets/whyPickUs/12.jpg") no-repeat;
    background-size: cover;
    height: 90vh;
    position: relative;
}

.title-holder {
    position: absolute;
    top: 120px;
    left: 120px;
    max-width: 320px;
    text-align: center;
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
    padding: 130px 150px;
}

.b-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.floating-left {
    width: 320px;
    height: 220px;
    position: absolute;
    top: 160px;
    left: 250px;
    object-fit: cover;
}

.floating-right {
    width: 320px;
    height: 220px;
    position: absolute;
    top: 160px;
    right: 250px;
    object-fit: cover;
}

.section-title {
    color: white;
    font-family: Braind Yerevan;
    font-size: 2.6rem;
    font-weight: 500;
    letter-spacing: 5px;
    margin-bottom: 15px;
}

.section-text {
    max-width: 450px;
    color: white;
    font-family: DejaVu Sans;
    font-weight: 300;
    margin-bottom: 35px;
}

.b-btn {
    border: 1px solid white;
    text-decoration: none;
    color: white;
    font-family: Braind Yerevan;
    font-size: 15px;
    letter-spacing: 2px;
    padding: 10px 40px;
}

.logo-container {
    background-color: rgb(0, 0, 0);
    padding: 100px 150px;
    text-align: center;
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
</style>
