<template>
  <MainHeader />
  <main>
    <RouterView />
  </main>
  <nav class="flex justify-center gap-4 my-4">
    <RouterLink to="/" class="text-white px-4 hover:underline">Inicio</RouterLink>
    <RouterLink to="/favorite-meal" class="text-white px-4 hover:underline">Favoritos</RouterLink>
  </nav>
</template>

<script lang="ts">
import MainHeader from "./components/MainHeader.vue";

export default {
  components: {
    MainHeader,
  },
};
</script>
