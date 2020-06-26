// Vetores e objetos

const usuario = {
    empresa:"Rocketseat",
    endereco: {
        nome:"Rua Guilherme Gembala",
        numero: 260
    }
};

console.log(`A ${usuario.empresa} está localizada em ${usuario.endereco.nome}, ${usuario.endereco.numero}`)




const programador = {
    nome: "Eduardo",
    idade: 20,
    skills:  [
        { nome: 'React.JS', especialidade: 'Desktop' }, 
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.skills[1].nome} com especialidade em ${programador.skills[1].especialidade}`)
