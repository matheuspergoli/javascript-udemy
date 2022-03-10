// Criando um array
//               0       1        2
const alunos = ['Luiz', 'Maria', 'João']

console.log(typeof(alunos))

// Se instanceof retornar true então é array senão não é array
console.log(alunos instanceof Array)

alunos.push('Luiza')
alunos.push('Eduardo')

// Fatiando um array com slice (Lembrando que o último número sempre é excluído)
console.log(alunos.slice(0, 3))

// Apagando um elemento do array que ocasiona no mesmo elemento sendo deixado vazio
delete alunos[1]
console.log(alunos)

// Removendo um elemento no começo do array
alunos.shift()
console.log(alunos)

// Também podemos remover um elemento no começo de um array e salvar em uma variável
let remover = alunos.shift()
console.log(remover)
console.log(alunos)

// Removendo um elemento no fim do array
alunos.pop()

// Também podemos remover um elemento no fim do array e salvar em uma variável
let removido = alunos.pop()
console.log(removido)
console.log(alunos)

// Adicionando um elemento no começo do array
alunos.unshift('Matheus')
console.log(alunos)

// Adicionando um elemento ao final do array
alunos.push('Matheus')
alunos.push('Karla')
alunos.push('Arthur')
alunos.push('Sophia')
console.log(alunos)

// Descobrindo o tamanho do array
console.log(alunos.length)

// Editando um valor do array
alunos[0] = 'Eduardo'
console.log(alunos)

// Adicionando um elemento no array
alunos[3] = 'Luiza'
console.log(alunos)

console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])
console.log(alunos)