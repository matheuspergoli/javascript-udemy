const produto = { nome: 'Produto', preco: 1.8}
const caneca = Object.assign({}, produto, { material: 'Porcelana'})

caneca.nome = 'Caneca'
caneca.preco = 2.5

console.table(Object.values(produto))