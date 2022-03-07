const frutas = ['Banana', 'Abacaxi', 'Uva', 'Maçã', 'Limão']
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Pergoli',
    idade: 22
}

// Formas de acessar os valores das propriedades do objeto
console.log(pessoa.nome)
console.log(pessoa['nome'])
const chave = 'nome'
console.log(pessoa[chave])

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// for in -> lê os índices ou chaves do objeto
for (let i in frutas) {
    console.log(i)
}

for (let i in pessoa) {
    console.log(i, pessoa[i])
}

for (let i in frutas) {
    console.log(i, frutas[i])
}