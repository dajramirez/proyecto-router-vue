<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';
import { useFavouritesStore } from '@/store/favourites';
import { watchEffect } from 'vue';

const route = useRoute();
const router = useRouter();
const useFavourites = useFavouritesStore();

const { add, findPokemon } = useFavourites;

const { getData, data, loading, error } = useGetData();

const back = () => {
    router.push('/pokemon');
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

watchEffect(() => {
    if (data.value) {
        console.log('findPokemon result:', findPokemon(data.value.name));
    }
})
</script>

<template>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">No existe el pokémon </div>
    <div v-if="data">
        <img :src="data.sprites?.other['official-artwork'].front_default" height="100" width="100">
        <h1>Pokémon name: {{ $route.params.name }}</h1>
        <button :disabled="findPokemon(data.name)" class="btn btn-outline-primary active" @click="add(data)">Agregar a
            favoritos</button>
    </div>
    <button class="btn btn-outline-primary me-2" @click="back">Volver</button>
</template>