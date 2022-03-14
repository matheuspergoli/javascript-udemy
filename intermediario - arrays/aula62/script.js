// Array são dados passados por referência
// Índice          0         1        2        3         4         5         6
const nomes = ['Eduardo', 'Maria', 'Joana', 'Karla', 'Sophia', 'Arthur', 'Rosana']

// O método pop() remove o último elemento do array
nomes.pop()

// E também podemos passar esse elemento removido com pop() para uma variável
const removido = nomes.pop()

// Podemos também deletar um elemento sem alterar o índice, deixando o índice vazio
delete nomes[2]

// O método push() adiciona um elemento ao final do array
nomes.push('Matheus')

// Usando spread operator que é exatamente o mesmo que o rest operator
// Fazendo isso, pegamos o valor do array nomes e copiamos para o array novo
// Dessa forma qualquer alteração em qualquer um dos arrays não afetará o outro 
const novo = [...nomes]

// Parecido com pop(), o shift() remove o primeiro elemento do array
// Porém ele desloca todos os índices do array
novo.shift()

// Também podemos adicionar um novo elemento no começo do array com unshift()
// E assim como o método shift(), o método unshift() também desloca os índices
novo.unshift('Alex')

// E também podemos passar esse elemento removido com shift() para uma variável
const removido2 = novo.shift()

// Outra forma de criar um array
const nomes2 = new Array('Eduardo', 'Maria', 'Joana', 'Matheus', 'Karla')

// Trocando o valor do índice 2 do array nomes2
nomes2[2] = 'João'

// Fatiando um array e pegando os elementos do índice 1 até o 4
// O índice final não é incluído
const novo2 = nomes2.slice(1, 4)

// Criando uma string qualquer
const meuNome = 'Matheus Pergoli Araujo'

// Transformando essa string em um array separando ela pelos espaços com split()
const meuArray = meuNome.split(' ')

// Criando mais um array
const meuNome2 = ['Matheus', 'Pergoli', 'Araujo']

// Transformando o array meuNome2 em uma string e separando por espaço com join()
const nome = meuNome2.join(' ')