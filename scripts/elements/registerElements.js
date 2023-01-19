class RegisterElements {
    constructor() {
        this.username = document.querySelector('.register-username-input');
        this.email = document.querySelector('.register-email-input');
        this.emailRepeat = document.querySelector('.register-email-input-repeat');
        this.password = document.querySelector('.register-password-input');
        this.submit = document.querySelector('.register-submit');
        this.registerForm = document.querySelector('.register-form');
        this.usernameError = document.querySelector('.register-username-error');
        this.emailError = document.querySelector('.register-email-error');
        this.emailRepeatError = document.querySelector('.register-email-repeat-error');
        this.passwordError = document.querySelector('.register-password-error');
    }
}

export const registerElements = new RegisterElements();