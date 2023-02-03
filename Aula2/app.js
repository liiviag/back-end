/******************************************************
*Objetivo: Calcular a media de 4 notas escolares
*Autor: Ana Lívia
*Data: 27/01/2023
*Versão: 1.0
*******************************************************/

//Import da biblioteca de dados
var readline = require('readline');

//Cria o objeto para ser especialista em entrada
//de dados pelo teclado
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

/**
 * Criação de variáveis
    * var -> cria um espaço em memória de escopo global para o projeto, ou seja,
        * essa variável poderá ser usada em qualquer parte do arquivo (várias funções);
    * let -> cria um espaço em memória de escopo local para o projeto, ou seja,
        * essa variável poderá ser usada somente dentro da função que foi criada;
    * const -> cria um espaço em memória de escopo local ou global para o projeto, ou seja,
        * essa constante poderá seer usada em qualquer parte do projeto e nunca sofrerá
            * alteração;
 * 
 * 
 */

//Põe a mensagem na tela, e espera um retorno
//Cria um argumento ex:"nome"

//Função de CallBack para entrar o nome do aluno
entradaDados.question('Digite seu nome: \n', function(nome){
    //Recebe o valor digitado pelo teclado
    let nomeAluno = nome;

    //Função de CallBack para entrar a nota1
    entradaDados.question('Digite a nota1: \n', function(nota1){
        let valor1 = nota1;

        //Função de CallBack para entrar a nota2
        entradaDados.question('Digite a nota2: \n', function(nota2) {
            let valor2 = nota2;
            

            entradaDados.question('Digite a nota3: \n', function(nota3){
                let valor3 = nota3;
                

                entradaDados.question('Digite a nota4: \n', function(nota4){
                    let valor4 = nota4;
                    let media;

                    /*
                        Conversão de tipos de dados

                        parseInt() ou Number.parseInt() -> Converte um string em inteiro
                        parseFloat() ou Number.parseFloat() -> Converte uma string em real

                        Number() -> Converte uma string para número, conforme a entrada do valor 
                            o JS define se será inteiro ou real

                        Operadores de comparação
                            == (verifica a igualdade entre conteúdos);
                            !== (verifica a diferença entre conteúdos);
                            === (verifica a igualdade entre conteúdos e tipos de dados(IGUALDADE OU DESIGUALDADE));
                            !== (verifica a igualdade entre conteúdos e igualdades de tipos de dados)
                            ==! (verifica a igualdade entre conteúdos e diferença de tipos de dados)
                                Ex:
                                    0 === 0 V
                                    0 === '0' F
                                    0 = 0 V
                                    '0' === 0 F
                                    0 = '0' V
                                    '0' = 0 V

                            < (Menor);
                            > (Maior);
                            <= (Menor ou igual);
                            >= (Maior ou igual);

                        Operadores Lógicos (Colocado de forma errada pode dar erro na operação)
                            E        &&  AND
                            OU       ||  OR
                            NEGAÇÃO  !   NOT
                     */

                        //Validação para entrada vazia
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '')
                    {
                        console.log('ERRO: Você deixou de entrar com algum valor!')

                        //Validação para entrada de texto (is)
                    }else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4))
                    {
                        console.log('ERRO: Você não digitou um número válido!')

                    }//Validação para  notas
                    else if(valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0) {

                        console.log('ERRO: Notas apenas de 0 á 10')

                    }else if(valor1 > 10 || valor2 > 10 ||valor3 > 10 ||valor4 > 10) {

                        console.log('ERRO: Notas apenas de 0 á 10')
                    }else{ 
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;

                    //Validação média
                        if(media > 7){
                            console.log('Aluno Aprovado')
                        } else
                        {
                            console.log('Aluno Reprovado')
                        }
                        console.log('Media do aluno:' + media.toFixed(1))
                    }
                
                })
            });
        });
    });

});
