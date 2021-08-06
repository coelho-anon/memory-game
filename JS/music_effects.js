function audioState (argument) {
    if (localStorage.getItem("memory_game_soundEffects") == "on") {
        soundOn = true;
    }
    else {
        soundOn = false;
    }



    if (localStorage.getItem("memory_game_musicEffects") == "on") {
        musicOn = true;
    }
    else {
        musicOn = false;
    }
}
audioState();



//card sound effect
function soundEffectCard(){
    audioState();
    if(musicOn == true){
        var sound = document.createElement("audio");
        var source = document.createElement("source");
        source.setAttribute("src","Music/paperShifting.mp3");
        source.setAttribute("type","audio/mpeg");
        sound.appendChild(source);
        sound.play();
    }
}
//sound effect when winning
function soundEffectWin(){
    audioState();
    if(musicOn == true){
        var sound = document.createElement("audio");
        var source = document.createElement("source");
        source.setAttribute("src","Music/Win.mp3");
        source.setAttribute("type","audio/mpeg");
        sound.appendChild(source);
        sound.play();
    }
}
//sound effect on losing
function soundEffectLose(){
    audioState();
    if(musicOn == true){
        var sound = document.createElement("audio");
        var source = document.createElement("source");
        source.setAttribute("src","Music/Lose.mp3");
        source.setAttribute("type","audio/mpeg");
        sound.appendChild(source);
        sound.play();
    }
}