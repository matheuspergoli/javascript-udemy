function retornaFuncao() {
    const nome = 'Luiz'
    return function() {
        return nome
    }
}

const nome = retornaFuncao()
console.log(nome())