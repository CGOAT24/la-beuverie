<script setup lang="ts">
    interface Drink {
        icon: string,
        name: string
    }
    const props = defineProps({
        drink: {
            type: Object as () => Drink,
            required: true
        }
    });
</script>
<template>
    <div class="card">
        <div class="card-title">{{ props.drink.name }}</div>
    </div>
</template>
<style scoped>
.card {
    border-radius: 1rem;
    padding: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    background-color: #EC8091;
    border: 3px solid #222222;
  }

  .card-title {
    text-align: center;
  }
</style>