document.getElementsByClassName("body").value = "start_game";

var level = document.getElementById("level_number");
var old_progress = 0;
var progress_level = document.getElementsByClassName("progress_bar")[0];


var xp_power_up = false;
var xp_power_up_multiple = 0;

function level_system (argument) {

	if (xp_power_up == false) {
		var progression = 50 / (parseInt(level.innerHTML)*0.70);
	}
	else {
		var progression = (50 * xp_power_up_multiple) / (parseInt(level.innerHTML)*0.70);
	}
	

	if (old_progress + progression >= 100) {

		level.innerHTML = parseInt(level.innerHTML) + 1;
		localStorage.setItem("memory_game_level_number", parseInt(level.innerHTML))

		//are in "cash system.js"
	    gain_per_probability(Math.floor((Math.random() * 100) + 1));
	    //gain_cash(10);

		progress_level.style.width =  (old_progress + progression) - 100+'%';
		localStorage.setItem("memory_game_level_progress",  progress_level.style.width)

		old_progress = (old_progress + progression) - 100;
	}

	else{
		progress_level.style.width =  old_progress + progression+'%';
		localStorage.setItem("memory_game_level_progress",  progress_level.style.width)

		old_progress += progression;
	}
	
}