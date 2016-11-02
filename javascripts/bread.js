var SANDWICHMAKER = (function (SANDWICHMAKER) {
	var breadPrices = {
		"Wheat": 1.25,
		"Rye": 1.20


	};
		SANDWICHMAKER.getBreadPrice = function(breadChoice) {

			var priceOfBread = breadPrices[breadChoice];
			console.log("priceOfBread", priceOfBread);
			SANDWICHMAKER.getPrice(priceOfBread);

		};

		SANDWICHMAKER.addBread = function(breadChoice) {
			var breadPick = breadChoice;
			console.log("bread choice: ", breadChoice );
			SANDWICHMAKER.addTopping(breadChoice);
		};
		
	return SANDWICHMAKER;

})(SANDWICHMAKER || {});
