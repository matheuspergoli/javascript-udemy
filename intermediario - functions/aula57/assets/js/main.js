function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia: function () {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter() {
            this.diplay.addEventListener('keyup', (event) => {
                if (event.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta inválida')
                    return
                }

                this.display.value = conta
            } catch(e) {
                alert('Conta inválida')
                return
            }
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes() {
            document.addEventListener('click', (event) => {
                const elemento = event.target

                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText)
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (elemento.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

                this.display.focus()
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()