import { formatTime } from '../../utils.mjs'

function DayLengthDetails({ sunrise, sunset }) {
    this.generateHTML = function() {
        let paragraph = document.createElement('p')
        paragraph.textContent = `The sun rises at ${formatTime(sunrise)} and sets at ${formatTime(sunset)}`
        return paragraph
    }

    return this.generateHTML()
}

export { DayLengthDetails }