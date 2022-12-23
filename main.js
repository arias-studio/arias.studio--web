window.requestAnimationFrame(() => {

	// Memorize Scroll Position Across Page Loads
	let sidebar = document.querySelector(".sidebar");
	let top = sessionStorage.getItem("sidebar-scroll");
	if (top !== null) {
		sidebar.scrollTop = parseInt(top, 10);
	}
	window.addEventListener("beforeunload", () => {
		sessionStorage.setItem("sidebar-scroll", sidebar.scrollTop);
	});

	// Initialize Quicklink
	quicklink.listen();

	// Mark Active Page in Navigation
	const activePage = window.location.pathname;
	if (activePage !== "") {
		const navLinks = document.querySelectorAll('nav a').forEach(link => {
			if (link.href === `${activePage}` || link.href === `${window.location.origin}${activePage}`) {
				link.classList.add('active');
			}
		});
	}

});