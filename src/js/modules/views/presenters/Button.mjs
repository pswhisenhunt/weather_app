function Button ({ text, id, type, onClick, isActive }) {
    this.generateHTML = function() {
        let button = document.createElement('button')
        button.setAttribute('id', id)
        button.setAttribute('type', type)
        button.setAttribute('onClick', onClick)
        
        if (isActive) {
            button.classList.add('active')
        } else {
            button.classList.remove('active')
        }

        button.textContent = text
        
        return button
    }
    
    return this.generateHTML()
}

export { Button }