var SANDWICHMAKER = (function (OLDSANDWICH) {
	var condimentPrices = {
		"Mustard": 0.25,
		"Chipotle": 0.25,
		"no condiments": 0.00


	};
		OLDSANDWICH.getCondimentsPrice = function(condimentChoice) {
			var priceOfCondiments= condimentPrices[condimentChoice];
			console.log('Price of Condiments: ', priceOfCondiments );
			SANDWICHMAKER.getPrice(priceOfCondiments);
		},

		OLDSANDWICH.addCondiments = function(condimentChoice) {
			var  condimentPick = condimentChoice ;
			console.log("condiment pick: ", condimentPick );
			SANDWICHMAKER.addTopping(condimentChoice);
		};
	return OLDSANDWICH;

})(SANDWICHMAKER || {});
console.log("",SANDWICHMAKER );