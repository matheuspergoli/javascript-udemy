const nomes = ['Matheus', 'Karla', 'Sophia', 'Arthur', 'Luiz', 'Denise', 'Adriano']
const nome = 'Matheus Pergoli'
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Pergoli',
    idade: 22
}

// for clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave (string, array, objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let i = 0; i < nome.length; i++) {
    console.log(i, nome[i])
}

for (let i in nome) {
    console.log(i, nome[i])
}

// for of -> retorna apenas o valor 
for (let valor of nomes) {
    console.log(valor)
}

// for in -> retorna o índice e o valor
for (let i in nomes) {
    console.log(i, nomes[i])
} 