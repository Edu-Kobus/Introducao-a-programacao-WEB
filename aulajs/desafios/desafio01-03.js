//Usuários e tecnologias

const devs = [
    {nome: 'Eduardo', skills:["SQLite3", "NodeJS"] },
    {nome: 'Carlos', skills:["Ionic3", "ReactNative"] },
    {nome: 'Luke', skills:["SQLServer, PHP"] }
];


    for(let usuario of devs) {
        console.log(`${usuario.nome} trabalha com ${usuario.skills.join(', ')}`)
    }

    //Buscando a tecnologia
    function checarSkill(usuario){
        for (let tecnologia of usuario.skills){
            if (tecnologia == 'NodeJS') return true
        }

        return false
    }

    for (let i = 0; i < devs.length; i++){
        const usuarioTrabalhaComNodeJS = checarSkill(devs[i])

        if(usuarioTrabalhaComNodeJS) {
            console.log(`O usuário ${devs[i].nome} trabalha com NodeJS`)
        }
    }

    //sina de despesas e receitas

    const usuarios = [
        {
            nome:"Juninho",
            receitas: [30, 45.8, 600.5, 140.4],
            despesas: [845.7, 1000.6, 30.4]
        },
        {
            nome: "Johny",
            receitas: [95454.60, 300.4, 74],
            despesas: [321.7, 414.4, 213.0, 454.65]
        },
        {
            nome:"Cristiane",
            receitas: [30111.1, 300.0, 89.50, 50.6],
            despesas: [704.4, 151.12, 132.7]
        }
    ]

    function calculaSaldo(receitas, despesas) {
        const somaReceitas = somaSaldo(receitas)
        const somaDespesas = somaSaldo(despesas)

        return somaReceitas - somaDespesas
    }

    function somaSaldo(numeros) {
        let soma = 0

        for (let numero of numeros){
            soma = soma + numero
        }
        return soma
    }

    for (let usuario of usuarios) {
        const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

        if (saldo > 0) {
            console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
        } else {
            console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
        }
    }
