import { Geolocation } from './modules/models/Geolocation.mjs'
import { Weather } from './modules/models/Weather.mjs'
import { weatherPresenter } from '../data/presenters.mjs'
import { WeatherService } from './modules/services/WeatherService.mjs'
import { App } from './modules/views/containers/App.mjs'

document.addEventListener('DOMContentLoaded', async () => {
    if ('geolocation' in navigator) {
        const geoLocator = new Geolocation(navigator)
        const weatherService = new WeatherService()
        
        let coordinates = null
        const coordinatesCache = localStorage.getItem('coordinates')
        
        if (coordinatesCache) {
            geoLocator.setCoordinates(JSON.parse(coordinatesCache))
        } else {
            const location = await geoLocator.getCurrentLocation()
            geoLocator.setCoordinates(location.coords)
            localStorage.setItem('coordinates', JSON.stringify(geoLocator.getCoordinates()))
        }

        coordinates = geoLocator.getCoordinates()

        let weatherData = {}

        const weatherCache = localStorage.getItem('weather-data')
        if (weatherCache) {
            weatherData = weatherPresenter(JSON.parse(weatherCache))
        } else {
            weatherData = await weatherService.getWeatherForLocation(coordinates)
            localStorage.setItem('weather-data', JSON.stringify(weatherData))
            weatherData = weatherPresenter(weatherData)
        }
        
        const weather = new Weather(weatherData)

        const app = new App('#root', weather)
        app.render()
    }
})

//get fresh data every 5 minutes
const refreshCache = () => {
    setInterval(() => {
        localStorage.removeItem('weather-data')
        localStorage.removeItem('coordinates')
    }, 300000)
}