<template>
    <div class="pos-relative">
        <b-overlay></b-overlay>

        <v-img src="@/assets/services/47.jpg" class="b-main-image"></v-img>

        <div class="b-container">
            <v-img src="@/assets/logo-icon.png" class="b-image"></v-img>

            <h1 class="b-title">ԶԱՐԴԱՔԱՆԴԱԿ</h1>

            <v-row no-gutters class="b-subtitle">
                <v-col cols="12" md="auto">Գեղեցիկը</v-col>

                <v-col cols="12" md="auto">շինության</v-col>

                <v-col cols="12" md="auto">մեջ</v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrnamentSection",
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

.b-main-image {
    height: 460px;
    max-height: 85vh;
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
    .b-main-image {
        height: 440px;
    }

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

    .b-main-image {
        height: auto;
    }

    .b-image {
        width: 120px;
    }

    .b-title {
        margin-bottom: 50px;
    }
}
</style>
