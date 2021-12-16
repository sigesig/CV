const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu_mobile = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'rgba(31, 30, 30 , 0.24)';
	}
});

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	menu_mobile.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		if(window.innerWidth < 1200){
			hamburger.classList.toggle('active');
			menu_mobile.classList.toggle('active');
		}
	});
});



// Helper functions
function detectBrowser() {
	if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 ) {
		return 'Opera';
	} else if(navigator.userAgent.indexOf("Chrome") !== -1 ) {
		return 'Chrome';
	} else if(navigator.userAgent.indexOf("Safari") !== -1) {
		return 'Safari';
	} else if(navigator.userAgent.indexOf("Firefox") !== -1 ){
		return 'Firefox';
	} else {
		return 'Unknown';
	}
}

// kick off the polyfill!
//import smoothscroll from 'smoothscroll-polyfill';
//smoothscroll.polyfill();
