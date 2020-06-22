
/* Criando um programa que calcula a média
das notas entre os alunos e envia
mensagem do cálculo da média */

//colocando objeto dentro de um array
const alunos = [
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
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

if (media > 5) {
    console.log(`A nota foi de ${media}, Parabéns`)
} else {
    console.log(`A média é menor que 5`)
}