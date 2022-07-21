// calculates and sets the days of the week for the 3 day forcast
const date = new Date();
const today = new Date();
document.querySelector("#today").innerHTML = date.toLocaleString('default', {weekday: 'long'});

date.setDate(today.getDate() + 1);
document.querySelector('#dayTwo').innerHTML = date.toLocaleString('default', {weekday: 'long'});

date.setDate(today.getDate() + 2);
document.querySelector('#dayThree').innerHTML = date.toLocaleString('default', {weekday: 'long'});


// select HTML elements in the document
const todayIcon = document.querySelector('#todayIcon');
const todayTemp = document.querySelector('#todayTemp');
const todayCondition = document.querySelector('#todayCondition');
const todayHumidity = document.querySelector('#todayHumidity');

const dayTwoIcon = document.querySelector('#dayTwoIcon');
const dayTwoTemp = document.querySelector('#dayTwoTemp');
const dayTwoCondition = document.querySelector('#dayTwoCondition');
const dayTwoHumidity = document.querySelector('#dayTwoHumidity');

const dayThreeIcon = document.querySelector('#dayThreeIcon');
const dayThreeTemp = document.querySelector('#dayThreeTemp');
const dayThreeCondition = document.querySelector('#dayThreeCondition');
const dayThreeHumidity = document.querySelector('#dayThreeHumidity');

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.983120&lon=-77.095413&units=imperial&appid=78ea36f22f23c953dc7938bb10ac87bc';

// fetches the data from api and calls displayResults function
async function apiFetch(apiURL) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

// function that displays API results
function  displayResults(weatherData) {
    // today weather
    todayTemp.innerHTML = `<strong>${weatherData.daily[0].temp.max.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
    const desc = weatherData.daily[0].weather[0].description;
    
    todayIcon.setAttribute('src', iconsrc);
    todayIcon.setAttribute('alt', desc);

    // Sets the first letter in each word to uppercase
    const words = desc.split(' ');
    todayCondition.textContent = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');

    todayHumidity.innerHTML = weatherData.daily[0].humidity;

    // changes the temperature text color based on the current temperature
    if (weatherData.daily[0].temp.max > 70 && weatherData.daily[0].temp.max < 85)
        document.getElementById('temp1').style.color = '#FFA500';
    else if (weatherData.daily[0].temp.max >= 85)
        document.getElementById('temp1').style.color = 'red';
    else
        document.getElementById('temp1').style.color = 'blue';


    // day two weather
    dayTwoTemp.innerHTML = `<strong>${weatherData.daily[1].temp.max.toFixed(0)}</strong>`;
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    const desc2 = weatherData.daily[1].weather[0].description;
    
    dayTwoIcon.setAttribute('src', iconsrc2);
    dayTwoIcon.setAttribute('alt', desc2);

    // Sets the first letter in each word to uppercase
    const words2 = desc2.split(' ');
    dayTwoCondition.textContent = words2.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');

    dayTwoHumidity.innerHTML = weatherData.daily[1].humidity;

    // changes the temperature text color based on the current temperature
    if (weatherData.daily[1].temp.max > 70 && weatherData.daily[1].temp.max < 85)
        document.getElementById('temp2').style.color = '#FFA500';
    else if (weatherData.daily[1].temp.max >= 85)
        document.getElementById('temp2').style.color = 'red';
    else
        document.getElementById('temp2').style.color = 'blue';


    // day three weather
    dayThreeTemp.innerHTML = `<strong>${weatherData.daily[2].temp.max.toFixed(0)}</strong>`;
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    const desc3 = weatherData.daily[2].weather[0].description;
    
    dayThreeIcon.setAttribute('src', iconsrc3);
    dayThreeIcon.setAttribute('alt', desc3);

    // Sets the first letter in each word to uppercase
    const words3 = desc3.split(' ');
    dayThreeCondition.textContent = words3.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');

    dayThreeHumidity.innerHTML = weatherData.daily[2].humidity;

    // changes the temperature text color based on the current temperature
    if (weatherData.daily[2].temp.max > 70 && weatherData.daily[2].temp.max < 85)
        document.getElementById('temp3').style.color = '#FFA500';
    else if (weatherData.daily[2].temp.max >= 85)
        document.getElementById('temp3').style.color = 'red';
    else
        document.getElementById('temp3').style.color = 'blue';





}

apiFetch(url);