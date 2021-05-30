<template>
    <section class="quality-container">
        <div class="content">
            <v-img src="@/assets/stones/25.jpg" width="550" height="550">
            </v-img>

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
    padding-bottom: 240px;
}

.content {
    max-width: 830px;
    margin: auto;
    position: relative;
}

.banner-container {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
</style>
