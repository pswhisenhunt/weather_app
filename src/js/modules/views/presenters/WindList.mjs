import { capitialize } from "../../utils.mjs"

function WindList (wind) {
    this.generateHTML = function () {
        let windList = document.createElement('ul')

        for (let key in wind) {
            let item = document.createElement('li')
            item.setAttribute('class', key)
            item.textContent = `${capitialize(key)}: ${wind[key]}`
            windList.appendChild(item)
        }
        
        return windList
    }

    return this.generateHTML()
}

export { WindList }