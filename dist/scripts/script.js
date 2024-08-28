//General functions.

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        history.replaceState(null, document.title, window.location.pathname);
    }
});

//Navigation bar functions.

window.addEventListener("scroll", function () {
	const navbar = this.document.getElementById("navbar-top");
	const expandNavBar = 10;
	const defaultPd = "py-5";
	const narrowPd = "py-2";
	
	if (window.innerWidth > 768) {
		if (window.scrollY > expandNavBar) {
			if (navbar.classList.contains(defaultPd)) {
				navbar.classList.remove(defaultPd);
				navbar.classList.add(narrowPd);
			}
		} else {
			if (navbar.classList.contains(narrowPd)) {
				navbar.classList.remove(narrowPd);
				navbar.classList.add(defaultPd);
			}
		}
	} else {
		if (navbar.classList.contains(narrowPd)) {
			navbar.classList.remove(narrowPd);
			navbar.classList.add(defaultPd);
		}
	}
});

document.getElementById("expand-button").addEventListener("click", function () {
	const accContent = document.getElementById("accordion-content");
	const hideAcc = "max-h-0";

	if (accContent.classList.contains(hideAcc)) {
		accContent.style.maxHeight = accContent.scrollHeight + "px"; // Expand to content height
		accContent.classList.remove(hideAcc);
	} else {
		accContent.style.maxHeight = "0"; // Collapse the content
		accContent.classList.add(hideAcc);
	}
});

window.addEventListener("resize", function () {
	const navbar = document.getElementById("navbar-top");
	const defaultPd = "py-5";
	const narrowPd = "py-2";

	const accContent = document.getElementById("accordion-content");
	const hideAcc = "max-h-0";

	if (this.window.innerWidth < 768) {
		if (navbar.classList.contains(narrowPd)) {
			navbar.classList.remove(narrowPd);
			navbar.classList.add(defaultPd);
			if (!accContent.classList.contains(hideAcc)) {
				accContent.style.maxHeight = "0";
				accContent.classList.add(hideAcc);
			}
		}
	} else {
		if (!navbar.classList.contains(narrowPd)) {
			navbar.classList.add(narrowPd);
			navbar.classList.remove(defaultPd);
		}
	}
});
