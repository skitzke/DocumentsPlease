//Instantiation of Audio to use it in html
let musicMenu = new Audio('audio/menusong.mp3');
let musicGame = new Audio('audio/gameBackgroundMusic.mp3');

//Plays the menu music
function menuAudio() {
    //Checking if the menu music is already playing
    if (!musicMenu.paused){
        musicMenu.pause();
    }
    //If the menu music is not playing, then play the music
    musicMenu.play();
    musicMenu.loop =true;
    musicMenu.volume = 0.3;
}

//Plays the game music
function gameAudio(){
    //Checking if the game music is already playing
    if (!musicGame.paused){
        musicGame.pause();
    }
    //If the game music is not playing, then play the music
    musicGame.play();
    musicGame.loop =true;
    musicGame.volume = 0.18;
}
