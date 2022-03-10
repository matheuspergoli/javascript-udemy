// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// }

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
// }

console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)

// Criando uma função que cria um objeto e retorna o objeto
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

// const pessoa1 = criaPessoa('Matheus', 'Pergoli', 22)
const pessoa2 = criaPessoa('Karla', 'Muniz', 33)
const pessoa3 = criaPessoa('Sophia', 'Takagi', 15)
const pessoa4 = criaPessoa('Adriano', 'Araujo', 35)
const pessoa5 = criaPessoa('Maria', 'Luiza', 60)
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa5)

const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Pergoli',
    idade: 22,

    fala () {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade () {
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()