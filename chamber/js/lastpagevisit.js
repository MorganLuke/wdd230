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
