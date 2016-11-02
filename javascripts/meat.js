var SANDWICHMAKER = (function (OLDSANDWICHMAKER) {
	var meatPrices = {
		"Turkey": 1.25,
		"Chicken": 1.25,
		"Meatless": 0.00


	};
		OLDSANDWICHMAKER.getMeatPrice = function(meatChoice) {
			var priceOfMeat = meatPrices[meatChoice];
			console.log("price of meat: ",  priceOfMeat );
			SANDWICHMAKER.getPrice(priceOfMeat);
		},

		OLDSANDWICHMAKER.addMeat = function (meatChoice) {

			var  meatPick = meatChoice ;
			console.log("meat choice: ", meatChoice );
			SANDWICHMAKER.addTopping(meatChoice);
		};
		
	return OLDSANDWICHMAKER;

})(SANDWICHMAKER || {});
