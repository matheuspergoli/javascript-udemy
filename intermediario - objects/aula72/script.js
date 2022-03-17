function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        get: () => {
            return estoque
        },

        set: (valor) => {
            if (typeof valor !== 'number') {
                console.log('Bad value')
                return
            }
        }
    })
}

const criaProduto = (nome) => {
    return {
        get nome() {

        },

        set nome(valor) {
            nome = valor
        }
    }
}