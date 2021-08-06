//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/* IMPORTANT: if you put the name only "gold_power_up" this will
	result in a fail of cash system, because existe a var named "gold_power_up"
	look at cash system.js for understand*/
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
function gold_power_up_effect (argument) {

	if (argument.toElement.value == "gold") {
		for (i in power_up_effects) {
			if (power_up_effects[i].type == "gold") {

				// let atual_gold = parseInt(cash.innerHTML);
				let start_count_time = parseInt(time.innerHTML);

				let timer_aux = setInterval(function(){

					gold_power_up = true;
					gold_power_up_multiple = power_up_effects[i].multiple;

					if (start_count_time - parseInt(time.innerHTML) == power_up_effects[i].duration) {
						gold_power_up = false;
						gold_power_up_multiple = 0;
						clearInterval(timer_aux);
					}
				}, 1000);

				// update the local storage removing one power up
				let update_bag = localStorage.getItem("bag").split(",")
				update_bag.splice(update_bag.indexOf(argument.toElement.title,0), 1);
				localStorage.setItem("bag", update_bag)

				// remove the power up from html
				if (parseInt(argument.toElement.innerHTML) == 1) {
					argument.toElement.style.display = 'none';
				}
				// update how much power up of "gold" player got
				else {
					argument.toElement.innerHTML = parseInt(argument.toElement.innerHTML) - 1;
				}
			}
		}
	}
}