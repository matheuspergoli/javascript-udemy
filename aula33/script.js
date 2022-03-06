const pessoa = {
    // nome: 'Matheus',
    // sobrenome: 'Pergoli',
    // idade: 22,
    endereco: {
        rua: 'São Marçal',
        bairro: 'Jardim Helena',
        casa: 107
    } 
}

// const {nome, sobrenome, idade} = pessoa
// const { endereco: {rua, bairro, casa}} = pessoa
// console.log(rua, bairro, casa)

const {nome = 'Nome não definido', sobrenome = 'Sobrenome não difinido', idade = 'Idade não definida'} = pessoa

console.log(nome)
console.log(sobrenome)
console.log(idade)