import { loginElements } from "./elements/loginElements.js";
import { findByEmailOrUsername, loginUser } from "./storage/userStorage.js";
import { errorVisibility } from "./auxiliary/errorVisibility.js";
import { hashPassword } from "./security/passwordHashing.js";

loginElements.form.addEventListener('submit', () => {
    login();
})

function clearInput() {
    loginElements.username.value = '';
    loginElements.password.value = '';
}

function login() {
    authenticateData();
}

async function authenticateData() {
    const username = loginElements.username.value;
    const password = await hashPassword(loginElements.password.value);
    const user = findByEmailOrUsername(username);
    if(user !== null && password === user.password) {
        loginUser(user);
        clearInput();
        errorVisibility.hideError(loginElements.usernameError);
        errorVisibility.hideError(loginElements.passwordError);
    } else if(user === null) {
        loginElements.usernameError.innerHTML = 'Nie ma takiego użytkownika, zachęcamy do założenia konta';
        loginElements.passwordError.innerHTML = 'Nie ma takiego użytkownika, zachęcamy do założenia konta';
        errorVisibility.showError(loginElements.usernameError);
        errorVisibility.showError(loginElements.passwordError);
    } else {
        loginElements.usernameError.innerHTML = 'Nieprawidłowe nazwa użytkownika lub hasło';
        loginElements.passwordError.innerHTML = 'Nieprawidłowe nazwa użytkownika lub hasło';
        errorVisibility.showError(loginElements.usernameError);
        errorVisibility.showError(loginElements.passwordError);
    }
}