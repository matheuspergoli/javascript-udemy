function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('X e Y precisam ser números...')
    }

    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma(1, '2'))
} catch(erro) {
    console.log(erro)
}