const divParagrafos = document.querySelector('#paragrafos')
const paragrafos = divParagrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const bgColorBody = estilosBody.backgroundColor

for (let i of paragrafos) {
    console.log(i)
    i.style.color = 'white'
    i.style.backgroundColor = bgColorBody
}