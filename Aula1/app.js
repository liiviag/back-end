//Comentário em Linha
/*
    Comentário 
        em 
    Bloco
*/

//Permite exibir no terminal uma mensagem
console.log('Testando o Node.JS');

//Import da biblioteca que permite entrada e dados via teclado
var readline = require('readline');

//Criamos um objeto ou variável que vai ser especialista na entrada
//de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//CallBack -> Uma função CallBack permite que na própria linha da programação
//seja uma variável, um processamento, a chamada de um método possa acontecer
//um retorno de dados automaticamente, sem precisar sair deste processamento

//Cria uma interação com o usuário para entrada de dados.
//Após o usuário digitar o conteúdo, o objeto entradaDados permite
//retornar o conteúdo digitalizado por ser utiliado. Isso acontece através
//de uma função CallBack
entradaDados.question('Favor digitar o seu nome: \n', function(nome){
    console.log('Bem vindo, ' + nome + ' ao servidor Node.JS!');
});

