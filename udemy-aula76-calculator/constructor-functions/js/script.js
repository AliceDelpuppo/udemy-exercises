function Calculator() {
    this.display = document.querySelector('.display')

    this.start = () => {
        this.captureClicks()
        this.captureEnter()
    }

    this.captureEnter = () => {
        document.addEventListener('keyup', (event) => {
            if (event.keyCode == 13) 
            this.calc()
        })
    }
    
    this.captureClicks = () => {
        document.addEventListener('click', (event) => {
            const element = event.target

            if(element.classList.contains('button-num')) this.addNumberDisplay(element)
            if(element.classList.contains('button-clear')) this.clearDisplay()
            if(element.classList.contains('button-del')) this.deleteDisplay()
            if(element.classList.contains('button-equal')) this.calc()
        })
    }

    this.addNumberDisplay = (element) => {
        this.display.value += element.innerText
        this.display.focus()
    }
    this.clearDisplay = () => this.display.value = ''
    this.deleteDisplay = () => this.display.value = this.display.value.slice(0, -1);
    this.calc = () => {
        try {
            // Função perigosa, mas como o objetivo é aprender constructor function, tá valendo
            const calc = eval(this.display.value)

            if(!calc) {
                alert('Conta inválida')
                return
            }

            this.display.value = calc
        } catch {
            alert('Conta inválida')
            return
        }
    }

}

const calculator = new Calculator()
calculator.start()