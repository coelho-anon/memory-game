

if (localStorage.getItem("memory_game_soundEffects") == "on") {
    soundOn = true;
    document.getElementById("sound_icon").value = "on";
    document.getElementById("sound_icon").style.backgroundImage = "url('../memory game/images/musicOn.png')";
}
else {
    soundOff = false;
    document.getElementById("sound_icon").value = "off";
    document.getElementById("sound_icon").style.backgroundImage = "url('../memory game/images/musicOff.png')";
}



if (localStorage.getItem("memory_game_musicEffects") == "on") {
    musicOn = true;
    document.getElementById("music_icon").value = "on";
    document.getElementById("music_icon").style.backgroundImage = "url('../memory game/images/audioOn.png')";
}
else {
    musicOff = false;
    document.getElementById("music_icon").value = "off";
    document.getElementById("music_icon").style.backgroundImage = "url('../memory game/images/audioOff.png')";
}





document.getElementById("music_icon").addEventListener("click", function (argument) {

	if(argument.toElement.value == "on"){
		argument.toElement.style.backgroundImage = "url('../memory game/images/audioOff.png')";
		argument.toElement.value = "off";
		soundOn = false;

		localStorage.setItem("memory_game_musicEffects", "off");
	}
	else {
		argument.toElement.value = "on";
		soundOn = true;
		argument.toElement.style.backgroundImage = "url('../memory game/images/audioOn.png')";

		localStorage.setItem("memory_game_musicEffects", "on");
	}
	
})


document.getElementById("sound_icon").addEventListener("click", function (argument) {

	if(argument.toElement.value == "on"){
		argument.toElement.style.backgroundImage = "url('../memory game/images/musicOff.png')";
		argument.toElement.value = "off";
		soundOn = false;

		localStorage.setItem("memory_game_soundEffects", "off");
	}
	else {
		argument.toElement.value = "on";
		soundOn = true;
		argument.toElement.style.backgroundImage = "url('../memory game/images/musicOn.png')";

		localStorage.setItem("memory_game_soundEffects", "on");
	}
	
})