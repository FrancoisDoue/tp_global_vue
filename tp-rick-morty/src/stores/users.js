import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {

  const users = ref('users' in localStorage ? JSON.parse(localStorage.users) : [])

  const loggedUser = ref('loggin' in localStorage ? JSON.parse(localStorage.loggin): null);

  const getUserByMail = (mail) => users.value.find(u => u.email === mail);

  const userLoggin = (mail, psw) => {
    const user = getUserByMail(mail);
    if (user && user.password === psw) {
      // user.isLogged = true;
      localStorage.loggin = JSON.stringify(user)
      loggedUser.value = user;

      return true;
    }
    return false;
  }

  const userLogout = () => {
    loggedUser.value = null
    localStorage.removeItem('loggin')
  }

  return { users, loggedUser, getUserByMail, userLoggin, userLogout }
})
