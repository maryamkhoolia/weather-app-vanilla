function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElemant = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElemant.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "ce1cf622991644d8b6693d690ebcfb42";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Shiraz&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
