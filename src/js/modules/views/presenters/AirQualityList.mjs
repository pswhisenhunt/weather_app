import { capitialize } from "../../utils.mjs"

function AirQualityList (airQuality) {
    this.generateHTML = function() {
        let airQualityList = document.createElement('ul')
        
        for (let key in airQuality) {
            let item = document.createElement('li')
            item.setAttribute('class', key)
            item.textContent = `${capitialize(key)} is currently ${airQuality[key]}`
            airQualityList.appendChild(item)
        }
        
        return airQualityList
    }

    return this.generateHTML()
}

export { AirQualityList }