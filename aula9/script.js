/**
 * String = Qualquer tipo de texto dentro de aspas ou aspas duplas
 * Number = Qualquer tipo de número 10 ou 25.10
 * Undefined = Quando não é definido um valor para uma variável ela fica undefined
 * Null = Não aponta para lugar nenhum na memória
 * Boolen = Valor lógico, true ou false
 */

const nome = 'Matheus' // String = Qualquer tipo de texto que esteja entre aspas
const nome1 = "Luiz" // String
const nome2 = `Karla` // String

const numero = 10 // Number = Qualquer tipo de número
const numero1 = 10.50 // Number

let nomeAluno // Undefined = Não aponta para local nenhum na memória

let sobrenomeAluno = null // Null = Não aponta para local nenhum na memória

const aprovado = true // Boolean = true, false (Valor lógico)
const reprovado = false // Boolean

console.log(nome, '=', typeof(nome))
console.log(numero, '=', typeof(numero))
console.log(nomeAluno, '=', typeof(nomeAluno))
console.log(sobrenomeAluno, '=', typeof(sobrenomeAluno))
console.log(aprovado, '=', typeof(aprovado))
console.log(reprovado, '=', typeof(reprovado))