// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=78ea36f22f23c953dc7938bb10ac87bc';

// fetches the data from api and calls displayResults function
async function apiFetch() {
    try {
      const response = await fetch(url);
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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // Sets the first letter in each word to uppercase
    // sets results tp captionDesc
    const words = desc.split(' ');
    captionDesc.textContent = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');

    // changes the temperature text color based on the current temperature
    if (weatherData.main.temp > 70 && weatherData.main.temp < 85)
        document.getElementById('current-temp').style.color = 'orange';
    else if (weatherData.main.temp >= 85)
        document.getElementById('current-temp').style.color = 'red';
    else
        document.getElementById('current-temp').style.color = 'blue';
}

apiFetch();


