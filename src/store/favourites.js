import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavouritesStore = defineStore("favourites", () => {
  const favourites = ref([]);

  if (localStorage.getItem("favourites")) {
    favourites.value = JSON.parse(localStorage.getItem("favourites"));
  }

  const add = (pokemon) => {
    favourites.value.push(pokemon);
    localStorage.setItem("favourites", JSON.stringify(favourites.value));
  };

  const remove = (id) => {
    favourites.value = favourites.value.filter((item) => item.id !== id);
    localStorage.setItem("favourites", JSON.stringify(favourites.value));
  };

  const findPokemon = (name) => {
    return favourites.value.some((item) => item.name === name);
  };

  return {
    favourites,
    add,
    remove,
    findPokemon,
  };
});
