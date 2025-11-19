function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "d01ab1f733f63d2aeda99b05219049bc";
  
    fetch(`https://api.weatherstack.com/current?q=${city}&access_key=${apiKey}`)
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
  