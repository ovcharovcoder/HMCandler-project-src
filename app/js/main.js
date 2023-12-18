// Open mobile menu
const menuBtn = document.querySelector('.header__menu-btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('menu--open');
})

// Swiper slider
const swiperOne = new Swiper('.feedback__slider', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},
});

const swiperTwo = new Swiper('.certificates__slider', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,

	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {
		360: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		481: {
			slidesPerView: 3,
		},
	},
});
