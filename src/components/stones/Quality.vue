<template>
    <section class="quality-container">
        <div class="content">
            <v-img src="@/assets/stones/25.jpg" class="b-image"> </v-img>

            <div class="banner-container">
                <b-info-banner
                    max-width="380px"
                    background-color="#1C191A"
                    style="padding: 60px"
                >
                    <template v-slot:header>
                        ՄԻԱՅՆ ՈՐԱԿՅԱԼԸ
                    </template>

                    Լորեմ Իպսումը տպագրական արդյունաբերության համար նախատեսված
                    մոդելային տեքստ է։ Լորեմ Իպսումը հանդիսացել է տպագրական
                    արդյունաբերության ստանդարտ մոդելային տեքստ:Իպսումը տպագրական
                    արդյունաբերության համար:
                </b-info-banner>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Quality",
};
</script>

<style scoped>
.quality-container {
    background-color: black;
    padding-bottom: 400px;
}

.content {
    max-width: 830px;
    margin: auto;
    position: relative;
}

.b-image {
    width: 550px;
    height: 483px;
}

.banner-container {
    min-width: 380px;
    max-width: 380px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
}

@media screen and (min-width: 600px) {
    .quality-container {
        padding-bottom: 240px;
    }

    .b-image {
        height: 550px;
    }

    .banner-container {
        position: absolute;
        top: 50%;
        right: 0;
        left: auto;
        transform: translateY(-50%);
    }
}
</style>
