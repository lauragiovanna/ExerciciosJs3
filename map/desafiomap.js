// 1 exercicio 
//voce vai ter essa lista voce vai pegar essas pessoas que podem ser vip ou nao  , se é verdadeiro vai pro setor black e for false vai pro green 
//precisa ultilizar o Map

const list=[                                  
{name:"Laura", vip: true},                       //queremos descobri se é verdadeiro ou falso ,se for verdadeiro ira imprimir na tela black
{name:"Rodolfo", vip: false},                 //se for falso vai imprimir green
{name:"Icaro", vip: true},
{name:"Isabely", vip: true},
{name:"Pamela", vip: false},
{name:"Paloma", vip: true},
{name:"Tania", vip: false}

];
const newarray=list.map((client)=>{ //chamamos uma nova função e ultilizamos arrow functions e map dentro do map colocamos o client 
    const newarray={                           //chamamos a nova função eadicionamos o objeto e colocamos oque queremos saber no caso o nome ,e o sector para saber se é green ou black
        name: client.name,
        vip: client.vip,
        sector: client.vip ? "black" : "green"   //aqui ultilizamos o ternario estamos falando com o computador que se o client for veradeiro imprima black se nao for imprima green
    }
    return newarray                    // chamamos o retorno
})
console.log(newarray) //chamamos o console.log para imprimir as informações na tela.