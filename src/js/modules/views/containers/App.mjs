import { WeatherOverView } from './WeatherOverview.mjs'
import { WeatherReport } from './WeatherReport.mjs'
import { ToggleDegree } from './ToggleDegree.mjs'

function App(element, weatherModel) {
    this.state = { weatherModel, tempDegree: 'C'}
    this.element = document.querySelector(element)

    this.setState = function (event) {
        let val = event.target.value
        if (val != this.state.tempDegree) {
            this.state = { 
                ...this.state,
                tempDegree: event.target.value 
            }
            this.clear()
            this.render()
        }
    }

    this.clear = function () {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild)
        }
    }

    this.setBackgroundImage = function () {
        console.log(this.state.weatherModel.getImageUrl())
        this.element.style.backgroundImage = `url(${this.state.weatherModel.getImageUrl()})`
    }

    this.generateChildren = function () {
        return {
            toggleDegree: new ToggleDegree({
                parent: this.element,
                template: '#toggle-degree-template',
                tempDegree: this.state.tempDegree,
                handleToggle: this.setState.bind(this)
            }),
            weatherOverview: new WeatherOverView({
                parent: this.element,
                template: '#weather-overview-template',
                weatherModel: this.state.weatherModel,
                tempDegree: this.state.tempDegree,
            }),
            weatherReport: new WeatherReport({
                parent: this.element,
                template: '#weather-report-template',
                weatherModel: this.state.weatherModel,
                tempDegree: this.state.tempDegree,
            }),
        }
    }

    this.render = function () {
        this.setBackgroundImage()
        let children = this.generateChildren()
        for (let child in children ) {
            children[child].render()
        }
    }
}

export { App }