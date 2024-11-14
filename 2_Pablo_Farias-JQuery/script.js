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
	$('#listing > li .classB').addClass('highlighted'); //add styles to only the direct descendant of the listing ID

	//Selecting by Attributes
	$('input[required]').addClass('highlight') //selected by their attribute in the input tag, on html
	$('.Class #ID [required]').addClass('highlight') // you can select a class or ID assigned

	$('input[placeholder=Email]').addClass('highlight') //selected input, and then singled out the placeholder with Email
	$('input[placeholder*=Name]').addClass('highlight') //selected all input, with the Name placeholder


	//Traversing the DOM
});
