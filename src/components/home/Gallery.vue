<template>
    <section class="gallery-container">
        <h1 class="gallery-title">ՊԱՏԿԵՐԱՍՐԱՀ</h1>
        <v-row no-gutters justify="center">
            <v-col cols="11" sm="11" md="9" lg="7">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" class="pr-sm-3">
                        <img
                            src="@/assets/home/gallery/3.jpg"
                            alt="fireplace"
                            class="b-image image__fireplace"
                        />
                    </v-col>

                    <v-col cols="12" sm="6" class="pl-sm-3 mb-12">
                        <img
                            src="@/assets/home/gallery/4.jpg"
                            alt="baby angel"
                            class="b-image image__baby-angel my-7 mt-sm-0"
                        />

                        <v-row no-gutters>
                            <img
                                src="@/assets/home/gallery/5.jpg"
                                alt="lion"
                                class="b-image image__lion pr-3"
                            />
                            <img
                                src="@/assets/home/gallery/6.jpg"
                                alt="angel"
                                class="b-image image__angel pl-3"
                            />
                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="6" class="pr-sm-3">
                        <img
                            src="@/assets/home/gallery/7.jpg"
                            alt="cross stone"
                            class="b-image image__cross-stone"
                        />
                        <img
                            src="@/assets/home/gallery/8.jpg"
                            alt="angel"
                            class="b-image image__angel-2"
                        />
                    </v-col>

                    <v-col cols="12" sm="6" class="pl-sm-3">
                        <img
                            src="@/assets/home/gallery/9.jpg"
                            alt="angel"
                            class="b-image image__angel-3 my-7 mt-sm-0"
                        />

                        <v-row no-gutters>
                            <img
                                src="@/assets/home/gallery/10.jpg"
                                alt="angel"
                                class="b-image image__angel-4 pr-3"
                            />
                            <img
                                src="@/assets/home/gallery/11.jpg"
                                alt="angel"
                                class="b-image image__angel-5 pl-3"
                            />
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

.images-container {
    max-width: 55%;
    margin: auto;
}

.image__fireplace {
    width: 100%;
    height: 430px;
}

.image__baby-angel {
    width: 100%;
    height: 201px;
}

.image__lion {
    width: 50%;
    height: 201px;
}

.image__angel {
    width: 50%;
    height: 201px;
}

.image__cross-stone {
    width: 100%;
    height: 320px;
    margin-bottom: 28px;
}

.image__angel-2 {
    width: 100%;
    height: 260px;
}

.image__angel-3 {
    width: 100%;
    height: 410px;
}

.image__angel-4 {
    width: 50%;
    height: 170px;
}

.image__angel-5 {
    width: 50%;
    height: 170px;
}
</style>
