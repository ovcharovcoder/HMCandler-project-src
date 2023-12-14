// Open mobile menu
const menuBtn = document.querySelector('.header__menu-btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('menu--open');
})
