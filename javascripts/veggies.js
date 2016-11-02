var SANDWICHMAKER = (function (SANDWICHMAKER) {
	var veggiePrices = {
		"lettuce": 1.00,
		"olives": 1.25,
		"no-veggies": 0


	};
		SANDWICHMAKER.getVeggiePrice = function(veggieChoice) {
			var priceOfVeggie = veggiePrices[veggieChoice];
			console.log("price of Vegetable: ", priceOfVeggie );
			SANDWICHMAKER.getPrice(priceOfVeggie);
		},

		SANDWICHMAKER.addVeggies = function(veggieChoice) {
			var  veggiePick = veggieChoice ;
			console.log("veggie choice: ", veggieChoice );
			SANDWICHMAKER.addTopping(veggieChoice);
		};
	return SANDWICHMAKER;

})(SANDWICHMAKER || {});
