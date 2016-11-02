var SANDWICHMAKER = (function (SANDWICHMAKER) {
	var cheesePrices = {
		"American": 1.00,
		"Pepperjack": 1.25,
		"no cheese": 0.00


	};
		SANDWICHMAKER.getCheesePrice = function(cheeseChoice) {
			var priceOfCheese = cheesePrices[cheeseChoice];
			console.log("priceOfCheese", priceOfCheese );
			SANDWICHMAKER.getPrice(priceOfCheese);
		},

		SANDWICHMAKER.addCheese = function(cheeseChoice) {
			var  cheesePick = cheeseChoice ;
			console.log("cheese choice: ", cheeseChoice );
			SANDWICHMAKER.addTopping(cheeseChoice);
		};
	return SANDWICHMAKER;

})(SANDWICHMAKER || {});
//("cheesy", SANDWICHMAKER);