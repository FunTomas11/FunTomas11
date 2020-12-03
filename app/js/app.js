

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

window.onscroll = function() {
	pos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;


	console.log(pos);
	
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

test();
$('html').hide();