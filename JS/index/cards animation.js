
var colors_array = ["#15ff00", "#00ffb3", "#009aff", "#0b00ff", "#bb00ff",
					"#ff00b6", "#ff0000", "#c5ff00", "#ff7100", "#ff0000",
					"#f44336", "#e91e63", "#9c27b0", "#673ab7", "#2196f3",
					"#03a9f4", "#00bcd4", "#4caf50", "#009688", "#8bc34a",
					"#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722",
					"#15ff00", "#00ffb3", "#009aff", "#0b00ff", "#bb00ff",
					"#ff00b6", "#ff0000", "#c5ff00", "#ff7100", "#ff0000",
					"#f44336", "#e91e63", "#9c27b0", "#673ab7", "#2196f3",
					"#03a9f4", "#00bcd4", "#4caf50", "#009688", "#8bc34a",
					"#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722"]

var colors_array2 = ["#15ff00", "#00ffb3", "#009aff", "#0b00ff", "#bb00ff",
					"#ff00b6", "#ff0000", "#c5ff00", "#ff7100", "#ff0000",
					"#f44336", "#e91e63", "#9c27b0", "#673ab7", "#2196f3",
					"#03a9f4", "#00bcd4", "#4caf50", "#009688", "#8bc34a",
					"#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722",
					"#15ff00", "#00ffb3", "#009aff", "#0b00ff", "#bb00ff",
					"#ff00b6", "#ff0000", "#c5ff00", "#ff7100", "#ff0000",
					"#f44336", "#e91e63", "#9c27b0", "#673ab7", "#2196f3",
					"#03a9f4", "#00bcd4", "#4caf50", "#009688", "#8bc34a",
					"#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722"];

var flip_cards = [];



function create_cards (argument) {

	colors_array.sort(function(a, b){return 0.5 - Math.random()});
	colors_array2.sort(function(a, b){return 0.5 - Math.random()});

	for (i in colors_array){
	
		var flip_box = document.getElementById("flip_box");

			var flip_box_inner = document.createElement("div");
			flip_box_inner.className = "flip_box_inner";
			flip_box.appendChild(flip_box_inner);

			flip_cards.push(flip_box_inner);

				var flip_box_front = document.createElement("div");
				flip_box_front.className = "flip_box_front";
				flip_box_front.style.backgroundColor = colors_array[i];
				flip_box_inner.appendChild(flip_box_front);

				var flip_box_back = document.createElement("div");
				flip_box_back.className = "flip_box_back";
				flip_box_back.style.backgroundColor = colors_array2[i];
				flip_box_inner.appendChild(flip_box_back);
	}



}

function spin_random() {
  setInterval(function(){
  	
  	if (flip_cards[Math.floor(Math.random() * flip_cards.length)].style.transform == "rotateY(180deg)") {
  		flip_cards[Math.floor(Math.random() * flip_cards.length)].style.transform = "rotateY(0deg)";
  	}

  	else {
  		flip_cards[Math.floor(Math.random() * flip_cards.length)].style.transform = "rotateY(180deg)";
  	}

  }, 100);
}

create_cards()
spin_random()

