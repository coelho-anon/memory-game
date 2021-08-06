
function icon_power_ups (argument) {
	let array_powers_repeted = [];
	// if got itens on bag
	if (localStorage.getItem("bag").split(",").length) {
		// see all itens on bag
		for (var i = 0; i < localStorage.getItem("bag").split(",").length; i++) {
			for (j in products_obj) {
				// if item on bag got same id of a product
				// and if category is power ups
				if (parseInt(localStorage.getItem("bag").split(",")[i]) == products_obj[j].id
					&& products_obj[j].category == "power ups"){
					// if power up has created, his create, else, no create.
					if (array_powers_repeted.indexOf(products_obj[j].id) < 0) {

						var row_power_up = document.getElementsByClassName("row_power_up")[0];

						var power_up_icon = document.createElement("div");
						power_up_icon.className = "power_up_icon";
						power_up_icon.title = products_obj[j].id;
						// effect type
						power_up_icon.value = products_obj[j].type;
						power_up_icon.style.backgroundImage = "url('"+products_obj[j].img+"')";
						// count how much of this same power up player got
						power_up_icon.innerHTML = qtd_of_some_power_up(products_obj[j].id)
						row_power_up.appendChild(power_up_icon);

						power_up_icon.addEventListener("click", effect_power_up)
						array_powers_repeted.push(products_obj[j].id);
					}

				}
			}
		}
	}
}
icon_power_ups();


// count how much of this same power up player got
function qtd_of_some_power_up (id_power_up) {
	let counter = 0;
	for (var i = 0; i < localStorage.getItem("bag").split(",").length; i++) {
		if (id_power_up == localStorage.getItem("bag").split(",")[i]) {
			counter += 1;
		}
	}

	return counter;

	counter = 0;
}

function effect_power_up (argument) {

	if (end_game_completly == false){
		// avaliable in archive "time_power_ups.js"
		time_power_up(argument);


	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
		/* IMPORTANT: if you put the name only "gold_power_up" this will
			result in a fail of cash system, because existe a var named "gold_power_up"
			look at cash system.js for understand*/
		gold_power_up_effect(argument);
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
		

		// avaliable in archive "spin_power_up.js"
		spin_power_up(argument);


	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
		/* IMPORTANT: if you put the name only "xp_power_up" this will
			result in a fail of level system, because existe a var named "xp_power_up"
			look at level system.js for understand*/
		xp_power_up_effect(argument);
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	}

	else {
		message_popUp_snackbar("you can't use your power ups after game end")
	}
}