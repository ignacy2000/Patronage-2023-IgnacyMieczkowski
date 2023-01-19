import { registerElements } from "../elements/registerElements.js";
import { changeVisibility } from "../auxiliary/visibility.js";

let logged = {
    isLogged: false,
    userLogged: {}
}
let usersList = [];

export function addUser(user) {
    usersList.push(user);
    saveUserInSessionStorage();
}

export function loginUser(user) {
    saveLoggedUserInSessionStorage(user);
    changeVisibility('transactions');
}

export function logoutUser() {
    deleteLoggedUserInSessionStorage();
    changeVisibility('home');
}

export function getLoggedUser() {
    return JSON.parse(sessionStorage.getItem('loggedUser'));
}

export function loadAfterPageReload() {
    if(sessionStorage.getItem('usersList') !== null && sessionStorage.getItem('loggedUser') !== null) {
        usersList = JSON.parse(sessionStorage.getItem('usersList'));
        logged = JSON.parse(sessionStorage.getItem('loggedUser'));
    }
    return logged;
}

export function findByEmailOrUsername(name) {
    let res = null;
    if(usersList.length > 0) {
        usersList.forEach(user => {
            if(user.username === name || user.email === name) {
                res = user;
            }
        })
    }
    return res;
} 

export function checkEmailFree(email) {
    let res = null;
    if(usersList.length > 0) {
        usersList.forEach(user => {
            if(user.email === email) {
                registerElements.emailError.innerHTML = 'Podany email jest już w bazie danych';
                registerElements.emailRepeatError.innerHTML =  'Podany email jest już w bazie danych';
                res = false;     
            } else {
                res = true;
            } 
        })
    } else {
        res = true;
    } 
    return res;
}

export function checkUsernameisFree(username) {
    let condition = null;
    if(usersList.length > 0 || usersList == null) {
        usersList.forEach(element => {
            if(element.username === username) {
                registerElements.usernameError.innerHTML = 'Podana nazwa użytkownika jest już w bazie danych';
                condition = false;     
            } else {
                condition = true;
            } 
        })
    } else {
        condition = true;
    } 
    return condition;
}

function saveUserInSessionStorage() {
    sessionStorage.setItem('usersList', JSON.stringify(usersList));
}

function saveLoggedUserInSessionStorage(user) {
    logged = {
        isLogged: true,
        userLogged: user 
    }
    sessionStorage.setItem('loggedUser', JSON.stringify(logged));
}

function deleteLoggedUserInSessionStorage() {
    logged = {
        isLogged: false,
        userLogged: {} 
    }
    sessionStorage.setItem('loggedUser', JSON.stringify(logged));
}