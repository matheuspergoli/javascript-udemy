// ... rest, ... spread
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
// const [um, ,tres, ,cinco, ,sete, ,nove] = numeros
// console.log(um, tres, cinco, sete, nove)



//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
// const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// const [lista1, lista2, lista3] = numeros

// console.log(lista3[2])

const nomes = ['Matheus', 'Karla', 'Sophia', 'Arthur', 'Luiz', 'Kenji']

const [matheus, karla, sophia, arthur, luiz, kenji] = nomes

// console.log(matheus, karla, sophia, arthur, luiz, kenji)

const usuario = ['Matheus', 'Pergoli', 22, 08, 1999, 'Masculino']

const [nomeUsuario, sobrenomeUsuario, dia, mes, ano, sexo] = usuario

console.log(`Nome do usuário: ${nomeUsuario}`)
console.log(`Sobrenome do usuário: ${sobrenomeUsuario}`)
console.log(`Nascimento: ${dia}/${mes}/${ano}`)
console.log(`Sexo: ${sexo}`)