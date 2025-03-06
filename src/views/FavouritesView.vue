<script setup>
import { useFavouritesStore } from '@/store/favourites';
import { storeToRefs } from 'pinia';

const useFavourites = useFavouritesStore();

const { remove, } = useFavourites;
const { favourites } = storeToRefs(useFavourites);
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favourites.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>
        <li class="list-group-item" v-for="pokemon in favourites" :key="pokemon.id">
            <div>{{ pokemon.name }}</div>
            <div>
                <RouterLink class="btn btn-outline-primary me-2" :to="`/pokemon/${pokemon.name}`">Más info</RouterLink>
                <button class="btn btn-danger" @click="remove(pokemon.id)">Eliminar</button>
            </div>
        </li>
    </ul>
</template>