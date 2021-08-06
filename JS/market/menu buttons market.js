document.getElementById("power_ups_menu").addEventListener("click",function (argument) {
	for (i in products_elements_array) {
		if (products_elements_array[i].value != "power ups") {
			products_elements_array[i].style.display = 'none';
		}

		else {
			products_elements_array[i].style.display = 'inline-block';
		}
	}
})

document.getElementById("cards_menu").addEventListener("click",function (argument) {
	for (i in products_elements_array) {
		if (products_elements_array[i].value != "cards") {
			products_elements_array[i].style.display = 'none';
		}

		else {
			products_elements_array[i].style.display = 'inline-block';
		}
	}
})

document.getElementById("backgrounds_menu").addEventListener("click",function (argument) {
	for (i in products_elements_array) {
		if (products_elements_array[i].value != "backgrounds") {
			products_elements_array[i].style.display = 'none';
		}
		
		else {
			products_elements_array[i].style.display = 'inline-block';
		}
	}
})

document.getElementById("my_bag_menu").addEventListener("click",function my_bag_menu (argument) {

	for (i in products_elements_array) {
		// if player got some item of market, show this item
		if (parseInt(products_elements_array[i].firstChild.firstChild.innerHTML) >= 1) {
			products_elements_array[i].style.display = 'inline-block';
		}

		else {
			products_elements_array[i].style.display = 'none';
		}
	}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*	if (localStorage.getItem("bag").length > 0) {
		for (i in localStorage.getItem("bag").split(",")) {
			
			if (parseInt(products_elements_array[i].title) == parseInt(localStorage.getItem("bag").split(",")[i])){
				console.log('ass'+i)
				products_elements_array[i].style.display = 'initial';
			}

			else {
				products_elements_array[i].style.display = 'none';
			}
		}
	}*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

})