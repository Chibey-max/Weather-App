function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "5947bb97b9de4f38022b350614b36cf5";
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("result").innerHTML = `
          <h3>${data.name}</h3>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(() => {
        document.getElementById("result").innerHTML = "City not found!";
      });
  }
  