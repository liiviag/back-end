/***************************************************************
 * Objetivo: Arquivo destinado ao processamento do calculo de uma tabuada 
 * Data: 09/02
 * Autor: Ana Livia
 * Versão: 1.0
 ****************************************************************/

var tabuada = require('./modulo/tabuada')

var readline = require ('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Qual o mínimo multiplicador: \n', function(multiplicando) {
    let mult = multiplicando
})

entradaDados.question('Qual o máximo multiplicador: \n', function(maxMultiplicador) {
    let maxMult = maxMultiplicador
    let resultado
})
