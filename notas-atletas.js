let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];

let nomeAtletas = []
let notasAtletas = []
let mediaNotas = []

for (let i = 0; i < atletas.length; i++){
   
    nomeAtletas = atletas.map(function(nomes)   {
        return nomes.nome
    })

    notasAtletas = atletas.map(function(notas)   {
        let total = notas.notas
        total.sort(function(a, b)   {
            return a - b;
        })
        return total
    })
}

for(let i = 0; i <atletas.length; i++)  {
    console.log(`Atleta: ${nomeAtletas[i]}`)
    console.log(`Notas Obtidas: ${notasAtletas[i]}`)
    let eliminaMaiorMenor = notasAtletas[i].slice(1, -1)
    let soma = eliminaMaiorMenor.reduce(function(total, atual) {
        return (total + atual)
    })
    let media = soma/eliminaMaiorMenor.length
    console.log(`Média Válida: ${media}`)
    console.log()
}