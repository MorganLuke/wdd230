const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


// Business Cards
const URL = 'json/data.json';
const cards = document.querySelector('.cards');

async function getBusinesses() {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        //console.log(data);
        buildBusinessCards(data);
    }
    else {
        throw Error(response.statusText);
    }
}

function buildBusinessCards(data) {
    data.businesses.forEach(business => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p')
        let img = document.createElement('img');
                
        h2.innerHTML = `${business.name}`;
        p.innerHTML = `${business.address}`;
        p2.innerHTML = `${business.phone}`;
        p3.innerHTML = `${business.website}`;
        p4.innerHTML = `${business.membership}`;
                
        img.setAttribute('src', business.imageurl);
        img.setAttribute('alt', `${business.name} business logo`);
        img.setAttribute('loading', 'lazy');
                
        card.append(img);
        card.append(h2);
        card.append(p);
        card.append(p2);
        card.append(p3);
        card.append(p4);

        cards.append(card);
    });
}

getBusinesses();