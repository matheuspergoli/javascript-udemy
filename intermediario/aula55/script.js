// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Pergoli'
    function criaNome(nome) {
        return `${nome} ${sobrenome}`
    }

    function rand(min = 1000, max = 3000) {
        const numero = Math.random() * (max - min) + min
        return Math.floor(numero) 
    }

    function enviaDados() {
        console.log('Computando...')
        setTimeout(function() {
            console.log(`${criaNome('Matheus')}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}`)
        } , rand())
    }

    enviaDados()
})(22, 100, 1.75)