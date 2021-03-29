<template>
    <section class="gallery">
        <h1 class="gallery-title">ՊԱՏԿԵՐԱՍՐԱՀ</h1>
        <div class="images-container">
            <div style="flex: 0 0 50%; padding-right: 14px">
                <img
                    src="@/assets/gallery/3.jpg"
                    alt="xachqar"
                    style="width: 100%; height: 430px; object-fit: cover; vertical-align: middle"
                />
            </div>

            <div style="flex: 0 0 50%; padding-left: 14px">
                <img
                    src="@/assets/gallery/4.jpg"
                    alt="xachqar"
                    style="width: 100%; height: 211px; object-fit: cover; margin-bottom: 28px; vertical-align: middle"
                />
                <img
                    src="@/assets/gallery/5.jpg"
                    alt="xachqar"
                    style="width: 50%; height: 211px; object-fit: cover; vertical-align: middle; padding-right: 14px"
                />
                <img
                    src="@/assets/gallery/6.jpg"
                    alt="xachqar"
                    style="width: 50%; height: 211px; object-fit: cover; vertical-align: middle; padding-left: 14px"
                />
            </div>

            <div style="flex: 0 0 50%; margin-top: 50px; padding-right: 14px">
                <img
                    src="@/assets/gallery/7.jpg"
                    alt="xachqar"
                    style="width: 100%; height: 320px; object-fit: cover; vertical-align: middle; margin-bottom: 28px"
                />
                <img
                    src="@/assets/gallery/8.jpg"
                    alt="xachqar"
                    style="width: 100%; height: 260px; object-fit: cover; vertical-align: middle"
                />
            </div>
            <div style="flex: 0 0 50%; margin-top: 50px; padding-left: 14px">
                <img
                    src="@/assets/gallery/9.jpg"
                    alt="xachqar"
                    style="width: 100%; height: 440px; object-fit: cover; vertical-align: middle; margin-bottom: 28px"
                />

                <img
                    src="@/assets/gallery/10.jpg"
                    alt="xachqar"
                    style="width: 50%; height: 140px; object-fit: cover; vertical-align: middle; padding-right: 14px"
                />
                <img
                    src="@/assets/gallery/11.jpg"
                    alt="xachqar"
                    style="width: 50%; height: 140px; object-fit: cover; vertical-align: middle; padding-left: 14px"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Gallery",
};
</script>

<style scoped>
.gallery {
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
    width: 55%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}
</style>
