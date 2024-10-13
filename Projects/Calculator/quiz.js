const request = new XMLHttpRequest;

request.open('GET', 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,wind_speed_10m');
request.send();
console.log(request);

let data;

request.onload = () => {
  if(request.status >= 200 && request.status < 400) 
  {
    data = JSON.parse(request.responseText);
    console.log(data);
  } 
  else 
  {
    console.log('Failed to fetch data');
  }
}