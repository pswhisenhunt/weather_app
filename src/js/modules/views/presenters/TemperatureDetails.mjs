import { convertToFahrenheit } from '../../utils.mjs'

function TemperatureDetails(tempInCelsius, tempDegree) {
    this.generateHTML = function () {
        let formattedTemps = {
            currentTemp: {
                degree: tempDegree === 'C' ? tempInCelsius.currentTemp : convertToFahrenheit(tempInCelsius.currentTemp),
                displayName: 'Current',
            },
            maxTemp: {
                degree: tempDegree === 'C' ? tempInCelsius.maxTemp : convertToFahrenheit(tempInCelsius.maxTemp),
                displayName: 'Max',
            },
            minTemp: {
                degree: tempDegree === 'C' ? tempInCelsius.minTemp : convertToFahrenheit(tempInCelsius.minTemp),
                displayName: 'Min',
            },
            feelsLike: {
                degree: tempDegree === 'C' ? tempInCelsius.feelsLike : convertToFahrenheit(tempInCelsius.feelsLike),
                displayName: 'Feels Like',
            },
        }

        let tempList = document.createElement('ul')
        
        for (let key in tempInCelsius) {
            let item = document.createElement('li')
            item.setAttribute('class', key)
            item.textContent = `${formattedTemps[key].displayName}: ${formattedTemps[key].degree} ${tempDegree}`
            tempList.appendChild(item)
        }

        return tempList
    }

    return this.generateHTML()
}

export { TemperatureDetails }