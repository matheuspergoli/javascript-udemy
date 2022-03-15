const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [7, 8, 9]

// O método concat() serve para concatenar arrays
// const a4 = a1.concat(a2, a3)

// Rest operator  ... 
// Spread operator ...
// Ambos rest e spread são o mesmo
// Concatenando arrays com spread operator
const a4 = [...a1, ...a2, ...a3]
console.log(a4)