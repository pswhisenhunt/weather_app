function WeatherService() {
    this.searchUrl = new URL('https://weather-proxy.freecodecamp.rocks/api/current')
    this.baseUrl = new URL('https://weather-proxy.freecodecamp.rocks/api/current')
}

WeatherService.prototype.setQueryParam = function(name, value) {
    this.searchUrl.searchParams.set(name, value)
}

WeatherService.prototype.getQueryParam = function(name) {
    return this.searchUrl.searchParams.get(name)
}

WeatherService.prototype.getSeachUrl = function() {
    return this.searchUrl.toString()
}

WeatherService.prototype.getWeatherForLocation = function(coordinates) {
    if (!coordinates.longitude || !coordinates.latitude) return 'please provide a value for latitude and longitude'
    this.setQueryParam('lat', coordinates.latitude)
    this.setQueryParam('lon', coordinates.longitude)
    return fetch(this.getSeachUrl())
        .then(res => res.json())
        .then(result => result)
        .catch(error => error)
}

export { WeatherService }