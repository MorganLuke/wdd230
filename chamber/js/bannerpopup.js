// banner popup
let dayOfWeek = date.getDay();
// if date lands on monday or tuesday then the banner is displayed
if (dayOfWeek == 1 || dayOfWeek == 2) {document.querySelector('#banner-popup').style.display = 'flex';}
else {document.querySelector('#banner-popup').style.display = 'none';};

const close = document.querySelector("#close");
const banner = document.querySelector("#banner-popup");

close.addEventListener("click", () => {
	banner.style.display = "none";
});