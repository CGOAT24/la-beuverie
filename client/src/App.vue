<script setup lang="ts">
import data from './assets/data.json';
import Card from "./components/card.vue";

const drinks = data.drinks;
</script>

<template>
  <div id="grid">
    <card v-for="drink in drinks" :drink="drink" class="card"/>
  </div>
</template>

<style scoped>
#grid {
  background-color: #084227;
  display: inline-grid;
  justify-content: space-around;
  align-content: space-around;
  grid-template-columns: auto auto auto;
  border-radius: 15px;
  width: 100%;
}

.card {
  height: auto;
  aspect-ratio: 2;
}

</style>
