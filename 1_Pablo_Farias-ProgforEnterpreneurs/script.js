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



// ---- Undefined ----
let dogName;
console.log(dogName); //outputs undefined

let catName = '';
console.log(catName); 


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


/* Task 3*/
function check_eligibility (age, postalCode){
    if (age > 50 && postalCode === 1234){
        return true;
    }
    else {
        return false;
    }
}
console.log(check_eligibility(59, 2468));



/* --- While, For Loop & Arrays ---- */
let num = 1
while (num < 10) {
	console.log(num)
	num++;
}
console.log('i have finished iterating');


let x;
for (x = 0; x <= 15; x++) {
	console.log(x);
}
console.log('done interating the for loop');



	/* --- break and continue --- */
let digit = 1;

while (digit <= 35) {
	digit++;

	if (digit === 30){
		break;  //Outrightly exits the loop once digit have gotten to 30
	}

	console.log(digit);
}
console.log('The end of Break statement');


let digi = 1;

while (digi <= 50) {
	digi++;

	if (digi >= 20 && digi <= 35) {
		continue; //Skips numbers within 50-60 and continue to the next iteration
	}
	console.log(digi);
}
console.log('This ends continue statement')



/* 
----- Arrays ---- 
 An ordered list of elements of the same type or different types
*/

let arr = [10, 100, 'asante', true, 0.5];	//way 1- of declaring array
let newArr = [15, false, 75.6, 'gracias', 98];	//way 2 - of declaring array
let arr2 = 	newArr

console.log(arr);
arr2[3];
arr2[1] = true, arr2[3] = 'kabo';
console.log(arr2);
console.log('End of first array lessons')

	/* Array methods - shift(), unshift(), push(), pop(), splice() */
	arr.shift();
	arr.push(0.8,'just entered');
	arr.splice(1,2, 'removed asante&true '); 
	console.log(arr);
	console.log('testing array methods')

	  /*The splice() method is powerful for adding, removing, or replacing elements in an array
	  	syntax: array.splice(start, deleteCount, item1, item2, ...);
			start: The index at which to start changing the array.
			deleteCount: The number of elements to remove from the array (optional).
			item1, item2, ...: The elements to add to the array at the start index (optional).
	  */
			let colors = ["red", "green", "blue", "yellow", "Violet"];
			colors.splice(1, 2); // Starts at index 1 and removes 2 elements
			colors.splice(1, 0, "green", "blue"); // Starts at index 1, removes 0 elements, adds "green" and "blue"
			colors.splice(1, 2, "purple"); // Starts at index 1, removes 2 elements, adds "purple"
			console.log(colors);
			console.log('end of array splice')

	/* Iterating through Array */
			let nums = [58, 67, 13, 89, 38]
			let i = 0;

			while (i < nums.length) {
				nums[i]++; //iccreases the nums array elements by 1
				i++; //i increments
			}
			console.log(nums)

			for (i = 0; i < nums.length; i++) {
				console.log(nums[i]);	//prints the array element list
			}

			console.log('iterating through arrays section')

	/* Multidimentional arrays */
			multiArr = [[2, 9, 8], [3, 0, 7], [4, 1, 5]];
			twoDimArr = [
				['a', 'd', 'e', 'g'],
				['z', 'w', 'y', 'q'],
				[['s', 't'], ['o', 'p']],
			];

			let disVal = multiArr[1][0]; //accesses array 2, element 0
			console.log(multiArr[1][0]); //should output = 3.

			twoDimArr[1][3] = 'm' // changes q to 'm'
			console.log(twoDimArr[2][0][1]) //should output = t;




/* Task 4*/
let prices = [10, 15, 25, 8, 4, 55, 99, 11, 15, 25, 5, 4, 65, 5, 10, 15, 7, 8, 4, 9, 100];

let y = 0;
while (y < prices.length){	
	prices[y] = prices[y] * 2;
	// console.log(prices[y] * 2);  - outputs in colunm, making them stack on themselves
	y++;
}
console.log(prices); //Arranges it in an array like orders - row [... ..]




/* ----- Objects ----- */
let obj = {
	name: 'taiwo',
	age: '21',
	'occupation': 'FrontEnd Developer',

	greetings(){
		return'Welcome to objects';
	}
};
console.log(obj);
console.log(obj['occupation']);
console.log(obj.greetings());



/* ---- JSON --- */
//a data exchange protocol, to communicate between two diffrent servers (API)

let user = {
	name: 'Peter',
	score: 100,
	country: 'Chile',
	pets: ['Dog', 'Cat', 'Goat'],
	profile: {  
		type: 'private',
		account: 'premium'
	}  //profile is an object inside of the user object
};

console.log(user);
console.log(user.pets[1]);
console.log(user.profile.type);



/* TAsk 5 */
let users = [
    {username: 'asdfasdf', credits: 150},
    {username: 'asasdfdf', credits: 510},
    {username: 'asdasdffasdf', credits: 11},
    {username: 'weewrwe', credits: 0},
    {username: 'werwer', credits: 120},
    {username: 'sdfsdf', credits: 130},
    {username: 'dfgdfg', credits: 0},
    {username: 'dfgdfg', credits: 510},
    {username: '4564564', credits: 110},
];

for (let i = 0; i < users.length; i++) {
    users[i].credits += 10; // Add 10 to the credits of each user
}

console.log(users);


/*
let users = [
    {username: 'asdfasdf', credits: 150},
    {username: 'asasdfdf', credits: 510},
    {username: 'asdasdffasdf', credits: 11},
    {username: 'weewrwe', credits: 0},
    {username: 'werwer', credits: 120},
    {username: 'sdfsdf', credits: 130},
    {username: 'dfgdfg', credits: 0},
    {username: 'dfgdfg', credits: 510},
    {username: '4564564', credits: 110},
];

let itr;

for(itr = 0; itr < users.length; itr++) {
	users[itr].credits = users[itr].credits + 10; //adds 10 to every users credit property of the objects in the array
}
 console.log(users);
 */