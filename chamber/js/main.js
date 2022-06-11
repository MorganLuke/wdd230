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



// lazy load
let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: .5,
    rootMargin: "0px 0px 75px 0px"
}

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
  observer.observe(img);
  });
} 
else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}


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








