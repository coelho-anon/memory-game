var total_flipped = 0;
var flipped_cards = [];
var count_flipped = 0;

create_cards();
sort_cards();

function click_cards_listener () {
	var cards = document.getElementsByClassName("cards");
	for (var i = 0; i < cards.length; i++) {
		cards[i].addEventListener("click", match_cards);
	}
}
click_cards_listener();

function match_cards (event) {
	// Use standard DOM APIs. event.toElement is non-standard and can be
	// undefined outside some Chromium environments.
	var card = event.currentTarget;

	if (!card || count_flipped >= 2) return;

	// Ignore clicks on a card that is already face-up.
	var transform = window.getComputedStyle(card).transform;
	var isFaceDown = transform === "none" || transform === "matrix(1, 0, 0, 1, 0, 0)";

	// The game starts with the cards face-down (rotateY(180deg)).
	// After the initial reveal, the face-down state is rotateY(0deg).
	// Handle both computed-matrix forms robustly.
	var rotation = getYRotation(card);
	if (rotation !== 0) return;

	rotate_card(card);

	if (count_flipped >= 2) {
		setTimeout(function () {
			count_flipped = 0;

			if (flipped_cards.length >= 2 && flipped_cards[0].value == flipped_cards[1].value) {
				hide_cards_effect();
			} else {
				rotate_start_position();
			}
		}, 400);
	}
}

function getYRotation (element) {
	var transform = window.getComputedStyle(element).transform;

	if (!transform || transform === "none") return 0;

	var values = transform.match(/^matrix3d\((.+)\)$/);
	if (values) {
		var m = values[1].split(',').map(Number);
		return Math.round(Math.atan2(m[2], m[0]) * 180 / Math.PI);
	}

	values = transform.match(/^matrix\((.+)\)$/);
	if (values) {
		var m2 = values[1].split(',').map(Number);
		return Math.round(Math.atan2(-m2[1], m2[0]) * 180 / Math.PI);
	}

	return 0;
}

function hide_cards_effect () {
	// are in "end memory game.js"
	clear_game(total_flipped += 2);

	flipped_cards.shift();
	flipped_cards.pop();

	// are in "level system.js"
	level_system();

	// are in "cash system.js"
	gain_per_probability(Math.floor((Math.random() * 11) + 5));

	// statistics.js
	points("hit_point");
}

function rotate_card (card) {
	if (!card) return;

	soundEffectCard();
	card.style.transform = "rotateY(180deg)";
	card.style.transition = ".2s";
	card.style.perspective = "2000px";

	count_flipped += 1;
	flipped_cards.push(card);
}

function rotate_start_position () {
	for (var i = 0; i < flipped_cards.length; i++) {
		flipped_cards[i].style.transform = "rotateY(0deg)";
		flipped_cards[i].style.transition = ".2s";
		flipped_cards[i].style.perspective = "2000px";
	}

	flipped_cards.shift();
	flipped_cards.pop();

	// statistics.js
	points("error_point");
}
