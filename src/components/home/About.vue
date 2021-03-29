<template>
    <section class="about">
        <h1 class="title">
            ՄԵՐ ՄԱՍԻՆ
        </h1>

        <p class="about-text">
            Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված մոդելային
            տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական
            արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի
            կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի
            արդյունք է։ Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան,
            այլև ներառվել է էլեկտրոնային տպագրության մեջ՝ մնալով էապես անփոփոխ։
        </p>
    </section>
</template>

<script>
export default {
    name: "AboutSection",
};
</script>

<style scoped>
.about {
    padding: 100px;
}

.title {
    text-align: center;
    font-family: Braind Yerevan !important;
    font-size: 2.2rem !important;
    letter-spacing: 2.5px !important;
}

.about-text {
    max-width: 70%;
    margin: 40px auto 0;
    text-align: center;
    line-height: 1.9;
}
</style>
