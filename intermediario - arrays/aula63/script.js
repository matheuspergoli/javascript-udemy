// Índices       -5       -4       -3         -2        -1
// Índices        0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
// Como funciona o método splice()
// EX:.. nomes.splice(índice, remover, adicionar)
// Como funciona cada argumento
// Índice = você vai escolher qual índice do array quer começar
// Remover = você vai escolher quantos elementos deletar do array
// Adicionar = você vai escolher quais elementos adicionar ao array

// Elementos removidos pelo método splice() é retornado como um array

// Simulando o método pop() com o splice() e jogando na variável removidos
// const removidos = nomes.splice(-1, 1)
// console.log(removidos)

// Simulando o método push() com o splice()
// nomes.splice(nomes.length, 0, 'Luiz')
// console.log(nomes)

// Simulando o método shift() com o splice() e jogando na variável removidos
// const removidos = nomes.splice(0, 1)
// console.log(removidos)

// Simulando o método unshift() com o splice()
// nomes.splice(0, 0, 'Luiz')
// console.log(nomes)