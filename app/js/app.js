import $ from 'jquery'; 
window.jQuery = $; 
window.$ = $; // import module example (npm i -D jquery)

$(document).on('scroll', function() {

	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);

	let sections = document.querySelectorAll('section');
	let buttons = document.querySelectorAll('header > ul > li > a');
	let pos = $(this).scrollTop() + $(this).scrollTop()*0.15;

	

	for(let i = 1; i < sections.length; i++)
	{	
		if ( pos >= $(sections[i]).position().top)	{
				
			$(buttons[i]).css('color', '#2196f3');
		}
	
		if ( $(this).scrollTop() >= $(sections[i]).position().top + $(sections[i]).height() || pos < $(sections[i]).position().top )
			(!header.classList.contains('sticky')) ? $(buttons[i]).css('color', 'white') : $(buttons[i]).css('color', '#111'); // menu buttons color change
		
	}
	


});

window.toggleMenu = () => {
	const menuToggle = document.querySelector('.toggle');
	const menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}
