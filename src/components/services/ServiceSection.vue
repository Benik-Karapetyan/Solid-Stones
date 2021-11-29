<template>
    <div style="padding: 130px">
        <p
            style="max-width: 1000px; margin-bottom: 110px"
            class="text-center mx-auto"
        >
            {{ item.text }}
        </p>

        <v-img
            :src="item.mainImage"
            width="640"
            height="408"
            class="mx-auto"
            style="margin-bottom: 140px"
        ></v-img>

        <v-row no-gutters>
            <v-col v-for="(item, i) in item.items" :key="i" cols="4">
                <v-img
                    :src="item.image"
                    max-width="348"
                    height="506"
                    class="rounded-pill"
                    style="margin-bottom: 80px"
                ></v-img>

                <h2 class="mb-6" v-text="item.title"></h2>

                <p style="max-width: 348px" v-html="item.text"></p>
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
