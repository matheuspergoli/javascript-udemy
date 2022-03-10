/*
Primitivos (Valores imutáveis) - string, number, boolean, undefined, null = Valores Copiados

Referência (Mutável) - array, object, function = Passados por referência
*/

// let a = 'A'
// let b = a // Cópia
// console.log(a, b)

let a = [1, 2, 3]
let b = a
let c = b
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

a.push('Luiz')
console.log(c)