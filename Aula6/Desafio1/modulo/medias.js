/*********************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares
 * Data: 10/02
 * Autor: Ana Livia
 * Versão: 1.0
 ********************************************/

const calcularMedia = function (nota1, nota2, nota3, nota4) {
    let numero1 = Number(nota1)
    let numero2 = Number(nota2)
    let numero3 = Number(nota3)
    let numero4 = Number(nota4)
    let media


    media = (numero1 + numero2 + numero3 + numero4) / 4
    return media.toFixed(2)

}