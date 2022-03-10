const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i in numeros) {
    let numero = numeros[i]

    if (numero === 2) {
        console.log('Número pulado...')
        continue // Pula pra próxima iteração do laço se o número for igual a 2
    }

    console.log(numero)

    if (numero === 7) {
        console.log('Número 7 encontrado, saindo...')
        break // Para a iteração se o número for igual a 7
    }
}