class NavElements {
    constructor() {
        this.firstButton = document.querySelector('.nav-first-button');
        this.secondButton = document.querySelector('.nav-second-button');
        this.hamburger = document.querySelector('.nav-hamburger');
        this.menu = document.querySelector('.nav-menu');
        this.title = document.querySelector('.nav-name');
    }
}

export const navElements = new NavElements();