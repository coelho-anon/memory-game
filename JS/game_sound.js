

if (localStorage.getItem("memory_game_soundEffects") == "on") {
    soundOn = true;
    document.getElementById("sound_icon").value = "on";
    document.getElementById("sound_icon").style.backgroundImage = "url('images/musicOn.png')";
}
else {
    soundOn = false;
    document.getElementById("sound_icon").value = "off";
    document.getElementById("sound_icon").style.backgroundImage = "url('images/musicOff.png')";
}



if (localStorage.getItem("memory_game_musicEffects") == "on") {
    musicOn = true;
    document.getElementById("music_icon").value = "on";
    document.getElementById("music_icon").style.backgroundImage = "url('images/audioOn.png')";
}
else {
    musicOn = false;
    document.getElementById("music_icon").value = "off";
    document.getElementById("music_icon").style.backgroundImage = "url('images/audioOff.png')";
}





document.getElementById("music_icon").addEventListener("click", function (argument) {

	if(argument.currentTarget.value == "on"){
		argument.currentTarget.style.backgroundImage = "url('images/audioOff.png')";
		argument.currentTarget.value = "off";
		musicOn = false;

		localStorage.setItem("memory_game_musicEffects", "off");
	}
	else {
		argument.currentTarget.value = "on";
		musicOn = true;
		argument.currentTarget.style.backgroundImage = "url('images/audioOn.png')";

		localStorage.setItem("memory_game_musicEffects", "on");
	}
	
})


document.getElementById("sound_icon").addEventListener("click", function (argument) {

	if(argument.currentTarget.value == "on"){
		argument.currentTarget.style.backgroundImage = "url('images/musicOff.png')";
		argument.currentTarget.value = "off";
		soundOn = false;

		localStorage.setItem("memory_game_soundEffects", "off");
	}
	else {
		argument.currentTarget.value = "on";
		soundOn = true;
		argument.currentTarget.style.backgroundImage = "url('images/musicOn.png')";

		localStorage.setItem("memory_game_soundEffects", "on");
	}
	
})