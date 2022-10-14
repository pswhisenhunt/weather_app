export const weatherPresenter = function (apiData) {
    return {
        id: apiData.id,
        tempInCelsius: {
            currentTemp: apiData.main.temp,
            maxTemp: apiData.main.temp_max,
            minTemp: apiData.main.temp_min,
            feelsLike: apiData.main.feels_like,
        },
        dayLength: {
            sunrise: apiData.sys.sunrise,
            sunset: apiData.sys.sunset,
        },
        location: {
            country: apiData.sys.country,
            city: apiData.name,
            lat: apiData.coord.lat,
            lon: apiData.coord.lon,
        },
        condition: {
            ...apiData.weather[0]
        },
        wind: {
            ...apiData.wind
        },
        airQuality: {
            humidity: apiData.main.humidity,
            pressure: apiData.main.pressure,
            visibility: apiData.visibility,
        },
    }
}