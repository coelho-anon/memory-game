	
var time = document.getElementById("time_number");
time.value = time.innerHTML;
var pausador = document.getElementById("pause_play_btn");

// is called in cards creator.js
function timer (argument) {

	var pause_play = "PLAY";

	document.getElementById("pause_play_btn").addEventListener("click", function (argument) {

		if (pausador.innerHTML.toUpperCase() == "PAUSE") {
			pause_play = "PAUSE";
			pausador.innerHTML = "PLAY";
		}
		else if (pausador.innerHTML.toUpperCase() == "PLAY") {
			pause_play = "PLAY";
			pausador.innerHTML = "PAUSE";
		}
		
	})

	var counter = setInterval(function(){ 

		if (pause_play == "PLAY") {
			time.innerHTML = parseInt(time.innerHTML) - 1;
			for (var i = 0; i < document.getElementsByClassName("cards").length; i++) {
				document.getElementsByClassName("cards")[i].addEventListener("click", match_cards);
			}
		}

		if (pause_play == "PAUSE") {
			time.innerHTML = parseInt(time.innerHTML);
			for (var i = 0; i < document.getElementsByClassName("cards").length; i++) {
				document.getElementsByClassName("cards")[i].removeEventListener("click", match_cards);
			}
		}

		if (document.getElementById("pause_play_btn").value == "end_game") {
			clearInterval(counter);
		}
		
		if (parseInt(time.innerHTML) <= 0) {
			clearInterval(counter)
			defeated_game();
		}

	}, 1000);

}


function clear_game (total_flipped) {

	if (total_flipped == document.getElementsByClassName("cards").length) {

		for (var i = 0; i < document.getElementsByClassName("cards").length; i++) {
			document.getElementsByClassName("cards")[i].removeEventListener("click", match_cards);
		}

	}
}