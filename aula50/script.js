// Função definida com a palavra function tem uma variável especial que chama arguments que sustenta todos os argumentos enviados
// 
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        acumulador += numero
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)