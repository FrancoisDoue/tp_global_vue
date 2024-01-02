<script setup>
import { useUsersStore } from '@/stores/users';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter()
const user = useUsersStore()

const handleLogout = () => {
    user.userLogout()
    router.replace('/')
}

</script>

<template>
    <li class="list-inline-item mx-4">
        <RouterLink class="link-light" to="/characters">Liste des personnages</RouterLink>
    </li>
    <li class="list-inline-item mx-4">
        <button class="btn btn-outline-light" @click="handleLogout">Se déconnecter</button>
    </li>
</template>

<style scoped>

</style>