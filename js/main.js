document.querySelector ('#Robotron').addEventListener ("click", dizOi)

function dizOi () {
    console.log ("oi")
}

const subtrair = document.querySelector ("#subtrair")
const somar = document.querySelector ("#somar")

/*
somar.addEventListener ("click", () => {
    braço.value = parseInt (braço.value) + 1 //o valor do braço  será o valor do braço mais um. O "parseInt" serve para transformar a stirng em número
    //sem o parseInt ele ia acrescentar o número "1" como texto, ao invés de somar o que já tem + 1
}) 
*/
/*
somar.addEventListener ("click", () => {manipulaDados ("somar")})

subtrair.addEventListener ("click", () => {manipulaDados ("subtrair")})
*/

const controle = document.querySelectorAll ("[data-controle]")
const estatisticas = document.querySelectorAll ("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener ("click", (evento) => {
        manipulaDados (evento.target.dataset.controle , evento.target.parentNode) 
        atualizaEstatistica ()
    })
})

function manipulaDados (operacao , controle) {
    const peca = controle.querySelector (".controle-contador")

    if (operacao === "-") { //Se nessa função clicarmos no sinal de menos...
            peca.value = parseInt(peca.value) - 1 // então ele vai subtrair menos um...
    }
        else {
            peca.value = parseInt(peca.value) + 1} //Se não for sinal de menos, ele vai adicionar um.
        }

function atualizaEstatistica(peca) {
    estatisticas.forEach ( (elemento) => {
        elemento.textContent = parseInt (elemento.textContent) +pecas[peca] [elemento.dataset.estatisticas]
    })
}