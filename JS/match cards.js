
var total_flipped = 0;
var flipped_cards = [];
var count_flipped = 0


create_cards();
sort_cards();


function click_cards_listener (argument) {
	for (var i = 0; i < document.getElementsByClassName("cards").length; i++) {
		document.getElementsByClassName("cards")[i].addEventListener("click", match_cards)
	}
}
click_cards_listener()


function match_cards (argument) {
	if (argument.toElement.className == "front_card" && count_flipped < 2) {			
		if (argument.toElement.parentNode.parentNode.style.transform == "rotateY(0deg)") {

			rotate_card(argument.toElement.parentNode.parentNode)
		}

		if (count_flipped >= 2) {

			setTimeout(function(){

				count_flipped = 0

				if (flipped_cards[0].value == flipped_cards[1].value) {

					hide_cards_effect()
				}

				else{
					rotate_start_position()
				}


			}, 400);
		}
	}

	if (argument.toElement.className == "back_card" && count_flipped < 2) {

		if (argument.toElement.parentNode.parentNode.style.transform != "rotateY(180deg)") {
			
			rotate_card(argument.toElement.parentNode.parentNode)
		}


		if (count_flipped >= 2) {

			setTimeout(function(){

				count_flipped = 0

				if (flipped_cards[0].value == flipped_cards[1].value) {
					
					hide_cards_effect()
				}

				else{
					rotate_start_position()
				}

			}, 400);
		}
	}

	if (argument.toElement.className == "two_faces_cards" && count_flipped < 2) {

		if (argument.toElement.parentNode.style.transform == "rotateY(0deg)") {

			rotate_card(argument.toElement.parentNode)
		}

		if (count_flipped >= 2) {

			setTimeout(function(){

				count_flipped = 0

				if (flipped_cards[0].value == flipped_cards[1].value) {
					
					hide_cards_effect()
				}

				else{
					rotate_start_position()
				}

			}, 400);
		}
	}

	if (argument.toElement.className == "cards" && count_flipped < 2) {
		
		if (argument.toElement.style.transform == "rotateY(0deg)") {

			rotate_card(argument.toElement)
		}

		if (count_flipped >= 2) {

			setTimeout(function(){

				count_flipped = 0

				if (flipped_cards[0].value == flipped_cards[1].value) {

					hide_cards_effect()
				}

				else{

					rotate_start_position()
				}

			}, 400);
		}

	}

	if (argument.toElement.nodeName == "H1" && count_flipped < 2) {
		if (argument.toElement.parentNode.parentNode.parentNode.style.transform == "rotateY(0deg)") {

			rotate_card(argument.toElement.parentNode.parentNode.parentNode)
		}

		if (count_flipped >= 2) {

			setTimeout(function(){

				count_flipped = 0

				if (flipped_cards[0].value == flipped_cards[1].value) {

					hide_cards_effect()
				}

				else{

					rotate_start_position()
				}


			}, 400);
		}
	}

}//end of match_cards

function hide_cards_effect (argument) {

	//are in "end memory game.js"
	clear_game(total_flipped += 2);

	flipped_cards.shift();
	flipped_cards.pop()

    //are in "level system.js"0
    level_system();

    //are in "cash system.js"
    gain_per_probability(Math.floor((Math.random() * 10) + 1));
    
    //gain_cash(10);

    //statistics.js
    points("hit_point")
     
}

function rotate_card (argument) {

	soundEffectCard();
	argument.style.transform = "rotateY(180deg)";
	argument.style.transition = ".2s";
	argument.style.perspective = "2000px";
	
	count_flipped += 1
	flipped_cards.push(argument)
}

function rotate_start_position (argument) {

	

	for (i in flipped_cards) {
		flipped_cards[i].style.transform = "rotateY(0deg)";
		flipped_cards[i].style.transition = ".2s";
		flipped_cards[i].style.perspective = "2000px";
		
	}
	
	flipped_cards.shift();
	flipped_cards.pop()

	//statistics.js
    points("error_point")
}

