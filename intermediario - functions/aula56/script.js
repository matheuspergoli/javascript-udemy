// Factory function (Função fábrica) - funções que retornam objetos
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura,

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

// Getter - faz com que um método finja ser um atributo
// Com get não se utiliza mais parenteses quando usar a notação de ponto
        get imc() {
            const imc = this.peso / (this.altura ** 2)
            return imc.toFixed(2)
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`
        }
    }
}

const p1 = criaPessoa('Matheus', 'Pergoli', 100, 1.75)
p1.nomeCompleto = 'Denise Pergoli dos Santos'
console.log(p1.nomeCompleto)