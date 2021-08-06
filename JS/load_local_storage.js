
var bag = [];

window.addEventListener("load", function (argument) {
	document.querySelector("html").style.fontFamily = 'Kristen ITC';
	if (document.getElementById("cash_number") != null) {
		
		var gold = document.getElementById("cash_number");
		var level_number = document.getElementById("level_number");
		var level_progress_bar = document.getElementById("level_progress_bar");

		// if is beginner
		//if is the first time in this game, add things (gold, level...) for beginers
		if (localStorage.getItem("coelho_anon_arrepia") == null) {

			// create space for future itens on bag
			localStorage.setItem("bag",bag)
			// add gold
			localStorage.setItem("memory_game_gold", 9000)

			// add level
			localStorage.setItem("memory_game_level_number", 1)
			localStorage.setItem("memory_game_level_progress", "0%")

			localStorage.setItem("coelho_anon_arrepia", "not_beginer")

			gold.innerHTML = localStorage.getItem("memory_game_gold");
			level_number.innerHTML = localStorage.getItem("memory_game_level_number");
			level_progress_bar.style.width = localStorage.getItem("memory_game_level_progress");

			// add music and sound state "on"
			localStorage.setItem("memory_game_soundEffects", "on");
		}
		// not a beginner
		else {

			// update gold
			gold.innerHTML = localStorage.getItem("memory_game_gold")

			// update level
			level_number.innerHTML = localStorage.getItem("memory_game_level_number")
			level_progress_bar.style.width = localStorage.getItem("memory_game_level_progress")

			// checks if the function is being called by the game screen file
			if (document.getElementsByClassName("body").value == "start_game") {
				// adds the previous level progress
				// (extracted from the localstorage that was cut out and converted into number)
				old_progress = parseFloat(localStorage.getItem("memory_game_level_progress").slice(0, localStorage.getItem("memory_game_level_progress").length-1))
			}

		}
	}

	// if are in index.html and is beginner, recive "on" in sound and music state
	else {
		if (localStorage.getItem("coelho_anon_arrepia") == null) {
			localStorage.setItem("memory_game_soundEffects", "on");
			localStorage.setItem("memory_game_musicEffects", "on");

			document.getElementById("welcome_modal").style.display = 'block';
		}
	}
})
/*
CRUD DE LOCAL STORAGE

CREATE
localStorage.setItem("keyname", value)

READ
localStorage.key(0) SHOW THE KEY IN 0
localStorage.getItem("my_item") SHOW THE VALUE THAT GOT THE KEY my_item
localStorage.getItem(localStorage.key(4)) SHOW THE VALUE IN KEY 4

UPDATE
SHOULD USE THE SAME KEY FOR UPDATE, LIKE IN ARRAY USING THE INDEX
localStorage.setItem("keyname", value)

DELETE
localStorage.removeItem(keyname) DELETE A SPECIFIC ITEM
localStorage.clear() CLEAR ALL LOCAL STORAGE
*/