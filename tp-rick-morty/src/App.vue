<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUsersStore } from './stores/users';
import LogginBtns from '@/components/LogginBtns.vue';
import LoggoutBtns from '@/components/LoggoutBtns.vue'

const usersStore = useUsersStore()

</script>

<template>
  <header class="container-fluid row bg-dark text-light px-4 py-2">
    <div class="col-4">
      <h1>Rick & Morty</h1>
    </div>
    <nav class="col-8 py-2">
      <ul class="h-75 d-flex justify-content-end align-items-center">
        <li class="list-inline-item mx-4">
          <RouterLink class="link-light" to="/home">Accueil</RouterLink>
        </li>
        <LogginBtns v-if="!usersStore.loggedUser"/>
        <LoggoutBtns v-else />
      </ul>
    </nav>
  </header>
  <main class="container">
    <RouterView />

  </main>

</template>

<style scoped>
header{
  height: 75px;
}
</style>
