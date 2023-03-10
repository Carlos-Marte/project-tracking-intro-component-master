const btnBurgerMenu = document.querySelector('#btn-burger');

btnBurgerMenu.addEventListener('click', () => {
	const navLinks = document.querySelector('#nav-links');
	const menuStatus = btnBurgerMenu.dataset.status;
	
	if(menuStatus === 'false') {
		navLinks.classList.toggle('nav__links--open');
		btnBurgerMenu.setAttribute('src', './images/icon-close.svg');
		return btnBurgerMenu.dataset.status = true;
	}

	navLinks.classList.toggle('nav__links--open');
	btnBurgerMenu.setAttribute('src', './images/icon-hamburger.svg');
	return btnBurgerMenu.dataset.status = false;
});