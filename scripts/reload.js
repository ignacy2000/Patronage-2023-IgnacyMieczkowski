import { loadAfterPageReload, loginUser } from "./storage/userStorage.js"

window.onload = () => {
    if(loadAfterPageReload() !== null && loadAfterPageReload().isLogged) {
        loginUser(loadAfterPageReload().userLogged);
    }
}