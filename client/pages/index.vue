<script setup lang="ts">
import {drinks} from "../assets/data";
import { MagnifyingGlassIcon, PlusIcon, FunnelIcon } from '@heroicons/vue/24/outline';

const searchBarEnabled = ref(false);
</script>
<template>
  <div>
    <div class="w-100 bg-[#FFF3E7] py-4 rounded-2xl border-4 mx-3 mt-1 border-[#12110F] shadow-[5px_5px_#12110F] flex justify-between">
      <div class="flex flex-wrap justify-start font-bold ml-3 content-center">
        <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1 bg-[#FEC704] tracking-wider text-3xl">
          La Beuverie
        </button>
      </div>
      <div class="flex flex-wrap justify-end">
        <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1 bg-[#A5EFFF]">
          <FunnelIcon class="h-6 w-6 bg-[#A5EFFF]" />
        </button>
        <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1 bg-[#FDF0AB]">
          <PlusIcon class="h-6 w-6 bg-[#FDF0AB]" />
        </button>
        <button
          :style="{ minWidth: searchBarEnabled ? '200px' : '0'}"
          class="border-2 border-[#12110F] rounded-xl px-3 mx-1 bg-[#FEA9AA] flex justify-between content-center items-center"
          @click="searchBarEnabled = true"
        >
          <MagnifyingGlassIcon class="h-6 w-6 bg-[#FEA9AA]" />
          <input
            v-if="searchBarEnabled"
            type="text"
            class="mx-3 bg-[#FEA9AA] border-b-2 border-[#12110F] focus:outline-none"
          >
        </button>
      </div>
    </div>
    <div class="mt-3 flex flex-wrap justify-start">
      <Card
        v-for="drink in drinks"
        :key="drink.name"
        :name="drink.name"
        :identifier="drink.name"
      />
    </div>
  </div>
</template>
