const convertToFahrenheit = (tempInCelsius) => {
    return Math.floor((Number(tempInCelsius) * 1.8) + 32)
}

const formatTime = (timestamp) => {
    let date = new Date(timestamp * 1000)
    return date.toLocaleTimeString()
}


const capitialize = (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1, string.length)
}

export { convertToFahrenheit, formatTime, capitialize }