export function checkPassword(password) {
    if(checkPasswordLength(password)) {
        return true;
    } else return false;
}

function checkPasswordLength(password) {
    if(password.length >=6) {
        return true;
    } else return false;
}