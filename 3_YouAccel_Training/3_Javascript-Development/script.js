/* Client Side VS Server Side

	Client Side - such as HTML,CSS(static) and Javascript(dynamic), interacts with Client Web Broswers
	Server Side - Nodejs, PHP , communicates with web servers


	Primitive way of outputting javascripts tasks
	document.write(5 + 3);
	window.alert(5 + 3) -pop-up


	--- Javascript Query Selector ---
	querySelector is a method available on the document object and any DOM element. (used instead of getElementbyId or classname etc)

	syntax: document.querySelector(selector);

		- Select by ID: 
		const element = document.querySelector('#myId'); 	// Selects element with id="myId"
		- Select by Class: 
		const element = document.querySelector('.myClass'); 	// Selects the first element with class="myClass"
		- Select by Tag Name: 
		const element = document.querySelector('[type="checkbox"]');	 // Selects the first <input> with type="checkbox"
		- Select by Attribute: 
		const element = document.querySelector('[type="checkbox"]');	 // Selects the first <input> with type="checkbox"
		- Select by Nested Structure: 
		const element = document.querySelector('.container .child > li'); 	// Selects the first element with class="child" inside an element with class="container"
		- Select Pseudo-classes: 
		const element = document.querySelector('li:first-child'); 	// Selects the first <li> in a list

		querySelectorAll - (To get all matching elements)
		- const allElements = document.querySelectorAll('.myClass'); 	// Returns a NodeList of all elements with class="myClass"

*/

window.addEventListener('load', function() {
    // Select the element and update the innerHTML directly
	let sumedEle = document.querySelector('.math').innerHTML = 7 + 9;
    console.log(`result = ${sumedEle}`);


	let addEle = document.querySelector('.math'); // Assign the selected element to varaible 'addEle'
	addEle.innerHTML = 6 + 3; // Update the innerHTML of the element
	console.log(`result = ${addEle.innerHTML}`);


	// Select the element and apply styling to it
	let mathElement = document.querySelector('.math');
    mathElement.style.color = 'blue';


	//Working varibales before getting DOM
	let vars = 'Above me is \'HTML and CSS manipulation\' and below me is \'Object manipulation\'';
	document.querySelector('.variab').innerHTML = vars;

	
	// manipulating objects
	let objCar = {
		name: 'Toyota',
		brand: 'Corolla',
		year: 2002,
		type: '4WD'
	}
	document.querySelector('.obj');

	let carName = document.querySelector('.obj');
	carName.innerHTML = objCar.name;

	let carBrand = document.querySelector('.obj');
	carBrand.innerHTML = objCar.brand;

	let vehicleMake = document.querySelector('.obj');
	vehicleMake.innerHTML = `Vehicle is a ${objCar.name} ${objCar.brand} ${objCar.year} model, <br> which is a ${objCar.type}`; //you can insert direct html elements, classes, attributes (e.g <br>, <div>, href='' etc)in the DOM maniopulation



	// More Math related ---
	let moreMath = document.querySelector('.moreMath');
	moreMath.innerHTML = Math.random(); //geerates random number

	moreMath.innerHTML = Math.min(100, 50, 60, 90, 124, 978); //selects the minimum number among them
	moreMath.innerHTML = Math.max(254, 36, 28, 79, 260); //selects the maximum number among them.
	moreMath.innerHTML = Math.floor(23.6) //rounds down the number to a 23 whole number
	moreMath.innerHTML = Math.ceil(23.6) //rounds up the number to a (24)

	

	// Manipulating Arrays
	let fruits = ['mango', 'apple', 'guava', 'pineapple', 'orange', 'lemon', 'pawpaw', 'banana'];	let veges = ['lettuse', 'tomatos', 'pepper']

	fruits.pop();
	fruits.push('grapes');
	fruits.shift();
	fruits.unshift('strawberry');

	fruits.splice(2, 2, 'watermelon');
	delete fruits[5];

	fruits.sort(); //sorts the array in alpphabetical order
	fruits.reverse(); //reserves the arrangements of fruits
	let combined = fruits.concat(veges); // this joins the fruits & veges array elements today

		/* outputing fruits in the array fruits */
	let randomFruits = document.querySelector('.arrays');
	randomFruits.innerHTML = fruits; 
	console.log(randomFruits)

		/* generating random array fruits*/
	let randomIndex = Math.floor(Math.random() * fruits.length);  //gets & floor the length of the fruit array
	randomFruits.innerHTML = fruits[randomIndex];	//attaches the fruits, with the random length
	console.log(randomFruits)



	// Condiitionals
});