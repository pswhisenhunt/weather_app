function Geolocation(navigator) {
    this.geolocator = navigator.geolocation
    this.coordinates = {
        latitude: null,
        longitude: null,
    }
}

Geolocation.prototype.getCurrentLocation = function () {
    return new Promise((resolve, reject) => {
        this.geolocator.getCurrentPosition((position) => {
            resolve(position)
        }, (error) => {
            reject(error)
        })
    })
}

Geolocation.prototype.setCoordinates = function (coords) {
    this.coordinates = { latitude: coords.latitude, longitude: coords.longitude}
}

Geolocation.prototype.getCoordinates = function() {
    return this.coordinates
}

export { Geolocation }