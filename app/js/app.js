import $ from 'jquery'; 
window.jQuery = $; 
window.$ = $ // import module example (npm i -D jquery)

window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);

});

function toggleMenu() {
	const menuToggle = document.querySelector('.toggle');
	const menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}

function test()
{
	let buttons = document.querySelectorAll('header > ul > li > a');
	for (let i = 0; i < 6; i++)
	{
		buttons[i].style.color = "red";
		console.log('For, i=' + i);
	}

}


// $('html').hide();	