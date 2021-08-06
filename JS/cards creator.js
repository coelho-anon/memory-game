var images_array = [];
var BG_card = "null";

// shop deck
if (localStorage.getItem("memory_game_cards_theme")	!= null
	|| localStorage.getItem("memory_game_cards_theme")	!= "null"){
	for (i in products_obj) {
		if (products_obj[i].id == parseInt(localStorage.getItem("memory_game_cards_theme"))) {
			images_array = products_obj[i].theme
			BG_card = products_obj[i].img;
		}
	}
}

// default deck of cards
if(localStorage.getItem("memory_game_cards_theme")	== "null" ||
	localStorage.getItem("memory_game_cards_theme")	== null){
		
	images_array = ["images/card.png", "images/card2.png", "images/card3.png",
					"images/card4.png", "images/card5.png", "images/card6.png",

					"images/card.png", "images/card2.png", "images/card3.png",
					"images/card4.png", "images/card5.png", "images/card6.png"]
	BG_card = "null";
}

var cards_array = []

function create_cards (argument) {
	images_array.sort(function(a, b){return 0.5 - Math.random()});

	for (i in images_array) {
	
	var cards_container = document.getElementById("cards_container");

	var cards = document.createElement("div");
	cards.className = "cards";
	cards_container.appendChild(cards);

	cards_array.push(cards);

		var two_faces_cards = document.createElement("div");
		two_faces_cards.className = "two_faces_cards";
		cards.appendChild(two_faces_cards);

			var front_card = document.createElement("div");
			front_card.className = "front_card";
			front_card.style.backgroundImage = "url('"+images_array[i]+"')";
			two_faces_cards.appendChild(front_card);

			var back_card = document.createElement("div");
			back_card.className = "back_card";
			if (BG_card != "null"){
				back_card.style.backgroundImage = "url('"+BG_card+"')";
			}
			two_faces_cards.appendChild(back_card);
	}

}

function sort_cards (argument) {

	let cards = document.getElementsByClassName("cards");
	
	for (var y = 0; y < cards.length; y++) {

		for (var z = 0; z < cards.length; z++) {

			if (cards[y].firstElementChild.firstElementChild.style.backgroundImage == 
				cards[z].firstElementChild.firstElementChild.style.backgroundImage) {

				cards[y].value = y;
				cards[z].value = y;
				
			}
		}
	}
	
}


function back_face_cards (argument) {

	setTimeout(function(){

		for (var i = 0; i < document.getElementsByClassName("cards").length; i++){
			document.getElementsByClassName("cards")[i].style.transform = "rotateY(0deg)";
		}

		timer();

	}, 2200);

	
}
back_face_cards();

