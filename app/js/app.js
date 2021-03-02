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
		if ( pos >= $(sections[i]).position().top)				
			buttons[i].classList.add('button_active');
		
		if ( $(this).scrollTop() >= $(sections[i]).position().top + $(sections[i]).height() || pos < $(sections[i]).position().top )
			buttons[i].classList.remove('button_active');
	}
	
});

window.toggleMenu = () => {
	const menuToggle = document.querySelector('.toggle');
	const menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}
