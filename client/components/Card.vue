<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    identifier: {
        type: String,
        required: true
    }
});
</script>
<template>
  <button class="p-4 m-4 bg-[#FFF3E7] hover:bg-[#C5A0FF] rounded-2xl border-4 border-[#12110F] shadow-[5px_5px_#12110F] text-center font-bold uppercase card-button">
    {{ props.name }}
  </button>
</template>