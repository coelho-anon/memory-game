var cash = document.getElementById("cash_number");

var gold_power_up = false;
var gold_power_up_multiple = 0;

//is for gain a diferent cash value ever time.
//is called in "match cards.js"
function gain_per_probability (cash_value) {

	if (gold_power_up == false) {

		cash.innerHTML = parseInt(cash.innerHTML) + cash_value;
		// this is for save the cash number even player close the browser
		localStorage.setItem("memory_game_gold", parseInt(cash.innerHTML))
	}

	else {
		
		cash.innerHTML = parseInt(cash.innerHTML) + (cash_value * gold_power_up_multiple);
		// this is for save the cash number even player close the browser
		localStorage.setItem("memory_game_gold", parseInt(cash.innerHTML))
	}
	
}

//is for ever gain a specific cash value.
//is called in "match cards.js"
function gain_cash (cash_value) {
	cash.innerHTML = parseInt(cash.innerHTML) + cash_value;
	// this is for save the cash number even player close the browser
	localStorage.setItem("memory_game_gold", parseInt(cash.innerHTML))
}