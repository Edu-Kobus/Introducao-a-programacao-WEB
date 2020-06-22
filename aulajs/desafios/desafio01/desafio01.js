// DESAFIO 01

// CÁLCULO DE IMC 
const nome = "Eduardo";
const peso = 62;
const altura = 1.68;
const sexo = "M";

const imc = peso / (altura * altura);

let message = ""

if(imc >= 30){

    message = `${nome} você está acima do peso !!! precisa cuidar mais da sua saúde. ` 
}
   
    else{
    message = `${nome} Você está abaixo do peso!`
    }

    console.log(message)


//CÁLCULO DE APOSENTADORIA
const nome = "Eduardo";
const sexo = "M";
const idade = 20;
const contribuicao = 4;

const aposentadoria = idade + contribuicao

//Estar variáveis irão retornar true ou false
const homem = sexo == 'M' && contribuicao >= 35 && aposentadoria >= 95

const mulher = sexo == 'F' && contribuicao >= 30 && aposentadoria >= 85

if(homem || mulher){
    console.log(`${nome}, você pode se aposentar!!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}






