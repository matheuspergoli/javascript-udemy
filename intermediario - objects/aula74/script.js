// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.') // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.') // <- Pessoa = Função construtora

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

console.dir(pessoa1)
console.dir(pessoa2)