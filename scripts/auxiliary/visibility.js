import { navElements } from "/scripts/elements/navElements.js";
import { mainElements } from "/scripts/elements/mainElements.js";
import { loadData } from "../transactions.js";

export function changeVisibility(page) {
    showAllNav();
    clearAllMain();
    if(page === 'home') {
        navElements.firstButton.innerHTML = 'Logowanie';
        navElements.secondButton.innerHTML = 'Rejstracja';
        showMain(mainElements.helloPage);
    } else if(page === 'login') {
        navElements.firstButton.innerHTML = 'Rejstracja';
        clearButton(navElements.secondButton);
        showMain(mainElements.loginPage);
    } else if(page === 'register') {
        navElements.firstButton.innerHTML = 'Logowanie';
        clearButton(navElements.secondButton);
        showMain(mainElements.registrationPage);
    } else if(page === 'transactions') {
        navElements.firstButton.innerHTML = 'Wyloguj';
        loadData();
        clearButton(navElements.secondButton);
        showMain(mainElements.transactionsPage);
    }
}

function showAllNav() {
    Object.values(navElements).forEach((element) => {
        if(element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        }
    })
}

function clearButton(button) {
    button.classList.add('hidden');
}

function clearAllMain() {
    Object.values(mainElements).forEach((element) => {
        if(!element.classList.contains('hidden')) {
            element.classList.add('hidden');
        }
    })
}

function showMain(page) {
    page.classList.remove('hidden');
}
