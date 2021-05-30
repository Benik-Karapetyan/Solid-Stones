<template>
    <div>
        <Quality />
        <ChoosingStones />
        <Assortment />
    </div>
</template>

<script>
import Quality from "@/components/stones/Quality.vue";
import ChoosingStones from "@/components/stones/ChoosingStones.vue";
import Assortment from "@/components/stones/Assortment.vue";

export default {
    name: "Stones",

    components: { Quality, ChoosingStones, Assortment },
};
</script>
