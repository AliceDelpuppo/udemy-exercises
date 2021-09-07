function createCalculator() {

    return {
        display: document.querySelector('.display'),

        start: function start() {
            this.clickButtons()
            this.pressEnter()
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        clearDisplay() {
            this.display.value = ''
        },

        doTheMath() {
            let calc = this.display.value

            try {
                // função perigosa!!
                calc = eval(calc)

                if(!calc){
                    alert('Conta inválida')
                    return
                }

                this.display.value = String(calc)
            }
            catch{
                alert('Conta inválida')
                return
            }            
        },

        clickButtons() {
            // this --> aqui dentro é calculator
            document.addEventListener('click', function (event) {
                // this --> aqui dentro é document. Método bind(this) conserta isso
                // Com arrow function, isso não é necessário. O this continua sendo calculator
                // console.log(this)
                const element = event.target

                if (element.classList.contains('button-num')) {
                    this.buttonParaDisplay(element.innerText)
                }

                if (element.classList.contains('button-clear')) {
                    this.clearDisplay()
                }

                if (element.classList.contains('button-del')) {
                    this.deleteOne()
                }

                if (element.classList.contains('button-equal')) {
                    this.doTheMath()
                }

            }.bind(this))
        },

        buttonParaDisplay(value) {
            this.display.value += value
        },
    }
}

const calculator = createCalculator()
calculator.start()