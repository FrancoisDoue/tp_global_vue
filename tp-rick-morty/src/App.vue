<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="container-fluid row bg-dark text-light px-4">
    <div class="col-4">
      <h1>Rick & Morty</h1>
    </div>
    <nav class="col-8">
      <ul class="h-75 d-flex justify-content-end align-items-center">
        <li class="list-inline-item mx-4">
          <RouterLink class="link-light" to="/home">Accueil</RouterLink>
        </li>
        <li class="list-inline-item mx-4">
          <RouterLink class="link-light" to="/loggin">Connexion</RouterLink>
        </li>
        <li class="list-inline-item mx-4">
          <RouterLink class="link-light" to="/log_on">Inscription</RouterLink>
        </li>
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
