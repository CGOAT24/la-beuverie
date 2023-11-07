<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

const emits = defineEmits({
  click: null
})
</script>
<template>
  <button
    class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1"
    :style="{ backgroundColor: props.color }"
    @click="emits('click')"
  >
    <slot />
  </button>
</template>
