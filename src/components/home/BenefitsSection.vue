<template>
    <section class="white--text">
        <div class="pos-relative">
            <div class="mastery-title-holder">
                <h1 class="mastery-title">CREATE FROM NOTHING</h1>
                <div class="underline"></div>
            </div>
            <v-img
                src="@/assets/mastery.jpg"
                min-height="340"
                max-height="85vh"
            ></v-img>
        </div>

        <Benefits color="rgba(30, 30, 30)" />
    </section>
</template>

<script>
import Benefits from "@/components/general/Benefits.vue";

export default {
    name: "BenefitsSection",

    components: { Benefits },
};
</script>

<style scoped>
.mastery-title-holder {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
}

.mastery-title {
    font-size: 3.6vw !important;
    font-weight: 500;
    letter-spacing: 1vw;
    text-align: center;
    padding: 0 30px;
    margin-bottom: 10px;
}

.underline {
    border-top: 3px solid white;
    width: 75px;
    margin: auto;
}

@media screen and (min-width: 960px) {
    .mastery-title-holder {
        padding: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .mastery-title {
        font-weight: 500;
        letter-spacing: 0.9rem;
        text-align: center;
        margin-bottom: 20px;
    }

    .underline {
        width: 100px;
        border-top: 4px solid white;
    }
}
</style>
