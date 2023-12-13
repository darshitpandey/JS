function getWeather() {
    const apiKey = 'afedddc2d4e35aab0de5e6800213a928';
    const cityInput = $('#cityInput').val();

    if (cityInput === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            displayWeather(data);
        },
        error: function (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        }
    });
}

function displayWeather(data) {
    const weatherInfo = $('#weatherInfo');
    weatherInfo.empty();

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherDetails = `<p>City: ${cityName}</p>
                            <p>Temperature: ${temperature}°C</p>
                            <p>Description: ${description}</p>`;

    weatherInfo.html(weatherDetails);
}
