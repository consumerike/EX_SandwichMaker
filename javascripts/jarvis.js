// document.getElementById('catchall').addEventListener("click", Diagnosis);


//Determing the event target:
function Diagnosis (event) {

	console.log("event target", event.target.value);
}

//handling the bread selection:
function handleBread (event) {
	// var breadchoice = event.target.value;
	SANDWICHMAKER.getBreadPrice(event.target.value);
	SANDWICHMAKER.addBread(event.target.value);
}

//handling of the cheese selection:
function handleCheese (event) {
	SANDWICHMAKER.getCheesePrice(event.target.value);
	SANDWICHMAKER.addCheese(event.target.value);
}

//handing of the condiment selection:
function handleCondiments (event) {
	SANDWICHMAKER.getCondimentsPrice(event.target.value);
	SANDWICHMAKER.addCondiments(event.target.value);
}

function handleMeat (event) {
	SANDWICHMAKER.getMeatPrice(event.target.value);
	SANDWICHMAKER.addMeat(event.target.value);
}

function handleVeggies (event) {
	SANDWICHMAKER.getVeggiePrice(event.target.value);
	SANDWICHMAKER.addVeggies(event.target.value);
}

function printOrder(totalOrder) {
	var order = document.getElementById('order_total');
	order.innerHTML = `${totalOrder}: `;
	printPrice(totalOrder);
}

function printPrice(totalPrice) {
	var order = document.getElementById('price_total')
	
	order.innerHTML += totalPrice;
	
}

//element ID and event listener for bread choice
var breadPick = document.getElementById('bread');
breadPick.addEventListener("change", handleBread);
// breadPick.addEventListener("change", function (event) {
// 	 SANDWICHMAKER.addBread(event.target.value);
// 	 console.log("event", event.target );
// 	});

//element ID and event listener for cheese choice
var cheesePick = document.getElementById('cheese');
cheesePick.addEventListener("change", handleCheese);

//element ID and event listener for condiment choices:
var condimentPick = document.getElementById('condiments');
condimentPick.addEventListener("change", handleCondiments);

//element ID and event listener for meat choices:
var meatPick = document.getElementById('meat');
meatPick.addEventListener("change", handleMeat);

//element ID and event listener for vegetable choices:
var meatPick = document.getElementById('veggies');
meatPick.addEventListener("change", handleVeggies);




