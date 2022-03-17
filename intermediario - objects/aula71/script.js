function Produto(nome, preco, estoque) {
    // this.nome = nome
    // this.preco = preco
    // this.estoque = estoque
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra as chaves
        value: estoque, // Valor
        writable: true, // Pode alterar
        configurable: false, // Configurável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra as chaves
            value: nome, // Valor
            writable: true, // Pode alterar
            configurable: false, // Configurável
        },

        preco: {
            enumerable: true, // Mostra as chaves
            value: preco, // Valor
            writable: true, // Pode alterar
            configurable: false, // Configurável
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))

for (let chave in p1) {
    console.log(chave)
}