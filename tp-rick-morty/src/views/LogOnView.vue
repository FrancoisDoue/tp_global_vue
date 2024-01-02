<script setup>
import { reactive } from 'vue';
import { REG_PASSWORD, REG_MAIL } from '@/constants/regex';
import { useRouter } from 'vue-router';
import { logOn } from '@/services/userService.js';

const router = useRouter();

const username = reactive({str: '', error: false})
const email = reactive({str: '', error: false})
const password = reactive({str: '', error: false})
const confirmPassword = reactive({str: '', error: false})

const ctrlUsername = () => username.error = !username.str
const ctrlEmail = () => {
    if (!email.str) return email.error = true;
    return email.error = !REG_MAIL.test(email.str)
}

const ctrlPassword = () => {
    if(!password.str) return password.error = !password.str;
    return password.error = !REG_PASSWORD.test(password.str)
}

const ctrlConfirmPassword = () => {
    return confirmPassword.error = confirmPassword.str !== password.str
}

const submitLogOn = () => {
    if(!(ctrlUsername() || ctrlEmail() || ctrlPassword() || ctrlConfirmPassword()))
        if (logOn({'username': username.str, 'email': email.str, 'password': password.str })){
            console.log('log on successed')
            router.replace('/loggin')
        }

}
</script>

<template>
    <h2 class="text-center my-4">Inscription</h2>
    <form @submit.prevent="submitLogOn" class="container">
        <div class="row my-4">
            <div class="col-6">
                <div>
                    <label for="username-form">Pseudo:</label>
                    <input v-model="username.str" @focus="username.error = false" @blur="ctrlUsername" type="text" id="username-form" class="form-control">
                </div>
                <div v-show="username.error" class="alert alert-danger">
                    Vous devez renseigner votre pseudo
                </div>
            </div>
            <div class="col-6">
                <div>
                    <label for="mail-form">Adresse email:</label>
                    <input v-model="email.str" @focus="email.error = false" @blur="ctrlEmail" type="email" id="mail-form" class="form-control">
                </div>
                <div v-show="email.error" class="alert alert-danger">
                    Adresse mail invalide
                </div>
            </div>

            <hr class="my-4">

            <div class="col-6">
                <div>
                    <label for="passord-form">Mot de passe: </label>
                    <input v-model="password.str" @focus="password.error = false" @blur="ctrlPassword" type="password" id="passord-form" class="form-control">
                </div>
                <div v-show="password.error" class="alert alert-danger">
                    Le mot de passe doit contenir au minimum une majuscule, une minuscule, un chiffre et un charactère spécial
                </div>
            </div>
            <div class="col-6">
                <div>
                    <label for="confirmPassword-form">Confirmer le mot de passe: </label>
                    <input v-model="confirmPassword.str" @focus="confirmPassword.error = false" @blur="ctrlConfirmPassword" type="password" id="confirmPassword-form" class="form-control">
                </div>
                <div v-show="confirmPassword.error" class="alert alert-danger">
                    Les mots de passe doivent être identiques
                </div>
            </div>


        </div>
        <div class="d-flex justify-content-center my-4">
            <button type="submit" class="btn btn-outline-dark col-4">S'inscrire</button>
        </div>
    </form>
</template>

<style scoped>

</style>@/services/userService