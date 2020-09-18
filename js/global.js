window.onscroll = function() {stickyNavBar()};

var navbar = document.getElementById("menu");

function stickyNavBar() {
	if (window.pageYOffset >=10) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

function openMenu(){
	var navbar = document.querySelector("#navbar");
	navbar.style.display = "block";
	var closeButton = document.querySelector(".close-toggle");
	closeButton.style.display = "block";
}

function closeMenu(){
	var navbar = document.querySelector("#navbar");
	navbar.style.display = "none";
	var closeButton = document.querySelector(".close-toggle");
	closeButton.style.display = "none";
}