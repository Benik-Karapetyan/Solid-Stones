<template>
    <section class="start-container">
        <img
            src="@/assets/logo-icon.png"
            alt="website logo"
            style="width: 120px; height: auto;"
        />

        <h1 class="title">ՄԵՐ ՄԱՍԻՆ</h1>

        <p class="about-text">
            Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար
            նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը
            հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ
        </p>
    </section>
</template>

<script>
export default {
    name: "AboutStart",
};
</script>

<style scoped>
.start-container {
    padding: 100px 150px;
    text-align: center;
}

.title {
    text-align: center;
    font-family: Braind Yerevan !important;
    font-size: 2.2rem !important;
    letter-spacing: 2.5px !important;
    margin-top: 15px;
}

.about-text {
    max-width: 70%;
    margin: 40px auto 0;
    text-align: center;
    line-height: 1.9;
}
</style>
