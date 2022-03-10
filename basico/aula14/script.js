let num1 = 0.7
let num2 = 0.1

// Temporariamente convertendo num1 para uma string com toString()
console.log(num1.toString() + num2)

// Retorna true se o valor for inteiro ou false se não for
console.log(Number.isInteger(num1))

// Retorna true se a conta for inválida (NaN = Not a Number) ou false se for válida
let temp = num1 * 'Olá'
console.log(Number.isNaN(temp))

console.log(num1 + num2)