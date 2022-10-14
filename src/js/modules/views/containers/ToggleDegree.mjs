import { convertToFahrenheit } from "../../utils.mjs";

function ToggleDegree({ parent, template, tempDegree, handleToggle }) {
    this.state = { tempDegree }
    this.parent = parent
    this.template = document.querySelector(template)

    this.render = function () {
        const clone = this.template.content.cloneNode(true)
        let celsiusButton = clone.querySelector('#C')
        let fahrenheitButton = clone.querySelector('#F')

        celsiusButton.addEventListener('click', handleToggle)
        fahrenheitButton.addEventListener('click',  handleToggle)

        if (tempDegree === 'C') {
            celsiusButton.classList.add('active')
            fahrenheitButton.classList.remove('active')
        } {
            celsiusButton.classList.remove('active')
            fahrenheitButton.classList.add('active')
        }
        
        this.parent.appendChild(clone)
    }
}

export { ToggleDegree }