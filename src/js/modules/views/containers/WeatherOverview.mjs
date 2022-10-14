import { convertToFahrenheit } from '../../utils.mjs'
import { Icon } from '../presenters/Icon.mjs'

function WeatherOverView({ parent, template, weatherModel, tempDegree }) {
    this.state = { ...weatherModel, tempDegree: tempDegree }
    this.parent = parent
    this.template = document.querySelector(template)

    this.formatTemp = function () {
        return this.state.tempDegree === 'C' ? this.state.tempInCelsius.currentTemp : convertToFahrenheit(this.state.tempInCelsius.currentTemp)
    }

    this.render = function () {
        const clone = this.template.content.cloneNode(true)
        let weatherLocationEl = clone.querySelector('.weather-overview-location')
        let weatherIconEl = clone.querySelector('.weather-overview-icon')
        let weatherCurrentTempEl = clone.querySelector('.weather-overview-current-temp')
        let weatherConditionEl = clone.querySelector('.weather-overview-condition')

        weatherIconEl.appendChild(new Icon(this.state.condition))
        weatherLocationEl.textContent = `${this.state.location.city}, ${this.state.location.country}`
        weatherCurrentTempEl.textContent = `Current temperaure: ${this.formatTemp()} ${this.state.tempDegree}`
        weatherConditionEl.textContent = `Current condition: ${this.state.condition.main}`

        this.parent.appendChild(clone)
    }
}

export { WeatherOverView }