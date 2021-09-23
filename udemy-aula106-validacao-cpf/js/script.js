// const CPF = '705.484.450-52'
const CPF = '070.987.720-03'
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable:false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequencia) return false
        return
    }
}

const cpf = new ValidaCPF(CPF)
console.log(cpf)