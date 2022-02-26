const nome = 'Luiz'
const sobrenome = 'Otávio Miranda'
let idade = 33
let peso = 84
const altura = 1.80
let imc = peso / (altura * altura)
let anoNascimento = 2022 - idade

// Template Strings

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade e nasceu em ${anoNascimento}.`)
console.log(`${nome} tem ${altura.toFixed(2)} de altura e pesa ${peso} kg`)
console.log(`${nome} tem o IMC de ${imc.toFixed(2)}`)