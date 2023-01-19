import { registerElements } from "./elements/registerElements.js";
import { checkUsername } from "./validation/usernameRegisterValidation.js";
import { checkEmail } from "./validation/emailRegisterValidation.js";
import { checkPassword } from "./validation/passwordRegisterValidation.js";
import { errorVisibility } from "./auxiliary/errorVisibility.js";
import { addUser, loginUser } from "./storage/userStorage.js";
import { hashPassword } from "./security/passwordHashing.js";
import { assignRandomTransactionsToUser } from "./transactions/randomTransactions.js";

registerElements.registerForm.addEventListener('submit', () => {
    register(collectElements());
    clearInput();
})

function register(user) {
    if(validateRegistration(user)) {
        registerUser(user);
        clearInput();
    };
}

function clearInput() {
    registerElements.username.value = '';
    registerElements.email.value = '';
    registerElements.emailRepeat.value = '';
    registerElements.password.value = '';
}

function collectElements() {
    const username = registerElements.username.value;
    const email = registerElements.email.value;
    const emailRepeat = registerElements.emailRepeat.value;
    const password = registerElements.password.value;

    const user = {
        username,
        email,
        emailRepeat,
        password
    }

    return user;
}

function validateRegistration(user) {
    let res = true;
    if(checkUsername(user.username)) {
        errorVisibility.hideError(registerElements.usernameError);
    } else {
        errorVisibility.showError(registerElements.usernameError);
        res = false
    }

    if(checkEmail(user.email, user.emailRepeat)) {
        errorVisibility.hideError(registerElements.emailError);
        errorVisibility.hideError(registerElements.emailRepeatError);
    } else {
        errorVisibility.showError(registerElements.emailError);
        errorVisibility.showError(registerElements.emailRepeatError);
        res = false
    }

    if(checkPassword(user.password)) {
        errorVisibility.hideError(registerElements.passwordError);
    } else {
        errorVisibility.showError(registerElements.passwordError);
        res = false
    }
    return res;
}

 async function registerUser(stUser) {
    let user = {
        username: stUser.username,
        email: stUser.email,
        password: await hashPassword(stUser.password),
        randTransactions: assignRandomTransactionsToUser()
    }
    addUser(user);
    loginUser(user);
}