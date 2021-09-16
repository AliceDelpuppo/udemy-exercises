// const CPF = '705.484.450-52'
// const CPF = '070.987.720-03'
// const CPF = '222.222.222.11'
const CPF = '222.222.222.22'

function ValidateCPF (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidateCPF.prototype.valida = function() {
    console.log('this: ', this);
    
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    console.log(`cpf parcial ${cpfParcial}`)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    console.log('digito1: ', digito1);
    console.log('digito2: ', digito2);

    const novoCPF = cpfParcial + digito1 + digito2
    
    return novoCPF === this.cpfLimpo
}

ValidateCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)

    let contRegressivo = cpfArray.length + 1

    const multDigitos = cpfArray.reduce((acumulador, valor) => {
        acumulador += (contRegressivo * Number(valor))
        contRegressivo--
        return acumulador
    }, 0)
    
    const digito =  11 - (multDigitos % 11)

    if(digito > 9) return '0'
    return String(digito)
    
}

ValidateCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

console.log(`CPF inserido: ${CPF}`)
const cpf = new ValidateCPF(CPF)

if(cpf.valida()){
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}
