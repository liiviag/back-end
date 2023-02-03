/*********************************************
 * Objetivo: Projeto para realizar calsulos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 03/02
 * Autor: Ana Livia
 * Versão: 1.0
 *********************************************/

//Para importar, tem que chamar a função
var matematica = require('./modulo/calculadora.js')

//Import da biblioteca de entrada de dados
var readline = require ('readline')

//Cria um objeto para manipular as entradas de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

//Valor 1
entradaDados.question('valor: \n', function(numero1) {

    let valor1 = numero1.replace(',','.')

    //Valor 2
    entradaDados.question('valor2: \n', function(numero2){
        //Replace método da classe string que localiza um caracter e substitui por outro
        let valor2 = numero2.replace(',','.')

        /* alguns exemplos de metodos importantes de classe String
        replace, substring (cortar ums string), lenght(contar quantos caracter tem), 
         upercase(), lowrcase(transformar maiusculo e minusculo), indexof, trin(cortar e colar) */


            //Tipo de operação matemática
            entradaDados.question('Escolha uma opção matemática: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n', function (tipoCalculo) {

                let operacao = tipoCalculo.toUpperCase()

                let resultado

                //Validação de entrada de dados vazia 
                if( valor1 == '' || valor2 == '' || operacao == ''){
                    console.log('ERRO: Não é possível calcular se algum dado estiver vazio')
                
                //}else if (typeof(valor1) != 'number')
                //Verifica qual tipo de dado é o elemento que você está usando
                //O isNaN -> Identifica o tipo de conteudo independente do tipo de dados
                //typeof() -> Identifica o tipo de dados de conteudo de um elemento, ex:
                //let x = 10
                //console.log(typeof(x)) 

                }else if(isNaN(valor1) || isNaN(valor2)){
                    console.log('ERRO: Não é possível calcular se os dados digitados não forem números.')
                } else {

                    //toUpperCase() -> Converte uma string MAIUSCULA
                    //toLowerCase() -> Converte uma string em minusculo
                    
                    resultado = matematica.calculadora(valor1, valor2, operacao)
                    if(resultado != false) {
                        console.log(resultado)
                    } else entradaDados.close()
                    
                }
            })
        })
    })