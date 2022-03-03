const btn = document.querySelector('button')

btn.addEventListener('click', enviar)
function enviar() {
    const resultado = document.querySelector('#resultado')
    const formulario = document.querySelector('form')

    formulario.addEventListener('submit', preventForm)
    function preventForm(event) {
        event.preventDefault()

        const peso = Number(document.querySelector('#peso').value)
        const altura = Number(document.querySelector('#altura').value)

        const imc = peso / (altura * altura)
        
        if (peso <= 0 && altura <= 0) {
            resultado.innerHTML = `Dados inválidos!`
            return    
        } else if (peso < 30 || peso > 600 || isNaN(peso)) {
            resultado.innerHTML = `Peso inválido!`
            return
        } else if (altura > 2.10 || altura < 1.00 || isNaN(altura)) {
            resultado.innerHTML = `Altura inválida!`
            return
        } else if (imc <= 18.5) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} Abaixo do peso`
        } else if (imc > 18.5 && imc <= 24.9) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} Peso normal`
        } else if (imc > 25 && imc <= 29.9) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} Sobrepeso`
        } else if (imc > 30 && imc <= 34.9) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} Obesidade grau 1`
        } else if (imc > 35 && imc <= 39.9) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} Obesidade grau 2`
        } else {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} Obesidade grau 3`
        }
    }
}