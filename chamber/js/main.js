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
if (dayOfWeek == 1 || dayOfWeek == 2) {document.querySelector('#banner-popup').style.display = 'block';}
else {document.querySelector('#banner-popup').style.display = 'none';};
