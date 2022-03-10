const container = document.querySelector('#container')

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
    {tag: 'article', texto: 'Frase 5'},
]

function criarElemento(elemento, texto) {
    const tag = document.createElement(elemento)
    tag.innerHTML = texto
    return tag
}

for (let i = 0; i < elementos.length; i++) {
    const tag = criarElemento(elementos[i].tag, elementos[i].texto)
    container.appendChild(tag)
}