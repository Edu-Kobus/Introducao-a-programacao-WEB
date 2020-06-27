
/* Criando um programa que calcula a média
das grades entre os students e envia
mensagem do cálculo da média */

//colocando objeto dentro de um array
const classA = [
    {
        name:"Eduardo",
        grade: 9.8
    },
    {
        name: "Rafaela",
        grade: 5
    },
    {
        name: "Jesus",
        grade: 10
    },
    {
        name:"Sara",
        grade: 5
    }
]

const classB = [
    {
        name:"Mateus",
        grade: 7
    },
    {
        name: "João",
        grade: 3
    },
    {
        name: "Simão",
        grade: 2.5
    },
    {
        name: 'Saulo',
        grade: 10
    }
]

// funções e métodos:

function calculateAverage(students) {

    let sum = 0 // deve ficar fora do escopo do for
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    
    const average = sum / students.length //irá sumr as grades e dividir pelos students
    
    return average //irá retornar a average para a função
}

function sendMessage(average, turma) {
    if (average > 7) {
        console.log(`${turma} average: ${average} congrats!`)
    } else {
        console.log(`${turma} average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false //boolean
        if (student.grade < 7) {
            student.flunked = true;
    }
}

function sendMessageFlunked(student) {
    if(student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsflunked(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendMessageFlunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'class A')
sendMessage(average2, 'class B')

studentsflunked(classA)
studentsflunked(classB)