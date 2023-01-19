import { checkUsernameisFree } from "../storage/userStorage.js";
import { registerElements } from "../elements/registerElements.js";

export function checkUsername(username) {
    if(chceckUsernameRequirements(username) && checkUsernameisFree(username)) {
        return true;
    } else return false;
}

function chceckUsernameRequirements(username) {
    if(username.length >= 6 && username.length <= 16 && howManyLetters(username) >=5
     && howManyNumbers(username) >= 1 && containsOnlyAllowedChars(username)) {
        return true;
    } else {
        registerElements.usernameError.innerHTML = 'Nazwa użytkownika musi składać się z conajmniej 5 liter 1 cyfry oraz może zawierać tylko określone znaki specjalne - _ [ ] \ /';
        return false;
    } 
}

function howManyLetters(word) {
    let result = null;
    const regex = /[a-zA-Z]/g;
    const matches = word.match(regex);
    if(matches == null) {
        result = 0;
    } else {
        result = matches.length;
    }
    return result;
}

function howManyNumbers(word) {
    let result = null;
    const regex = /[0-9]/g;
    const matches = word.match(regex);
    if(matches == null) {
        result = 0;
    } else {
        result = matches.length;
    }
    return result;
}

function containsOnlyAllowedChars(word) {
    const regex = /^[a-zA-Z0-9\_\-\[\]\\\/]*$/;
    const result = word.match(regex);
    if(result === null) {
        return false;
    } else {
        return true;
    }
    
}