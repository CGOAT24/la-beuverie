<script setup lang="ts">
import { drinks } from "../assets/data";

const data = ref(drinks);

const updateData = (text) => {
  data.value = drinks.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
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
      />
    </div>
  </div>
</template>
