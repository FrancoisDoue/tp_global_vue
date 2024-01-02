<script setup>
import { getCharacterList } from '@/services/apiService'
import { ref, watchEffect } from 'vue';

const characterList = ref(null)

watchEffect( async () => console.log(characterList.value = await getCharacterList()))
</script>

<template>
    <div v-if="!characterList?.error" class="container d-flex">
        hello
        <p v-for="character in characterList?.results"> {{character.name}}</p>

    </div>
    <div v-else class="alert alert-warning text-center m-4">
        <p>{{ characterList.message }}</p>
        <p>Error: {{ characterList.code }}</p>
    </div>
</template>