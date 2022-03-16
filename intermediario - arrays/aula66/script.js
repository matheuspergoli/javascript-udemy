const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Map sempre retorna o array no seu tamanho original
const numerosEmDobro = numeros.map(valor => valor * 2)
// console.log(numerosEmDobro)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const nomes = pessoas.map(obj => {
    const newObj = {...obj}
    return newObj.nome
})
// console.log(nomes)

const idades = pessoas.map(obj => {
    const newObj = {...obj}
    return { idade: newObj.idade}
})
console.log(idades)

const ids = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice
    return newObj
})
// console.log(ids)