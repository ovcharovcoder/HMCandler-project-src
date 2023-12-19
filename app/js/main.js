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
		640: {
			slidesPerView: 3,
		},
	},
});

// Accordeon list for section Questions
const accordeon = document.querySelector('.accordeon');
const accordeonQuestions = accordeon.querySelectorAll('.accordeon__question');

accordeonQuestions.forEach.call(accordeonQuestions, function (accordeonQuestion) {
	accordeonQuestion.addEventListener('click', function () {

		const currentText = accordeonQuestion.parentElement.querySelector('.accordeon__answer');

		accordeonQuestion.classList.toggle('accordeon__question--active');
		currentText.classList.toggle('accordeon__answer--visible');

		if (currentText.classList.contains('accordeon__answer--visible')) {
			currentText.style.maxHeight = currentText.scrollHeight + 'px'
		} else {
			currentText.style.maxHeight = null
		}
	});
});

