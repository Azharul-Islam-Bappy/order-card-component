
const visibility = document.querySelector('#visibility');
const windSpeed = document.querySelector('#windspeed');
const temperature = document.querySelector('#temperature');


const searchBtn = document.querySelector('#search-weather');

const apiKey = '1e7e71a6e34e4430b66fb2a261d7bceb';

const city = document.querySelector('#search-box');



// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const weather = data.data[0];
//     console.log(`Temperature in ${city}: ${weather.temp}°C`);
//     console.log(`Weather: ${weather.weather.description}`);
//   })
//   .catch(error => console.error('Error fetching weather data:', error));
  
searchBtn.addEventListener('click', () => {
  let cityValue = city.value;
  const url = `https://api.weatherbit.io/v2.0/current?city=${cityValue}&key=${apiKey}`;
  
  if(cityValue !== '' ) {
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          return response.json();
        }
        else{
          alert("Couldnt fetch weather data");
          console.log(response)
        }
      })
      .then(data => {
        console.log(data);
        console.log(data.data[0].temp);
        temperature.textContent = `${data.data[0].temp}°C`;
        windSpeed.textContent = `${data.data[0].wind_spd} Km/h`;
        visibility.textContent = `${data.data[0].vis} Km`;
        
      })
  }
  else{
    alert('please enter city!');
  }
});