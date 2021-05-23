<template>
    <v-row no-gutters justify="space-between" align="center" class="mb-12">
        <v-col order="1" :order-md="reversed ? 2 : 1" cols="12" md="auto">
            <div class="pos-relative">
                <img
                    :src="require('@/' + mainImage)"
                    alt="old man statue"
                    class="image__main"
                />

                <img
                    :src="require('@/' + secondaryImage)"
                    alt="coin statue"
                    class="image__secondary"
                    :class="reversed ? 'transformed-right' : 'transformed-left'"
                />
            </div>
        </v-col>

        <v-col
            order="2"
            :order-md="reversed ? 1 : 2"
            cols="12"
            md="auto"
            class="text-center text-md-left"
        >
            <h1 class="section-title mt-6 mt-md-0" v-text="title"></h1>

            <p class="section-text" v-text="text"></p>

            <router-link class="b-btn" to="/">ԿԱՐԴԱԼ ԱՎԵԼԻՆ</router-link>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "WhyUsSection",

    props: {
        reversed: Boolean,
        title: String,
        text: String,
        mainImage: String,
        secondaryImage: String,
    },
};
</script>

<style scoped>
.image__main {
    display: block;
    width: 100%;
    max-width: 350px;
    height: 460px;
    margin: auto;
}

.image__secondary {
    display: none;
    width: 320px;
    height: 220px;
}

.transformed-left {
    position: absolute;
    top: 160px;
    left: 250px;
}

.transformed-right {
    position: absolute;
    top: 160px;
    right: 250px;
}

.section-title {
    color: white;
    font-family: Braind Yerevan;
    font-size: 2.6rem;
    font-weight: 500;
    letter-spacing: 5px;
    margin-bottom: 16px;
}

.section-text {
    color: white;
    max-width: 450px;
    font-weight: 300;
    margin: auto;
    margin-bottom: 35px;
}

.b-btn {
    display: inline-block;
    border: 1px solid white;
    text-decoration: none;
    color: white;
    font-family: Braind Yerevan;
    font-size: 15px;
    letter-spacing: 2px;
    padding: 10px 40px;
}

@media screen and (min-width: 1200px) {
    .image__secondary {
        display: block;
    }
}
</style>
