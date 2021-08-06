function change_theme (argument) {
	var use_item_list = document.getElementsByClassName("use_item");

	if (products_obj[argument.toElement.value].category == "backgrounds"){
		// equip item
		if (argument.toElement.innerHTML == "use") {

			for (i in use_item_list) {
				for (j in products_obj) {
					if (parseInt(use_item_list[i].value) == products_obj[j].id
						&& products_obj[j].category == "backgrounds"){
						document.getElementsByClassName("use_item")[i].innerHTML = "use";	
					}	
				}
			}

			localStorage.setItem("memory_game_background_theme", 
				argument.toElement.parentNode.parentNode.title)
			argument.toElement.innerHTML = "unequipe";

			message_popUp_snackbar("background equiped")
		}
		// unequip item
		else {
			localStorage.setItem("memory_game_background_theme", null)
			argument.toElement.innerHTML = "use";

			message_popUp_snackbar("background removed")
		}
	}

	if (products_obj[argument.toElement.value].category == "cards"){
		if (argument.toElement.innerHTML == "use") {

			for (i in document.getElementsByClassName("use_item")) {
				for (j in products_obj) {
					if (parseInt(use_item_list[i].value) == products_obj[j].id
						&& products_obj[j].category == "cards"){
						document.getElementsByClassName("use_item")[i].innerHTML = "use";	
					}	
				}
			}

			// recebe o id dele no array "products_obj"
			localStorage.setItem("memory_game_cards_theme", 
				argument.toElement.parentNode.parentNode.title)
			argument.toElement.innerHTML = "unequipe";

			message_popUp_snackbar("card equiped")

		}
		else {
			localStorage.setItem("memory_game_cards_theme", null)
			argument.toElement.innerHTML = "use";
			
			message_popUp_snackbar("card removed")
		}
	}

}

window.addEventListener("load", function (argument) {
	// verify if the function is called for game page.
	if (document.getElementsByClassName("body").value == "start_game") {
		if (localStorage.getItem("memory_game_background_theme") != "null") {
			
			for (i in products_obj) {
				// change for a background that player chosed on market
				if (products_obj[i].id == parseInt(localStorage.getItem("memory_game_background_theme"))){

					document.getElementsByTagName("body")[0].style.backgroundImage = "url('"+products_obj[i].img+"')";

				}
				
			}
		}
	}
})