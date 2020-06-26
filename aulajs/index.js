
/* Criando um programa que calcula a média
das notas entre os alunos e envia
mensagem do cálculo da média */

//colocando objeto dentro de um array
const alunosDaTurmaA = [
    {
        nome:"Eduardo",
        nota: 9.8
    },
    {
        nome: "Rafaela",
        nota: 5
    },
    {
        nome: "Jesus",
        nota: 10
    },
    {
        nome:"Sara",
        nota: 5
    }
]

const alunosDaTurmaB = [
    {
        nome:"Mateus",
        nota: 7
    },
    {
        nome: "João",
        nota: 3
    },
    {
        nome: "Simão",
        nota: 2.5
    },
    {
        nome: 'Saulo',
        nota: 10
    }
]


// funções e métodos:

function calculaMedia(alunos) {

    let soma = 0; // deve ficar fora do escopo do for
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    
    const media = soma / alunos.length //irá somar as notas e dividir pelos alunos
    return media //irá retornar a media para a função
}

const media1 = calculaMedia(alunosDaTurmaA) //reaproveita o cálculo da média
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {

    if (media > 7) {
        console.log(`A media da turma ${turma} foi de ${media}, Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 7`)
    }
}

enviaMensagem(media1, 'turmaA') //reaproveitar parametro da variável
enviaMensagem(media2, 'turmaB')



