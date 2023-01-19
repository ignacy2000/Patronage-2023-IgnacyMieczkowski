class LoginElements {
    constructor() {
        this.username = document.querySelector('.login-username-input');
        this.password = document.querySelector('.login-password-input');
        this.submit = document.querySelector('.login-submit');
        this.form = document.querySelector('.login-form');
        this.usernameError = document.querySelector('.login-username-error');
        this.passwordError = document.querySelector('.login-password-error');
    }
}

export const loginElements = new LoginElements();