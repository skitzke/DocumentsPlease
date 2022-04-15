var username;
var usernameStorage;
var element = document.getElementById('userInput');
var menuMustic = new Audio('audio/menusong.mp3');

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

function playMusic(){
    menuMustic.play();
    menuMustic.loop = true;
}
playMusic();
