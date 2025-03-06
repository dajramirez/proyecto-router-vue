<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';

const { data, getData, loading, error } = useGetData();

const route = useRoute();
const router = useRouter();

const back = () => {
    router.push('/pokemon');
}

// const getData = async () => {
//     try {
//         const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
//         console.log(data);
//         pokemon.value = data;
//     } catch (error) {
//         console.log(error);
//         pokemon.value = null;
//     }
// }

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>
    <div v-if="loading">Cargando información...</div>
    <div class="alert alert-danger mt-2" v-if="error">No existe el pokémon </div>
    <div v-if="data">
        <img :src="data.sprites?.other['official-artwork'].front_default" height="100" width="100">
        <h1>Pokémon name: {{ $route.params.name }}</h1>
    </div>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>