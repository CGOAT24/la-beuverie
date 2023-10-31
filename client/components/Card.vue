<script setup lang="ts">

const props = defineProps({
    name: String,
    identifier: String
});
</script>
<template>
    <div class="p-4 m-4 bg-[#FFF3E7] rounded-2xl border-4 border-[#12110F] shadow-[5px_5px_#12110F]">
        <div class="text-center font-bold uppercase">{{ props.name }}</div>
    </div>
</template>