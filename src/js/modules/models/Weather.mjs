function Weather({ tempInCelsius, dayLength, location, condition, wind, airQuality }) {
    this.tempInCelsius = tempInCelsius
    this.dayLength = dayLength
    this.location = location
    this.condition = condition
    this.wind = wind
    this.airQuality = airQuality
}

Weather.prototype.getImageUrl = function() {
    switch(this.condition.main.toLowerCase()) {
        case 'clouds':
            return "images/cloudy.jpg"
        case 'sun':
            return "images/sunny.jpg"
        case 'storms':
            return "images/stomry.jpg"
        case 'snow':
            return "images/snow.jpg"
        case 'rain':
            return "images/rain.jpg"
        default:
            return "images/general.jpg"
    }
}

export { Weather }