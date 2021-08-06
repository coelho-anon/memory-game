function time_power_up (argument) {
	// power up of time.
	if (argument.toElement.value == "time") {
		for (i in power_up_effects) {
			if (power_up_effects[i].type == "time") {

				// add more time to game
				time.innerHTML = parseInt(time.innerHTML) + 
				(power_up_effects[i].duration * power_up_effects[i].multiple)

				// update the local storage removing one power up
				let update_bag = localStorage.getItem("bag").split(",")
				update_bag.splice(update_bag.indexOf(argument.toElement.title,0), 1);
				localStorage.setItem("bag", update_bag)

				// remove the power up from html
				if (parseInt(argument.toElement.innerHTML) == 1) {
					argument.toElement.style.display = 'none';
				}
				// update how much power up of "time" player got
				else {
					argument.toElement.innerHTML = parseInt(argument.toElement.innerHTML) - 1;
				}
				
			}
		}
	}
}