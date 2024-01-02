export const logOn = (objUser) => {
    objUser.isLogged = false;
    if ('users' in localStorage) {
        let actualStorage = JSON.parse(localStorage?.users)
        if(! actualStorage.find(u => u.email === objUser.email)){
            actualStorage.push(objUser);
            localStorage.setItem('users', JSON.stringify(actualStorage))
            return true;
        }
        return false
    } else {
        localStorage.setItem('users', JSON.stringify([objUser]))
        return true;
    }
}
