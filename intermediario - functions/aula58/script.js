// Função construtora -> retorna objetos
// Função fábrica -> retorna objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456
    const metodoInterno = () => {

    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(`${this.nome}, sou um método`)
    }
}

const p1 = new Pessoa('Matheus', 'Pergoli')
const p2 = new Pessoa('Karla', 'Muniz')
p1.metodo()