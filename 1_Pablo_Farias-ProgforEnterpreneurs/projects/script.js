/*--- Load Event ---
	- window: give access to high level stuff going on on the web [page or window] (e.g redirect user to another url, open new tabs etc)
	- document: represents the DOM (that is access the html elements on the page. Listens and Handles events)
 
	function search() {
	 	console.log('i am searching');
	}
	search.addEventListener('click', search)  - another way to call the function to handle
*/


/* JSON (While JSON syntax looks very similar to JavaScript objects, JSON is purely a data format and,
		 lacks the methods and functions available in JavaScript objects. JSON data is static and doesn’t
		  support functions or methods.) */
let users = [
	{
		name: 'Lucy',
		gender: 'F',
		hobby: 'pets',
		avatar: '/img/human-img1.jpg'
	},
	{
		name: 'Betty',
		gender: 'F',
		hobby: ['pets', 'travel'],
		avatar: '/img/human-img1.jpg'
	},
	{
		name: 'Ronald',
		gender: 'M',
		hobby: 'music',
		avatar: '/img/human-img1.jpg'
	},
	{
		name: 'Chris',
		gender: 'M',
		hobby: 'sports',
		avatar: '/img/human-img1.jpg'
	},
	{
		name: 'Saccy',
		gender: 'F',
		hobby: {
			pet: 'kid',
			travel: 'new york'
		},
		avatar: '/img/human-img1.jpg'
	}
]


window.addEventListener('load', function () {
	console.log('The page has been loaded!'); //loads the entire page

	
	// Modify the DOM elements once fully loaded
	let genders = document.getElementsByClassName('gends')[0];
	genders.innerHTML = 'Genders available';

	let hobbies = document.getElementsByClassName('hby')[0];
	hobbies.innerHTML = 'Hobbies <div>The below should not contain more than three hobbies</div>';

	
	// Function to log the user input
	function search() {
		let hobbyField = document.getElementById('hobby'); 
		let hobbyInput = hobbyField.value;
		console.log(hobbyInput);

		let genders = document.getElementById('gender');
		let selectedGender = genders.options[genders.selectedIndex].value; //grab value selected in the gender options and assign it to genderfield
		console.log(selectedGender);

		let resultHTML = '';
		for(let i = 0; i < users.length;  i++){

			if(selectedGender == 'Male' || selectedGender == users[i].gender){ //checks gender

				if(hobbyInput == '' || hobbyInput == users[i].hobby){
					resultHTML += `<div class="person-row">\
							<img src="${users[i].avatar}" />
        					<div class="person-info">\
            				<div>` + users[i].name +`</div>\
							<div>` + users[i].hobby +`</div>\
							</div>
							<button>Add as friend</button>
							</div>`;
				}
			}
		}
		document.getElementById('result').innerHTML = resultHTML; // Append the resultHTML to an element on the page, such as a div with id="result"
	}


	// Add click event to the search button
	let searchBtn = document.getElementById('searchBtn');
	searchBtn.addEventListener('click', search);
})


