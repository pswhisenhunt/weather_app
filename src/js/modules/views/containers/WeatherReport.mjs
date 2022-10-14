import { AirQualityList } from '../presenters/AirQualityList.mjs'
import { WindList } from '../presenters/WindList.mjs'
import { ConditionDetails } from '../presenters/ConditionDetails.mjs'
import { TemperatureDetails } from '../presenters/TemperatureDetails.mjs'
import { DayLengthDetails } from '../presenters/DayLengthDetails.mjs'

function WeatherReport({ parent, template, weatherModel, tempDegree }) {
    this.state = { ...weatherModel, tempDegree: tempDegree }
    this.parent = parent
    this.template = document.querySelector(template)

    this.getChildren = function () {
        return {
            airQualityList: new AirQualityList(this.state.airQuality),
            windList: new WindList(this.state.wind),
            conditionDetails: new ConditionDetails(this.state.condition),
            temperatureDetails: new TemperatureDetails(this.state.tempInCelsius, this.state.tempDegree),
            dayLengthDetails: new DayLengthDetails(this.state.dayLength),
        }
    }

    this.render = function () {
        const clone = this.template.content.cloneNode(true)
        let weatherConditionEl = clone.querySelector('.weather-report-condition')
        let weatherTempEl = clone.querySelector('.weather-report-temp')
        let weatherAirEl = clone.querySelector('.weather-report-air')
        let weatherDayEl = clone.querySelector('.weather-report-day')
        let weatherWindEl = clone.querySelector('.weather-report-wind')

        let children = this.getChildren()

        weatherConditionEl.appendChild(children.conditionDetails)
        weatherTempEl.appendChild(children.temperatureDetails)
        weatherAirEl.appendChild(children.airQualityList)
        weatherWindEl.appendChild(children.windList)
        weatherDayEl.appendChild(children.dayLengthDetails)
        this.parent.appendChild(clone)
    }
}

export { WeatherReport }