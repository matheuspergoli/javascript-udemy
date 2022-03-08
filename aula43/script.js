function divisor(valor) {
    if (typeof valor !== 'number') return valor
    if (valor % 3 === 0 && valor % 5 === 0) return 'FizzBuzz'
    if (valor % 3 === 0) return 'Fizz'
    if (valor % 5 === 0) return 'Buzz'
    return valor
}

for (let i = 0; i <= 100; i++) {
    console.log(divisor(i))
}