import { checkEmailFree } from "../storage/userStorage.js";
import { registerElements } from "../elements/registerElements.js";

export function checkEmail(email, emailRepeat) {
    if(checkEmailSame(email, emailRepeat) && checkEmailFree(email)) {
        return true;
    } else {
        return false;
    }
}

function checkEmailSame(email, emailRepeat) {
    if(email === emailRepeat && email != null && email.length > 0) {
        return true;
    } else {
        registerElements.emailError.innerHTML = 'Podane e-maile nie są takie same';
        registerElements.emailRepeatError.innerHTML =  'Podane e-maile nie są takie same';
        return false;
    }
}
