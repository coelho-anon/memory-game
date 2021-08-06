function xp_power_up_effect (argument) {
	// power up of xp.
	if (argument.toElement.value == "xp") {
		for (i in power_up_effects) {
			if (power_up_effects[i].type == "xp") {

				let effect_duration = power_up_effects[i].duration;
				let double_xp_counter = setInterval(function(){

					xp_power_up = true;
					xp_power_up_multiple = power_up_effects[i].multiple;

					effect_duration -= 1;
					if (effect_duration <= 0) {

						clearInterval(double_xp_counter);
						xp_power_up = false;
						xp_power_up_multiple = 0;
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
				// update how much power up of "time" player got
				else {
					argument.toElement.innerHTML = parseInt(argument.toElement.innerHTML) - 1;
				}
				
			}
		}
	}
}