<script setup lang="ts">
    const props = defineProps({
        color: {
            type: String,
            required: true
        }
    })
</script>
<template>
  <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1" :style="{ backgroundColor: props.color }">
    <slot />
  </button>
</template>