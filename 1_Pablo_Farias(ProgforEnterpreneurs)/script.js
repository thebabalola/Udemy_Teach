// --- Variables & Operators ---
var hours = 10;
var seconds = hours * 3600;
console.log(seconds);

let a = 15;
let b = 24;
result = a * b;
console.log(result);


var birthYear = 1950; //birth year of the person
var currentYear = 2015; //current year for age calculation

let age = currentYear - birthYear; 
console.log(age);


// --- Strings ---
var title = "Miss";
var firstName = "Maria";
var lastName = "Smith";

let fullName = title + " " + firstName + " " + lastName;  //Create a variable called fullName by joining: title, firstName and lastName.
console.log(fullName);



// --- Functions ---
function sum () {
	let a = 15;
	let b = 24;
	return result = a * b;
}
sum(); //function call

let d = 15;
let c = sum() + d; //function added into a variable
console.log(c);	


/*  -- Nested Function ---
Write a function called calculateTotal that takes an initial price as its argument. 
Inside this function, create a nested function called applyDiscount that applies a discount percentage to the price.

	1- The calculateTotal function should take one argument: initialPrice.
	2-Inside calculateTotal, define a nested function applyDiscount that:
		Takes a discount percentage as an argument (e.g., 10 for 10%).
		Calculates the price after the discount is applied.
	3- calculateTotal should return the final discounted price by calling applyDiscount. 
*/
function calculateTotal (initialPrice){

	function applyDiscount (discountPercent){
		let discountedTotal = (initialPrice * discountPercent) / 100;
		return discountedTotal;
	}

	return initialPrice - applyDiscount(10); // gets calculatedTotal by subtracting applyDiscount func
}

console.log(calculateTotal(350));


// Task 2
function calculateFinalPrice(basePrice){

	function applyDiscounts(discount){
		let theDiscount = (basePrice * discount) / 100;
		return theDiscount;
	}

	function applyTax(tax){
		let taxApplied = (basePrice * tax) / 100
		return taxApplied;
	}

	let finalPrice = (basePrice - applyDiscounts(8)) + applyTax(3);
	return finalPrice;
	// return finalPrice = (basePrice - applyDiscounts(8)) + applyTax(3);
}

console.log(calculateFinalPrice(170));




// ---- If, if-else, Switch & Boolean literals ---- //
let distance = 70;

if (distance > 100){
	console.log('too far');
}
else if (distance < 50){
	console.log('distance is close');
}
else {console.log('distance is moderate')}


let dayNumber = 2;
let day;

switch (dayNumber) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    default:
        day = "Invalid day number. Please enter a number between 1 and 7.";
}

console.log(day);


/* Task */
function check_eligibility (age, postalCode){
    if (age > 50 && postalCode === 1234){
        return true;
    }
    else {
        return false;
    }
}
console.log(check_eligibility(59, 2468));



/* While, For Loop & Arrays */
