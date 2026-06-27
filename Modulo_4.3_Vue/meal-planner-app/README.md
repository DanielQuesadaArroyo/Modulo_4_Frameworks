# 🍽️ Meal Planner App

## 📖 Introducción

Este proyecto consiste en desarrollar una aplicación web con **Vue 3** creada mediante **create-vue** para planificar las comidas de una semana.

El objetivo es practicar los conceptos fundamentales de Vue, Vue Router y Pinia, aplicando una arquitectura basada en componentes.

> **Importante:** Este ejercicio debe subirse a un repositorio público de GitHub (o GitLab/Bitbucket).

---

## 🎯 Objetivos

- Crear una aplicación SPA con Vue 3.
- Gestionar el estado global mediante Pinia.
- Utilizar Vue Router.
- Organizar el proyecto en componentes reutilizables.
- Diseñar una interfaz clara y responsive.

---

## 🛠️ Funcionalidades

### Formulario
- Introducir el nombre del plato.
- Seleccionar el día de la semana.
- Botón **Agregar**.
- Limpiar automáticamente el formulario tras añadir un plato.

### Plan semanal
- Mostrar los días de la semana.
- Cada día puede contener varios platos.
- Cada plato dispone de un botón **Eliminar**.

### Estado
- Gestionado mediante **Pinia**.

---

## 📌 Requisitos básicos

- Vue 3 (create-vue)
- Vue Router
- Pinia
- Al menos dos vistas:
  - Plan semanal
  - Lista de platos favoritos
- Componentes organizados, por ejemplo:
  - `MealForm.vue`
  - `MealList.vue`
  - `DayCard.vue`
- Diseño con Tailwind CSS o CSS personalizado.

---

## 🌱 Funcionalidades opcionales

- Persistencia con `pinia-plugin-persistedstate`.
- Editar platos.
- Buscar o filtrar platos.
- Categorías (Desayuno, Comida, Cena).
- Diseño responsive.
- Mejoras visuales.
- Limpiar el plan completo.
- Contador de platos.
- Exportar el menú semanal.
- Añadir nuevas vistas como Configuración.

---

## 📂 Estructura recomendada

```text
src/
│── components/
│   ├── MealForm.vue
│   ├── MealList.vue
│   ├── DayCard.vue
│── views/
│   ├── WeeklyPlanView.vue
│   └── FavoritesView.vue
│── stores/
│   └── meals.js
│── router/
│── App.vue
│── main.js
```

---

## 🚀 Tecnologías

- Vue 3
- Vue Router
- Pinia
- Tailwind CSS (opcional)

---

## ✅ Autor

Proyecto realizado como práctica del módulo de Vue.
