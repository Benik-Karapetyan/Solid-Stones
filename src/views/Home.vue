<template>
    <div>
        <About />
        <BenefitsSection />
        <Gallery />
        <WhyPickUs />
    </div>
</template>

<script>
import { mdiHome } from "@mdi/js";

import About from "@/components/home/About.vue";
import BenefitsSection from "@/components/home/BenefitsSection.vue";
import Gallery from "@/components/home/Gallery.vue";
import WhyPickUs from "@/components/home/WhyPickUs.vue";

export default {
    name: "Home",

    components: {
        About,
        BenefitsSection,
        Gallery,
        WhyPickUs,
    },

    data: () => ({
        icons: { mdiHome },
    }),
};
</script>
