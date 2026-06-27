<template>
  <div class="menu-container">
    <h2>Añadir reserva</h2>

    <form @submit.prevent="añadirReserva" class="formulario">
      <div class="campo">
        <label for="dia">Día de la semana:</label>
        <select id="dia" v-model="diaSeleccionado">
          <option value="" disabled>Selecciona un día</option>
          <option v-for="dia in diasSemana" :key="dia" :value="dia">
            {{ dia }}
          </option>
        </select>
      </div>

      <div class="campo">
        <label for="dia">Comida o cena:</label>
        <select id="dia" v-model="comidaCena">
          <option value="" disabled>Selecciona si es comida o cena</option>
          <option v-for="comidaCena in comidasCenas" :key="comidaCena" :value="comidaCena">
            {{ comidaCena }}
          </option>
        </select>
      </div>

      <div class="campo">
        <label for="plato">Nombre del plato:</label>
        <input id="plato" type="text" v-model="nombrePlato" placeholder="Nombre del plato" />
      </div>

      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMealsStore } from "../stores/meals";

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const comidasCenas = ["Comida", "Cena"];

const diaSeleccionado = ref("");
const comidaCena = ref("");
const nombrePlato = ref("");

const mealsStore = useMealsStore();

const añadirReserva = () => {
  // Validación
  if (!diaSeleccionado.value || !comidaCena.value || !nombrePlato.value.trim()) {
    alert("Por favor, rellena todos los campos.");
    return;
  }

  // Push al array
  mealsStore.añadirReserva(diaSeleccionado.value, comidaCena.value, nombrePlato.value);

  // Limpiamos formulario
  nombrePlato.value = "";
  comidaCena.value = "";
  diaSeleccionado.value = "";
};
</script>

<style scoped>
.menu-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: sans-serif;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

select,
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #191919;
}

button {
  padding: 10px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #35495e;
}

.lista-platos {
  margin-top: 15px;
  padding-left: 20px;
}

.lista-platos li {
  margin-bottom: 8px;
}</style>
