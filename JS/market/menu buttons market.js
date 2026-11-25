function setActiveMarketMenu(activeButton) {
	var buttons = document.querySelectorAll(".menu_btn");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("active");
	}
	if (activeButton) activeButton.classList.add("active");
}

function showCategory(category, activeButton) {
	for (var i = 0; i < products_elements_array.length; i++) {
		products_elements_array[i].style.display = products_elements_array[i].value === category ? "inline-block" : "none";
	}
	setActiveMarketMenu(activeButton);
}

document.getElementById("power_ups_menu").addEventListener("click", function () {
	showCategory("power ups", this);
});

document.getElementById("cards_menu").addEventListener("click", function () {
	showCategory("cards", this);
});

document.getElementById("backgrounds_menu").addEventListener("click", function () {
	showCategory("backgrounds", this);
});

document.getElementById("my_bag_menu").addEventListener("click", function () {
	for (var i = 0; i < products_elements_array.length; i++) {
		var quantity = products_elements_array[i].querySelector(".qtd_item");
		products_elements_array[i].style.display = quantity && parseInt(quantity.textContent, 10) >= 1 ? "inline-block" : "none";
	}
	setActiveMarketMenu(this);
});

// Power Ups is the default market section.
setActiveMarketMenu(document.getElementById("power_ups_menu"));
