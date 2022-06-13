// last modified date
document.querySelector("#update").innerHTML = document.lastModified;

// copy year
const date = new Date();
document.querySelector("#currentDate").innerHTML = date.getFullYear()

// todays date
document.querySelector("#date").innerHTML = date.toLocaleString('default', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});

// hamburger button
function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;


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



// days since last visitor
const daysDisplay = document.querySelector(".days");
const today = Date.now();
const oneDay = 24 * 60 * 60 * 1000

// Testing script
// var myDate = "08-06-2022";
// myDate = myDate.split("-");
// var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
// const lastVisit = newDate.getTime()


// get the stored value in localStorage
let lastVisit = Number(window.localStorage.getItem("last-visit"));

if (lastVisit !== 0) {
	daysDisplay.textContent = Math.round(Math.abs((today - lastVisit) / oneDay))
    localStorage.setItem("last-visit", today);
    // daysDisplay.textContent = 'Orange';
} else {
    localStorage.setItem("last-visit", today);
    daysDisplay.textContent = 'This is the first visit!';
}








