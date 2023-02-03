//Dados do projeto

var readline = require('readline')

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entradaDados.question('Calculadora Inteligênte', function(nome){
    let nomeCalculadora = nome;

    entradaDados.question('Escolha a função que você usará \n 1-Soma \n 2-Subtrair \n 3-Multiplicar \n 4-Dividir \n Escolha: ', function(funcao){
        let fator = funcao;

        entradaDados.question("Digite um número para fazer seu cálculo: ", function(num1){
            let nume1 = num1.replace(',','.');
            
            entradaDados.question("Digite um segundo número para fazer seu cálculo: ", function(num2){
                let nume2 = num2.replace(',','.')
                let resolucao

                

                if(funcao == 1){
                    resolucao = parseFloat(num1) + parseFloat(num2)
                    console.log('\nResultado: ', resolucao.toFixed(1))
                }
                else if(funcao == 2){
                    resolucao = parseFloat(num1) - parseFloat(num2)
                    console.log('\nResultado: ', resolucao.toFixed(1))
                }
                else if(funcao == 3){
                    resolucao = parseFloat(num1) * parseFloat(num2)
                    console.log('\nResultado: ', resolucao.toFixed(1))
                }
                else if(funcao == 4){
                    resolucao = parseFloat(num1) / parseFloat(num2)
                    console.log('\nResultado: ', resolucao.toFixed(1))
                }

                //Mensagens de ERROS
                if(num1 == '' || num2 == '')
                {
                    console.log('ERRO: Você deixou de entrar com algum fator!')

                } else if(isNaN(num1) || isNaN(num2))
                {
                    console.log('ERRO: Você não digitou um número válido!')

                }
                })
            })   
        })
    })
