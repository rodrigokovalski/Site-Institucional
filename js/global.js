window.onscroll = function() {stickyNavBar()};

var navbar = document.getElementById("menu");

function stickyNavBar() {
	if (window.pageYOffset >=10) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}