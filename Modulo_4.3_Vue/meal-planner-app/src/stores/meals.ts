import { ref } from "vue";
import { defineStore } from "pinia";

export interface Plato {
  id: number;
  dia: string;
  comidaCena: string;
  plato: string;
}

export const useMealsStore = defineStore("meals", () => {
  const listaMenu = ref<Plato[]>([]);

  const eliminarReserva = (id: number) => {
    const index = listaMenu.value.findIndex((reserva) => reserva.id === id);
    if (index !== -1) {
      listaMenu.value.splice(index, 1);
    }
  };

  const añadirReserva = (diaSeleccionado: string, comidaCena: string, nombrePlato: string) => {
    // Validación
    if (!diaSeleccionado || !comidaCena || !nombrePlato) {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    // Push al array
    listaMenu.value.push({
      id: Date.now() + Math.random(),
      dia: diaSeleccionado,
      comidaCena: comidaCena,
      plato: nombrePlato,
    });
  };
  return { listaMenu, eliminarReserva, añadirReserva };
});
