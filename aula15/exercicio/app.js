let numeroEscolhido = Number(prompt('Digite um número: '))

const numero = document.getElementById('numero')
numero.innerHTML = `Seu número é: ${numeroEscolhido}`

const raizQuadrada = document.getElementById('raiz-quadrada')
raizQuadrada.innerHTML = `Raiz quadrada: ${numeroEscolhido ** 0.5}`

const inteiro = document.getElementById('inteiro')
if (Number.isInteger(numeroEscolhido)) {
    inteiro.innerHTML = `${numeroEscolhido} é um número inteiro: Sim`
} else {
    inteiro.innerHTML = `${numeroEscolhido} é um número inteiro: Não`
}

const nan = document.getElementById('nan')
if (Number.isNaN(numeroEscolhido)) {
    nan.innerHTML = 'É NaN (Not a Number): Sim'
} else {
    nan.innerHTML = 'É NaN (Not a Number): Não'
}

const arredondaBaixo = document.getElementById('arredonda-baixo')
arredondaBaixo.innerHTML = `Arredondando para baixo: ${Math.floor(numeroEscolhido)}`

const arredondaCima = document.getElementById('arredonda-cima')
arredondaCima.innerHTML = `Arredondando para cima: ${Math.ceil(numeroEscolhido)}`

const casaDecimal = document.getElementById('casa-decimal')
casaDecimal.innerHTML = `Com duas casas decimais ${numeroEscolhido.toFixed(2)}`