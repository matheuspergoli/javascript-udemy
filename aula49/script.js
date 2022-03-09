// Declaração de função
function falaOi() {
    console.log('Oi')
}
falaOi()

// First-class-objects (Objetos de primeira classe)
const souUmDado = function() {
    console.log('Sou um dado')
}
souUmDado()

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function')
}
arrowFunction()

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando')
    }
}
obj.falar()