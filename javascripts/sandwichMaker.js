var SANDWICHMAKER = (function (OLDSANDWICHMAKER) {
		var totalPrice = 0;
		var totalOrder = "";
	  	var outputPrice = document.getElementById('price_total');

		 
		OLDSANDWICHMAKER.getPrice = function(PriceofItem) {
			  totalPrice+= PriceofItem;
			  console.log("Price of  sandwich: ",totalPrice );
			  console.log("pricePrint",outputPrice );
			  outputPrice.innerHTML = totalPrice;
			  // return totalPrice;
			 
		};

		OLDSANDWICHMAKER.addTopping = function(NameOfItem) {
			totalOrder += ` ${NameOfItem}`;
			console.log("total Order",totalOrder);
			printOrder(totalOrder);
		};

		
		return 	OLDSANDWICHMAKER;
	
})(SANDWICHMAKER || {});

