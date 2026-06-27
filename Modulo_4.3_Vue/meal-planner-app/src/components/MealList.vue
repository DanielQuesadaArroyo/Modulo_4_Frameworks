<template>
  <div class="lista-platos">
    <h1 class="text-2xl font-semibold text-white">Lista de Platos</h1>
    <p v-if="mealsStore.listaMenu.length === 0">No hay platos añadidos todavía.</p>
    <ul v-else class="lista-platos">
      <h1 class="text-2xl font-semibold text-white">Comida</h1>
      <template v-for="diaSemana in diasSemana" :key="diaSemana">
        <template v-for="item in mealsStore.listaMenu" :key="item.id">
          <li v-if="item.dia === diaSemana">
            <template v-if="item.comidaCena === 'Comida'">
              <DayCard :item="item" />
            </template>
          </li>
        </template>
      </template>

      <h1 class="text-2xl font-semibold text-white">Cena</h1>
      <template v-for="diaSemana in diasSemana" :key="diaSemana">
        <template v-for="item in mealsStore.listaMenu" :key="item.id">
          <li v-if="item.dia === diaSemana">
            <template v-if="item.comidaCena === 'Cena'">
              <DayCard :item="item" />
            </template>
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useMealsStore } from "../stores/meals";
import DayCard from "./DayCard.vue";

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const mealsStore = useMealsStore();
</script>

<style scoped>
.lista-platos {
  margin-top: 15px;
  padding-left: 20px;
}

.lista-platos li {
  margin-bottom: 8px;
}
</style>
