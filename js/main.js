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

function outputsize() {
	document.getElementById("hero-content").style.top = document.getElementById("header-id").offsetHeight + "px"
}
outputsize()

new ResizeObserver(outputsize).observe(document.getElementById("header-id"))



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

// Timeline functionality
document.addEventListener('DOMContentLoaded', function() {
    const timelineInputs = document.querySelectorAll('input[name="timeline-dot"]');
    
    timelineInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.checked) {
                // Remove active class from all descriptions
                const descriptions = document.querySelectorAll('#timeline-descriptions-wrapper p');
                descriptions.forEach(desc => desc.style.display = 'none');
                
                // Show the selected description
                const selectedDescription = document.querySelector(`#timeline-descriptions-wrapper p[data-description="${this.dataset.description}"]`);
                if (selectedDescription) {
                    selectedDescription.style.display = 'block';
                }
            }
        });
    });
});

// kick off the polyfill!
//import smoothscroll from 'smoothscroll-polyfill';
//smoothscroll.polyfill();
