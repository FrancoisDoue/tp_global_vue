<script setup>
import { useUsersStore } from '@/stores/users';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const usersStore = useUsersStore()

const userMail = ref('')
const userPsw = ref('')
const error = ref(false)

const logForm = () => {
    // console.log(usersStore.userLoggin(userMail.value, userPsw.value))
    if (usersStore.userLoggin(userMail.value, userPsw.value)){
        router.replace('/')
    }else error.value = true
}

console.log(usersStore.users)
</script>

<template>
    <h2 class="text-center my-4">Connexion</h2>

    <form @submit.prevent="logForm" class="container">
        <div class="row my-4">
            <div class="my-4 col-6 text-center">
                <div class="row">
                    <div class="my-4">
                        <label for="email-form">Adresse Email :</label>
                        <input type="email" id="email-form" class="form-control" @focus="error = false" v-model="userMail">
                    </div>
                    <div class="my-4">
                        <label for="psw-form">Mot de passe :</label>
                        <input type="password" id="psw-form" class="form-control" @focus="error = false" v-model="userPsw">
                    </div>
                    <div v-show="error" class="alert alert-warning">
                        <p>Identifiants incorrects</p>
                    </div>
                    <button type="submit" class="btn btn-outline-dark">Se connecter</button>
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped>

</style>