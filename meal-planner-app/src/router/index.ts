import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/components/HomeView.vue";
import FavoriteMeal from "@/components/FavoriteMeal.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/favorite-meal", component: FavoriteMeal },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
