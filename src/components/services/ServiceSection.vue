<template>
    <div class="b-container">
        <p class="b-main-text">
            {{ item.text }}
        </p>

        <v-img
            :src="item.mainImage"
            width="640"
            height="408"
            class="mx-auto"
            style="margin-bottom: 140px"
        ></v-img>

        <v-row no-gutters justify="space-around" justify-lg="center">
            <v-col
                v-for="(item, i) in item.items"
                :key="i"
                cols="4"
                class="b-item"
            >
                <v-img
                    :src="item.image"
                    width="100%"
                    height="506"
                    class="rounded-pill"
                    style="margin-bottom: 80px"
                ></v-img>

                <h2 class="mb-6" v-text="item.title"></h2>

                <p v-html="item.text"></p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "ServiceSection",

    props: { item: Object },
};
</script>

<style scoped>
.b-container {
    padding: 130px 0 0;
}

.b-main-text {
    max-width: 800px;
    margin: auto;
    margin-bottom: 110px;
    font-size: 20px;
    font-weight: 300;
    line-height: 36px;
    text-align: center;
}

.b-item {
    min-width: 350px;
    max-width: 350px;
    margin: 0 32px 130px;
}

@media screen and (min-width: 1264px) {
    .b-container {
        padding-bottom: 130px;
    }

    .b-item {
        margin-bottom: 0;
    }
}
</style>
