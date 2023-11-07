<script setup lang="ts">
import { drinks } from "../assets/data.json"
import Card from "@/components/Card.vue"
import Navbar from "@/components/navbar/Navbar.vue"
import { ref } from "vue"

const data = ref(drinks)

const updateData = (text: String) => {
  data.value = drinks.filter((x) => x.name.toLowerCase().includes(text.toLowerCase()))
}
</script>
<template>
  <div>
    <Navbar @searchInput="updateData" />
    <div class="mt-3 flex flex-wrap justify-start">
      <Card
        v-for="drink in data"
        :key="drink.name"
        :name="drink.name"
        :identifier="drink.name"
        class="hover:scale-110 transition ease-in-out"
      />
    </div>
  </div>
</template>
