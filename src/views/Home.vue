<template>
    <div class="home">
        <About />
        <Benefits />
        <Gallery />
        <WhyPickUs />
    </div>
</template>

<script>
import About from "@/components/home/About.vue";
import Benefits from "@/components/home/Benefits.vue";
import Gallery from "@/components/home/Gallery.vue";
import WhyPickUs from "@/components/home/WhyPickUs.vue";

export default {
    name: "Home",

    components: { About, Benefits, Gallery, WhyPickUs },
};
</script>
