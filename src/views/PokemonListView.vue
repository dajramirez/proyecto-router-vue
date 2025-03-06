<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData';

const { getData, data, loading, error } = useGetData();

// const getData = async () => {
//   try {
//     const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
//     pokemons.value = data.results;
//   } catch (error) {
//     console.log(error);
//   }
// };

getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>
  <h1>Pokémon</h1>
  <p v-if="loading">Cargando información</p>
  <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
  <div v-if="data">
    <ul class="list-group">
      <li class="list-group-item" v-for="pokemon in data.results">
        <RouterLink :to="`/pokemon/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
      </li>
    </ul>
    <div class="mt-2">
      <button :disabled="!data.previous" class="btn btn-warning me-2" @click="getData(data.previous)"> Previous
      </button>
      <button :disabled="!data.next" class=" btn btn-primary" @click="getData(data.next)">Next</button>
    </div>
  </div>
</template>
