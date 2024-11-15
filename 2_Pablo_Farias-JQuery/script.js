/* --- JQuery ---
	- World most used Javascript library
	- Cross-browser compatibility
	- Rich web applications

	General philosophy:
		Search -> Select -> Listen -> Load -> Animate
	

	JQAPI and JQUery Documentation - to access jquery API documentations
	
	Download JQuery - compressed or uncompressed or use CDN 
	 - compressed / uncompressed : <script src="./js/jquery-3.7.1.min.js"></script>
	 - CDN : <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

*/

$(document).ready(function(){

	//selecting by ID or Class 
	$('#container').html('<strong>Hello!</strong>');
    $('.p2').text('hey! i am under Hello');

	//Selecting multiple elements
	$('.class1, .class2, .class3').addClass('highlighted');//add CSS styles in highligted, on the two classes

	//selecting Descendants
	$('#listing li').addClass('highlighted1'); //add CSS styles to all li under the listing ID
	$('#listing > li .classB').addClass('highlighted'); //add styles to only the direct descendant of the listing ID which are li's with .class attribute. dont select any elements deeper in the hierarchy.

	//Selecting by Attributes
	$('input[required]').addClass('highlight') //selected by their attribute in the input tag, on html
	$('.Class #ID [required]').addClass('highlight') // you can select a class or ID assigned

	$('input[placeholder=Email]').addClass('highlight') //selected input, and then singled out the placeholder with Email
	$('input[placeholder*=Name]').addClass('highlight') //selected all input, with the Name placeholder


	//Traversing the DOM
	results = $('#animals').find('creature'); //this finds all the descendeant under animals
	results = $('#animals').children('creature'); //gives the direct descendant of animals

		//traversing using chaining -first(), last(), prev(), next()
	results = $('#animals').children().first().children('.creature').last(); //selects 'cats' | if .first() -it selects 'dogd'
	results = $('#animals').children().first().children().last().prev().prev(); //that is, step back 2 times and select the element it lands on. -selects 'Prairie' steps back twice and eventually selects 

	results = $('#animals').children().first().children('.creature').first().next(); //result: will initial land on dogs then move on to 'cat', which would be the finally selected elements

		// traversing through the parents
	let result = $('cat').parent(); //grabs the all parents of cat, from mammals -> to animals -> to body -> to html
	let results = $('cat').parents('.category'); // this specifys that it should particularly pick the parent with class attribute .category which is 'mammals'

	results = $('cat').closest('.category');  // picks the closest element to cat with the class .category(it could be the parent element or other elements)

	
	// Working with Events
});







/* 
jQuery: Simplifies event handling with syntax like 
		$(selector).click(function() {...});, which attaches an event listener in one line.
JavaScript: Uses addEventListener, which can be more verbose, like 
			document.querySelector(selector).addEventListener('click', function() {...});

		--- JQuery Philosophy ---
	$(document).ready(function(){
    // Search and Select
    $('#myButton').click(function(){
        // Listen
        $('#content').load('newContent.html', function() {
            // Load
            $('#message').text('New content loaded!');
            // Animate
            $('#message').fadeIn();
        });
    });
});
		Search -> Select -> Listen -> Load -> Animate
	Search: We search for the element with the ID #myButton.
	Select: We select the button and attach a .click() event listener.
	Listen: When the button is clicked, the function listens for this event and triggers an action.
	Load: The #content div loads new content from an external file, newContent.html.
	Animate: Once the content is loaded, the #message element is shown with a fade-in animation.
 */