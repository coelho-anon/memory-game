var end_game_completly = false;

function clear_game (total_flipped) {

	if (total_flipped == document.getElementsByClassName("cards").length) {

		soundEffectWin()

		document.getElementById("pause_play_btn").value = "end_game"

		for (var i = 0; i < document.getElementsByClassName("cards").length; i++) {
			document.getElementsByClassName("cards")[i].removeEventListener("click", match_cards);
		}

		document.getElementById("content_result").style.backgroundImage = "url('images/win.jpg')";
		$("#result_modal").fadeIn(1000);

		
		end_game_completly = true;

	}
}

function defeated_game (argument) {

	soundEffectLose()
	
	for (var i = 0; i < document.getElementsByClassName("cards").length; i++) {
		document.getElementsByClassName("cards")[i].removeEventListener("click", match_cards);
	}

	document.getElementById("content_result").style.backgroundImage = "url('images/lose.png')";
	$("#result_modal").fadeIn(1000);

	end_game_completly = true;
}