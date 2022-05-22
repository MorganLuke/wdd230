document.querySelector("#update").innerHTML = document.lastModified;

const date = new Date();
document.querySelector("#currentDate").innerHTML = date.getFullYear()

document.querySelector("#date").innerHTML = date.getDay();

function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;
