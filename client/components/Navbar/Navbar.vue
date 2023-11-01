<script setup lang="ts">
import { MagnifyingGlassIcon, PlusIcon, FunnelIcon, UserIcon } from '@heroicons/vue/24/outline';
const searchBarEnabled = ref(false);

const title = "La Beuverie";
</script>
<template>
  <div class="w-100 bg-[#FFF3E7] py-4 rounded-2xl border-4 mx-3 mt-1 border-[#12110F] shadow-[5px_5px_#12110F] flex justify-between">
    <div class="flex flex-wrap justify-start font-bold ml-3 content-center">
      <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1 bg-[#FEC704] tracking-wider text-3xl">
        {{ title }}
      </button>
    </div>
    <div class="flex flex-wrap justify-end mr-3">
      <NavbarButton
        class="flex justify-between content-center items-center"
        color="#FEA9AA"
        @click="searchBarEnabled = true"
      >
        <MagnifyingGlassIcon class="h-6 w-6 bg-inherit" />
        <input
          v-if="searchBarEnabled"
          type="text"
          class="mx-3 bg-inherit border-b-2 border-[#12110F] focus:outline-none caret-transparent"
        >
      </NavbarButton>
      <NavbarButton color="#A5EFFF">
        <FunnelIcon class="h-6 w-6 bg-inherit" />
      </NavbarButton>
      <NavbarButton color="#FDF0AB">
        <PlusIcon class="h-6 w-6 bg-inherit" />
      </NavbarButton>
      <NavbarButton color="#90EE90">
        <UserIcon class="h-6 w-6 bg-inherit" />
      </NavbarButton>
    </div>
  </div>
</template>
