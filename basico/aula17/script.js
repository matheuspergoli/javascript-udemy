// Criando uma função chamada hello
function hello(nome) {
    return `Bom dia, ${nome}!`
}

// Chamando a função hello
hello('Heiz')
hello('Karla')
hello('Arthur')
hello('Sophia')

// Salvando o retorno da função hello em uma variável
const variavel = hello('Matheus')
console.log(variavel)

// Fazendo com que a função assuma um valor caso não haja argumentos
function soma(valor1 = 1, valor2 = 1) {
    const resultado = valor1 + valor2
    return resultado
}

console.log(soma())

// Criando uma função dentro de uma variável
const raiz = function (numero) {
    return numero ** 0.5
}

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

// Criando uma arrow function
const raizQuadrada = (numero) => {
    return numero ** 0.5
}

console.log(raizQuadrada(9))
console.log(raizQuadrada(16))
console.log(raizQuadrada(25))