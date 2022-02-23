<template>
    <div class="pos-relative">
        <b-overlay></b-overlay>

        <v-img
            src="@/assets/services/42.jpg"
            min-height="460"
            max-height="85vh"
        ></v-img>

        <div class="b-container">
            <v-img src="@/assets/logo-icon.png" class="b-image"></v-img>

            <h1 class="b-title">ԽԱՉՔԱՐ</h1>

            <v-row no-gutters class="b-subtitle">
                <v-col cols="12" md="auto">Մտածիր</v-col>

                <v-col cols="12" md="auto">Ստեղծիր</v-col>

                <v-col cols="12" md="auto">Արժևորիր</v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "CrossStoneSection",
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
    font-size: 3rem;
    letter-spacing: 12px;
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
        margin-bottom: 50px;
    }
}
</style>
