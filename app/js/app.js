import $ from 'jquery'; 
window.jQuery = $; 
window.$ = $ // import module example (npm i -D jquery)

window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);

});

window.toggleMenu = () => {
	const menuToggle = document.querySelector('.toggle');
	const menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}




// $('html').hide();	