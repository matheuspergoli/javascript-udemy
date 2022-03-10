// return - Retorna um valor e termina a função
function soma(a, b) {
    return a + b
}

function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

const pessoa1 = criaPessoa('Matheus', 'Pergoli')
const pessoa2 = criaPessoa('Karla', 'Muniz')
const pessoa3 = criaPessoa('Sophia', 'Takagi')

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }

    return falaResto()
}
const olaMundo = falaFrase('Olá')







// function duplica(numero) {
//     return numero * 2
// }

// function triplica(numero) {
//     return numero * 3
// }

// function quadriplica(numero) {
//     return numero * 4
// }


function criaMultiplicador(multiplicador) {
    function multiplicar(numero) {
        return numero * multiplicador
    }

    return multiplicar
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))