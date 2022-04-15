var username;
var usernameStorage;
var element = document.getElementById('userInput');

// Store username variable in the local storage
function storeUsername(){
    if (element != null) {
        username = element.value;
        usernameStorage = username;
        localStorage.setItem("username", usernameStorage);
    }
}

// Retrieve stored data from local storage
function retrieveUsername(){
    username = localStorage.getItem("username");
    return username;
}

// Remove any stored data from local storage
function cleanLocalStorage(){
    localStorage.removeItem("username");
}
