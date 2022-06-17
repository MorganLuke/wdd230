const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });




function displayProphets(prophet) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let img = document.createElement('img')

  h2.innerhtml = `${prophet.name} + ' ' + ${prophet.lastname}`;
  p.innerhtml = `Date of Birth: ${prophet.birthdate}`;
  p2.innerhtml = `Place of Birth: ${prophet.birthplace}`;

  img.setAttribute('src', prophet.imageurl);
  img.setAttribute('alt', `Portait of  + ${prophet.name} + ' ' + ${prophet.lastname} - ${prophet.ordrer}th Latter-day President`);
  img.setAttribute('loading', 'lazy');

  card.append(h2);
  card.append(p);
  card.append(p);
  card.append(img);

  document.querySelector('div.cards').appendChild(card);
}

