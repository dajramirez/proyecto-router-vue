import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/pokemon",
      name: "pokemonList",
      component: () => import("../views/PokemonListView.vue"),
    },
    {
      path: "/pokemon/:name",
      name: "pokemon",
      component: () => import("../views/PokemonView.vue"),
    },
    {
      path: "/favourites",
      name: "favourites",
      component: () => import("../views/FavouritesView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
