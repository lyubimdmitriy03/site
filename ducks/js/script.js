// navigation >768
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('ul a');

function indicator(e) {
	marker.style.left = e.offsetLeft + "px";
	marker.style.width = e.offsetWidth + "px";
	marker.style.height = '2px';
	marker.style.transition = '0.5s';
}

item.forEach(link => {
	link.addEventListener('mousemove', (e) => {
		indicator(e.target);
	});
	link.addEventListener('mouseout', function () {
		marker.style.height = '0';
		marker.style.transition = '0.5s';
	})

});

// navigation <768
var marker_2 = document.querySelector('#marker_2');

function indicator_2(e) {
	marker_2.style.top = e.offsetTop + "px";
	marker_2.style.width = e.offsetWidth + "px";
	marker_2.style.height = '36px';
	marker_2.style.transition = '0.5s';
}

item.forEach(link => {
	link.addEventListener('mousemove', (e) => {
		indicator_2(e.target);
	});
	link.addEventListener('mouseout', function () {
		marker_2.style.height = '0';
		marker_2.style.transition = '0.5s';
	})
});

// hamburger
var hamburger = document.querySelector('#hamburger')
var navbar = document.querySelector('#nav')
hamburger.addEventListener('click', function () {
	navbar.classList.toggle('active')
	hamburger.classList.toggle('open')
});

// validation
function validation() {
	var email = document.getElementById('email');
	var label = document.getElementById('label');
	var emailValue = email.value;
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (emailValue.match(pattern)) {
		email.style.borderBottom = '3px solid #00ff00';
		label.style.backgroundColor = '#00ff00';
	}
	else {
		email.style.borderBottom = '3px solid #ff0000';
		label.style.backgroundColor = '#ff0000';
		
	}

	if (emailValue =='') {
		email.style.borderBottom = '3px solid #d68c6f';
		label.style.backgroundColor = '#d68c6f';
	}
}
