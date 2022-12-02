/* --------------------- QuickLink Init --------------------- */
window.addEventListener('load', () => {
	quicklink.listen();
});
/* ------- Memorize Scroll Position Across Page Loads ------- */
// let sidebar = document.querySelector(".sidebar");
// let top = localStorage.getItem("sidebar-scroll");
// if (top !== null) {
// 	sidebar.scrollTop = parseInt(top, 10);
// }
// window.addEventListener("beforeunload", () => {
// 	localStorage.setItem("sidebar-scroll", sidebar.scrollTop);
// });