<script setup lang="ts">
import { MagnifyingGlassIcon, PlusIcon, FunnelIcon, UserIcon } from '@heroicons/vue/24/outline';
const searchBarEnabled = ref(false);

const title = "La Beuverie";

const emits = defineEmits({
  'searchInput': null
});

const userButtonClick = () => {
}

const addButtonClick = () => {

}

const filterButtonClick = () => {

}

const searchValueChanged = (event) => emits("searchInput", event.target.value);
</script>
<template>
  <div class="w-100 py-4 rounded-2xl border-4 mx-3 mt-1 border-[#12110F] shadow-[5px_5px_#12110F] flex justify-between">
    <div class="flex flex-wrap justify-start font-bold ml-3 content-center">
      <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1 bg-[#FEC704] tracking-wider text-3xl">
        <NuxtLink
          to="/"
          class="bg-inherit"
        >
          {{ title }}
        </NuxtLink>
      </button>
    </div>
    <div class="flex flex-wrap justify-end mr-3">
      <NavbarButton
        class="flex justify-between content-center items-center transition ease-in-out duration-700"
        color="#FEA9AA"
        @click="searchBarEnabled = true"
      >
        <MagnifyingGlassIcon class="h-6 w-6 bg-inherit" />
        <input
          v-if="searchBarEnabled"
          type="text"
          class="mx-3 bg-inherit border-b-2 border-[#12110F] focus:outline-none caret-transparent transition ease-in-out duration-700"
          @input="searchValueChanged"
        >
      </NavbarButton>
      <NavbarButton color="#A5EFFF">
        <FunnelIcon class="h-6 w-6 bg-inherit" />
      </NavbarButton>
      <NavbarButton color="#FDF0AB">
        <PlusIcon class="h-6 w-6 bg-inherit" />
      </NavbarButton>
      <NavbarButton
        color="#90EE90"
        @click="userButtonClick"
      >
        <UserIcon class="h-6 w-6 bg-inherit" />
      </NavbarButton>
    </div>
  </div>
</template>
