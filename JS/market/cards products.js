function cards_products (argument) {
	for (i in products_obj) {

		var row_products = document.getElementById("row_products");

		var cards = document.createElement("div");
		cards.className = "cards";
		cards.title = products_obj[i].id;
		cards.value = products_obj[i].category;
		row_products.appendChild(cards);

		products_elements_array.push(cards);

			var cards_top = document.createElement("div");
			cards_top.className = "cards_top";
			cards_top.style.backgroundImage = "url('"+products_obj[i].img+"')";
			cards.appendChild(cards_top);

				if (localStorage.getItem("bag").length > 0) {
					let bag_counter = 0;
					for (z in localStorage.getItem("bag").split(",")) {
						
						if (parseInt(products_elements_array[i].title) == parseInt(localStorage.getItem("bag").split(",")[z])){

							bag_counter += 1;
						}
					}

					if (bag_counter <= 0) {
						var qtd_item = document.createElement("span");
						qtd_item.className = "qtd_item";
						qtd_item.innerHTML = "0";
						cards_top.appendChild(qtd_item);
					}

					else {
						var qtd_item = document.createElement("span");
						qtd_item.className = "qtd_item";
						qtd_item.innerHTML = bag_counter;
						cards_top.appendChild(qtd_item);
					}


					bag_counter = 0;
				}

				else {
					var qtd_item = document.createElement("span");
					qtd_item.className = "qtd_item";
					qtd_item.innerHTML = "0";
					cards_top.appendChild(qtd_item);
				}

			var cards_body = document.createElement("div");
			cards_body.className = "cards_body";
			cards.appendChild(cards_body);

				var title_product = document.createElement("h1");
				title_product.className = "title_product";
				title_product.innerHTML = products_obj[i].title;
				cards_body.appendChild(title_product);

				var description_product = document.createElement("h2");
				description_product.className = "description_product";
				description_product.innerHTML = products_obj[i].description;
				cards_body.appendChild(description_product);

			var cards_footer = document.createElement("div");
			cards_footer.className = "cards_footer";
			cards.appendChild(cards_footer);

				var buy_btn = document.createElement("button");
				buy_btn.className = "buy_btn";
				buy_btn.innerHTML = products_obj[i].price;
				cards_footer.appendChild(buy_btn);

				buy_btn.addEventListener("click", buy_item)

				var use_item = document.createElement("button");
				use_item.className = "use_item";
				use_item.value = products_obj[i].id;

				// if is a background product
				if (products_obj[i].category == "backgrounds"){
					if (localStorage.getItem("memory_game_background_theme") != "null" 
					&& products_obj[i].id == parseInt(localStorage.getItem("memory_game_background_theme"))){
						use_item.innerHTML = "unequipe";
					}
					else {
						use_item.innerHTML = "use";	
					}
				}

				// if is a card product
				if (products_obj[i].category == "cards"){
					if (localStorage.getItem("memory_game_cards_theme") != "null" 
					&& products_obj[i].id == parseInt(localStorage.getItem("memory_game_cards_theme"))){
						use_item.innerHTML = "unequipe";
					}
					else {
						use_item.innerHTML = "use";	
					}
				}
				
				use_item.style.display = 'none';
				cards_footer.appendChild(use_item);

				use_item.addEventListener("click", change_theme);

			if (parseInt(qtd_item.innerHTML) > 0) {
				for (y in products_elements_array) {
					if (products_obj[y].equipe == true 
						&& products_obj[y].id == parseInt(cards.title)){

						use_item.style.display = 'initial';
					}
				}
			}
				

		if (products_elements_array[i].value != "power ups") {
			products_elements_array[i].style.display = 'none';
		}

	}
}

cards_products();

function buy_item (argument) {

	// when player gold is >= to item price
	if (parseFloat(localStorage.getItem("memory_game_gold")) >= parseFloat(argument.toElement.innerHTML)) {

		// update atual gold to new gold in local storage. (gold - item price)
		localStorage.setItem("memory_game_gold", 
			parseFloat(document.getElementById("cash_number").innerHTML) - parseFloat(argument.toElement.innerHTML))
		// update atual gold to new gold in player window.
		document.getElementById("cash_number").innerHTML = localStorage.getItem("memory_game_gold")
		message_popUp_snackbar("-"+argument.toElement.innerHTML)
		// if got some item on bag, add more one item, like .push() method
		if (localStorage.getItem("bag").length > 0) {

			// add a new item in bag and add a new value in the last separeted by ","
			localStorage.setItem("bag", localStorage.getItem("bag")+","+argument.toElement.parentNode.parentNode.title)
			// update how much of this item the player got.
			argument.toElement.parentNode.parentNode.firstChild.firstChild.innerHTML = parseInt(argument.toElement.parentNode.parentNode.firstChild.firstChild.innerHTML) + 1;
			
		}

		else {
			// add a new item in bag and add a new value
			localStorage.setItem("bag", argument.toElement.parentNode.parentNode.title)
			// update how much of this item the player got.
			argument.toElement.parentNode.parentNode.firstChild.firstChild.innerHTML = parseInt(argument.toElement.parentNode.parentNode.firstChild.firstChild.innerHTML) + 1;
			
		}

		

		for (i in products_obj) {
			if (products_obj[i].equipe == true
				&& products_obj[i].id == parseInt(argument.toElement.parentNode.parentNode.title)) {
				// show the button "use" if item is useable
				argument.toElement.nextSibling.style.display = 'initial';
			}

		}

	}

	else {
		message_popUp_snackbar("Insuficient money")
	}
}