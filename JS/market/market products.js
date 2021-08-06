
var products_obj = [

	product1 = {
		img: 'images/market/power ups/time.png',
		title: "More time",
		description: "Incress 15 seconds more in count down",
		price: 2,
		category: "power ups",
		type: "time",
		equipe: false
	},

	product3 = {
		img: 'images/market/backgrounds/bg1.png',
		title: "beautiful background",
		description: "change the background when you are in the game",
		price: 2,
		category: "backgrounds",
		equipe: true
	},

	goldX2 = {
		img: 'images/market/power ups/gold.png',
		title: "double gold",
		description: "incress gold X2 for 30 seconds",
		price: 1,
		category: "power ups",
		type: "gold",
		equipe: false
	},

	spin = {
		img: 'images/market/power ups/spin.png',
		title: "spin all cards again",
		description: "spin all cards for 8 seconds",
		price: 1,
		category: "power ups",
		type: "spin",
		equipe: false
	},

	goldX2 = {
		img: 'images/market/power ups/xp.png',
		title: "double XP",
		description: "incress experience X2 for 60 seconds",
		price: 1,
		category: "power ups",
		type: "xp",
		equipe: false
	},

	cloud_bg = {
		img: 'images/market/backgrounds/bg2.png',
		title: "amazing background",
		description: "change the background when you are in the game",
		price: 3,
		category: "backgrounds",
		equipe: true
	},

	card = {
		img: 'images/market/cards/bg_card1.jpg',
		title: "magic deck",
		description: "change the cards when you are in the game",
		price: 1,
		category: "cards",
		theme: ['images/market/cards/theme1/1.png','images/market/cards/theme1/2.png',
				'images/market/cards/theme1/3.png','images/market/cards/theme1/4.png',
				'images/market/cards/theme1/5.png','images/market/cards/theme1/6.png',

				'images/market/cards/theme1/1.png','images/market/cards/theme1/2.png',
				'images/market/cards/theme1/3.png','images/market/cards/theme1/4.png',
				'images/market/cards/theme1/5.png','images/market/cards/theme1/6.png'],
		equipe: true
	},

	card2 = {
		img: 'images/market/cards/bg_card2.jpg',
		title: "mistic deck",
		description: "change the cards when you are in the game",
		price: 1,
		category: "cards",
		theme: ['images/market/cards/theme2/1.png','images/market/cards/theme2/2.png',
				'images/market/cards/theme2/3.png','images/market/cards/theme2/4.png',
				'images/market/cards/theme2/5.png','images/market/cards/theme2/6.png',

				'images/market/cards/theme2/1.png','images/market/cards/theme2/2.png',
				'images/market/cards/theme2/3.png','images/market/cards/theme2/4.png',
				'images/market/cards/theme2/5.png','images/market/cards/theme2/6.png'],
		equipe: true
	}
];

for (i in products_obj) {
	products_obj[i].id = [i];
}

var products_elements_array = [];

var power_up_effects = [

	time = {
		type: "time",
		duration: 15,
		multiple: 1
	},

	gold = {
		type: "gold",
		duration: 30,
		multiple: 2
	},

	spin = {
		type: "spin",
		duration: 8,
		multiple: 1
	},

	xp = {
		type: "xp",
		duration: 60,
		multiple: 2
	}

]