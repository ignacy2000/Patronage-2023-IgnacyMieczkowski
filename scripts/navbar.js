import { changeVisibility } from "./auxiliary/visibility.js";
import { navElements } from "./elements/navElements.js";
import { logoutUser } from "./storage/userStorage.js";

navElements.hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    navElements.menu.classList.toggle('is-opened');
})

navElements.firstButton.addEventListener('click', (e) => {
    changePage(e);
})

navElements.secondButton.addEventListener('click', (e) => {
    changePage(e);
})

navElements.title.addEventListener('click', () => {
    changeVisibility('home');
})


function changePage(element) {
    if(element.target.innerHTML === 'Logowanie') {
        changeVisibility('login');
    } else if(element.target.innerHTML === 'Rejstracja') {
        changeVisibility('register');
    } else if(element.target.innerHTML === 'Strona Główna' || element.target.innerHTML === 'Wyloguj') {
        logoutUser();
    }
}

function loadNavHTMLElements() {
    return 0;
}