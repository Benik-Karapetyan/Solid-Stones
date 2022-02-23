<template>
    <div class="pos-relative">
        <b-overlay></b-overlay>

        <v-img
            src="@/assets/services/57.jpg"
            min-height="460"
            max-height="85vh"
        ></v-img>

        <div class="b-container">
            <v-img src="@/assets/logo-icon.png" class="b-image"></v-img>

            <h1 class="b-title">ԿԱՌՈՒՑԱՊԱՏՄԱՆ ԱՇԽԱՏԱՆՔՆԵՐ</h1>

            <v-row no-gutters justify="center" class="b-subtitle">
                <v-col cols="12" md="auto" class="mr-1">
                    <v-row no-gutters justify="center">
                        <v-col cols="auto" class="pr-2">Ամուր</v-col>
                        <v-col cols="auto" class="pl-2">հիմք.</v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" md="auto" class="ml-1">
                    <v-row no-gutters justify="center">
                        <v-col cols="auto" class="pr-2">Ամուր</v-col>
                        <v-col cols="auto" class="pl-2">սկիզբ</v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConstructionSection",
};
</script>

<style scoped>
.b-container {
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-bottom: 19px;
    z-index: 1;
}

.b-image {
    width: 80px;
    height: auto;
    margin: auto;
    margin-bottom: 20px;
}

.b-title {
    font-family: Braind Yerevan;
    font-size: 2.7rem;
    letter-spacing: 9px;
    font-weight: normal;
    margin-bottom: 9px;
}

.b-subtitle {
    margin: auto;
    max-width: 840px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    letter-spacing: 8px;
}

@media screen and (min-width: 600px) {
    .b-title {
        font-size: 4rem;
        letter-spacing: 12px;
    }

    .b-subtitle {
        font-size: 1.6rem;
    }
}

@media screen and (min-width: 960px) {
    .b-container {
        padding-bottom: 69px;
    }

    .b-image {
        width: 120px;
    }

    .b-title {
        font-size: 4rem;
        margin-bottom: 50px;
    }
}
</style>
