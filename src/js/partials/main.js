$(document).ready(function() {

})


/* ------------------headerBurger--------------------headerBurger----------------------------- */
const headerBurger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const menuMobile = document.querySelector('.menu-mobile');

headerBurger.addEventListener("click", function(e) {
	headerBurger.classList.toggle('active')
	body.classList.toggle('active')
	menuMobile.classList.toggle('active')
});


/* ------------ScrollTrigger---------------------ScrollTrigger-----------------------------------ScrollTrigger------------------- */
const tl = gsap.timeline();

tl.fromTo('.sec1__body', 1,{opacity: '1',}, {opacity: '0'}, 0)

ScrollTrigger.create({
	animation: tl,
	trigger: '.sec1__body',
	start: '0 0',
	end: 'center',
	scrub: true,
	pin: true,
})

const tl1 = gsap.timeline();

const sec3 = document.querySelector('.sec3');
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');

const windowH = window.innerHeight;
const sec3H = sec3.offsetHeight;

const dif = sec3H - windowH;

ScrollTrigger.create({
	animation: tl1,
	trigger: '.sec3__images',
	start: '-80px',
	endTrigger : "#Manufacturing",
	end: 'bottom bottom',
	scrub: true,
	pin: true,
})


/* ----------------------Прокрутка при клике--------------- */
$('.click').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 700,
		easing: "linear"
	});

	return false;
});


$(document).ready(function() {
	$('.remove-click').click(function(event) {
		$('.header__burger, body, .menu-mobile').removeClass('active')
	});
})

