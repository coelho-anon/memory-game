function spin_power_up (argument) {
	// power up of spin.
	if (argument.toElement.value == "spin") {
		for (i in power_up_effects) {
			if (power_up_effects[i].type == "spin") {

				
				let effect_duration = power_up_effects[i].duration;
				let cards_covered = [];
				let spin_timer_count = setInterval(function(){

					effect_duration -= 1;

					for (j in cards_array) {
						if (cards_array[j].style.transform == "rotateY(0deg)") {

							cards_covered.push(cards_array[j]);

							cards_array[j].removeEventListener("click", match_cards);

							cards_array[j].style.transform = "rotateY(180deg)";
							cards_array[j].style.transition = ".2s";
							cards_array[j].style.perspective = "2000px";
						}
					}

					if (effect_duration <= 0) {
						clearInterval(spin_timer_count);
						for (j in cards_covered) {

							cards_covered[j].style.transform = "rotateY(0deg)";
							cards_covered[j].style.transition = ".2s";
							cards_covered[j].style.perspective = "2000px";

							cards_covered[j].addEventListener("click", match_cards);
						}
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
				// update how much power up of "spin" player got
				else {
					argument.toElement.innerHTML = parseInt(argument.toElement.innerHTML) - 1;
				}
				
			}
		}
	}
}

