//
let musicMenu = new Audio('audio/menusong.mp3');
let musicGame = new Audio('audio/gameBackgroundMusic.mp3');

function menuAudio() {
    if (!musicMenu.paused){
        musicMenu.pause();
    }
    musicMenu.play();
    musicMenu.loop =true;
    musicMenu.volume = 0.3;
}

function gameAudio(){
    if (!musicGame.paused){
        musicGame.pause();
    }
    musicGame.play();
    musicGame.loop =true;
    musicGame.volume = 0.18;
}
