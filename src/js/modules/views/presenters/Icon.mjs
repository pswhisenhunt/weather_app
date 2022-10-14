function Icon({ icon, main }) {
    this.generateHTML = function () {
        let img = document.createElement('img')
        img.setAttribute('src', icon)
        img.setAttribute('alt', main)
        return img
    }

    return this.generateHTML()
}

export { Icon }