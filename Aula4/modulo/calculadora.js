/****************************************
 * Objetivo: Arquivo de funções para cálculos matemáticos
 * Data: 03/02/2023
 * Autor: Ana Livia
 * Versão: 1.0
 ****************************************/

//Função que realiza cálculos matemáticos (SOMAR, SUBTRAIR, DIVIDIR, MULTIPLICAR)
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2
    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2
    } else if (operacao == 'DIVIDIR') {
        if (valor1 == 0)
            console.log('ERRO: Não é possivel realizar a divisão por 0')
        else {
            resultado = valor1 / valor2
        }
    }
    else {
        console.log('ERRO: A sua escolha matemática foi inválida')
        entradaDados.close()
    }

    //Validacao para tratar quando a variavel não for processada por algum problema
    if (resultado == undefined) {
        return false;

    } else {
        return resultado
    }
}

//Permite adicionar uma function no escopo global (public)
//As function que não estiverem aqui no exports, serão tratadas como escopo local (private)
module.exports = {
    calculadora

}