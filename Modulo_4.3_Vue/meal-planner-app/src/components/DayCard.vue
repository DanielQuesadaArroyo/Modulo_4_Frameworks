<template>
  <strong>{{ item.dia }}</strong> : {{ item.plato }}
  <button
    @click="mealsStore.eliminarReserva(item.id)"
    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
  >
    Eliminar
  </button>
</template>

<script setup lang="ts">
import { useMealsStore } from "../stores/meals";
import type { Plato } from "../stores/meals";

defineProps<{
  item: Plato;
}>();

const mealsStore = useMealsStore();
</script>
