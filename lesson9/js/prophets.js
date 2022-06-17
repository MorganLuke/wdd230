// teacher example
const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        //console.log(data);
        buildProphetCards(data);
    }
    else {
        throw Error(response.statusText);
    }
}

function buildProphetCards(data) {
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');
                
        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        p2.innerHTML = `Place of Birth: ${prophet.birthplace}`;
                
        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
        img.setAttribute('loading', 'lazy');
                
        card.append(h2);
        card.append(p);
        card.append(p2);
        card.append(img);
                
        cards.append(card);
    });
}

getProphets();


// book example
// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
// const cards = document.querySelector('.cards');


// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     // console.table(jsonObject); 
//     const prophets = jsonObject['prophets'];
//     prophets.forEach(displayProphets);
//   });


//   function displayProphets(prophet) {
//   let card = document.createElement('section');
//   let h2 = document.createElement('h2');
//   let p = document.createElement('p');
//   let p2 = document.createElement('p');
//   let img = document.createElement('img');

//   h2.textContent = `${prophet.name} ${prophet.lastname}`;
//   p.textContent = `Date of Birth: ${prophet.birthdate}`;
//   p2.textContent = `Place of Birth: ${prophet.birthplace}`;

//   img.setAttribute('src', prophet.imageurl);
//   img.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
//   img.setAttribute('loading', 'lazy');

//   card.append(h2);
//   card.append(p);
//   card.append(p2);
//   card.append(img);

//   cards.append(card);
// };

