<script setup lang="ts">
import { drinks } from "../assets/data";
</script>
<template>
  <div>
    <Navbar />
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
