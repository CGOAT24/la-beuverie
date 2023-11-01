<script setup lang="ts">
import {drinks} from "../assets/data";
import { MagnifyingGlassIcon, PlusIcon, FunnelIcon } from '@heroicons/vue/24/outline';
</script>
<template>
    <div>
        <div class="w-100 bg-[#FFF3E7] py-4 rounded-2xl border-4 mx-3 mt-1 border-[#12110F] shadow-[5px_5px_#12110F] flex justify-between">
            <div class="flex flex-wrap justify-start font-bold ml-3 content-center">
                <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1 bg-[#FEC704] tracking-wider text-3xl">La Beuverie</button>
            </div>
            <div class="flex flex-wrap justify-end">
                <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1 bg-[#A5EFFF]"><FunnelIcon class="h-6 w-6 bg-[#A5EFFF]"/></button>
                <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1 bg-[#FDF0AB]"><PlusIcon class="h-6 w-6 bg-[#FDF0AB]"/></button>
                <button class="border-2 border-[#12110F] rounded-xl py-1 px-3 mx-1 bg-[#FEA9AA]"><MagnifyingGlassIcon class="h-6 w-6 bg-[#FEA9AA]"/></button>
            </div>
            
        </div>
        <div class="mt-3 flex flex-wrap justify-start">
            <Card :name="drink.name" v-for="drink in drinks" v-bind:key="drink.name"/>
        </div>
    </div>
</template>
