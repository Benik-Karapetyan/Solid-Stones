<template>
    <section class="gallery-container">
        <h1 class="gallery-title">ՊԱՏԿԵՐԱՍՐԱՀ</h1>
        <v-row no-gutters justify="center">
            <v-col cols="11" sm="11" md="9" lg="7">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" class="pr-sm-3">
                        <v-img
                            src="@/assets/home/gallery/3.jpg"
                            alt="fireplace"
                            width="100%"
                            height="430px"
                        ></v-img>
                    </v-col>

                    <v-col cols="12" sm="6" class="pl-sm-3 mb-7">
                        <v-img
                            src="@/assets/home/gallery/4.jpg"
                            alt="baby angel"
                            width="100%"
                            height="201"
                            class="my-7 mt-sm-0"
                        ></v-img>

                        <v-row no-gutters>
                            <v-col cols="6" class="pr-3">
                                <v-img
                                    src="@/assets/home/gallery/5.jpg"
                                    alt="lion"
                                    width="100%"
                                    height="201"
                                ></v-img>
                            </v-col>

                            <v-col cols="6" class="pl-3">
                                <v-img
                                    src="@/assets/home/gallery/6.jpg"
                                    alt="angel"
                                    width="100%"
                                    height="201"
                                ></v-img>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="6" class="pr-sm-3">
                        <v-img
                            src="@/assets/home/gallery/7.jpg"
                            alt="cross stone"
                            width="100%"
                            height="320"
                            class="mb-7"
                        ></v-img>

                        <v-img
                            src="@/assets/home/gallery/8.jpg"
                            alt="angel"
                            width="100%"
                            height="260"
                        ></v-img>
                    </v-col>

                    <v-col cols="12" sm="6" class="pl-sm-3">
                        <v-img
                            src="@/assets/home/gallery/9.jpg"
                            alt="angel"
                            width="100%"
                            height="410"
                            class="my-7 mt-sm-0"
                        ></v-img>

                        <v-row no-gutters>
                            <v-col cols="6" class="pr-3">
                                <v-img
                                    src="@/assets/home/gallery/10.jpg"
                                    alt="angel"
                                    width="100%"
                                    height="170"
                                ></v-img>
                            </v-col>

                            <v-col cols="6" class="pl-3">
                                <v-img
                                    src="@/assets/home/gallery/11.jpg"
                                    alt="angel"
                                    width="100%"
                                    height="170"
                                ></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "Gallery",
};
</script>

<style scoped>
.gallery-container {
    background-color: rgb(0, 0, 0);
    padding: 100px 0 130px;
}

.gallery-title {
    color: white;
    text-align: center;
    font-family: Braind Yerevan;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 5px;
    margin-bottom: 38px;
}
</style>
