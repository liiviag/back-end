var mediaAluno = require('./modulo/medias.js');

var readline = require('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Nome do ALUNO: \n', function (nome) {

    let nomeAluno = nome;

    entradaDados.question('Nome do Professor: \n', function (professor) {
        let nomeProfessor = professor;

        entradaDados.question('Sexo do Professor: \n', function (sxProfessor) {
            let sexo = sxProfessor;

            entradaDados.question('Sexo do Aluno: \n', function (sxAluno) {
                let sexo = sxAluno;

                entradaDados.question('Nome do Curso: \n', function (curso) {
                    let cursoAluno = curso;

                    entradaDados.question('Nome da disciplina: \n', function (disciplina) {
                        let disciplinaAluno = disciplina;

                        entradaDados.question('Digite a nota1: \n', function (nota1) {
                            let valor1 = nota1;

                            entradaDados.question('Digite a segunda: \n', function (nota2) {
                                let valor2 = nota2;

                                entradaDados.question('Digite a terceira nota: \n', function (nota3) {
                                    let valor3 = nota3;

                                    entradaDados.question('Digite a quarta nota: \n', function (nota4) {
                                        let valor4 = nota4;
                                        let media;

                                        //Requisitos do sistema
                                        if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
                                            console.log('ERRO: Notas apenas de 0 á 100')

                                        } if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                            console.log('ERRO: Não é possível calcular se algum dado estiver vazio')
                                        } else if (nome == '' || professor == '' || sxProfessor == '' || sxAluno == '' || curso == '' || disciplina == '') {
                                            console.log('ERRO: Você deixou de entrar com algum dado')
                                        } else {
                                            resultado = mediaAluno.calcularMedia(nota1, nota2, nota3, nota4)
                                            console.log(resultado)
                                            entradaDados.close()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
