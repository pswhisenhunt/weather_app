function ConditionDetails(condition) {
    this.generateHTML = function () {
        let paragraph = document.createElement('p')
        paragraph.setAttribute('class', 'weather-condition-container')
        paragraph.textContent = `The current weather is ${condition.main}: ${condition.description}`
        return paragraph
    }

    return this.generateHTML()
}

export { ConditionDetails }