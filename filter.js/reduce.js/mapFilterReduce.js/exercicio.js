// voce vai adicionar 10% de valor em cada MarketValue
//lembre-se é um exercicio de map,filter e reduce 

const companies=[
{ name:'Samsung', marketValue: 50, Ceo: 'laura giovanna', foundeOn:1938},
{ name:'Samsung', marketValue: 415, Ceo: 'laura giovanna', foundeOn:1938},
{ name:'Samsung', marketValue: 117, Ceo: 'laura giovanna', foundeOn:1938},
{ name:'Samsung', marketValue: 383, Ceo: 'laura giovanna', foundeOn:1938},
{ name:'Samsung', marketValue: 30, Ceo: 'laura giovanna', foundeOn:1938},
{ name:'Samsung', marketValue: 845, Ceo: 'laura giovanna', foundeOn:1938}
];

const newcompanie= company =>{                                       // para esse exercicio resolvi ultilizar o map 
    company.marketValue=company.marketValue + company.marketValue/10 //criamos uma nova função fora do map onde a variavel vai ser igual a variavel.market value porque é o valor que queremos
    return company                //em seguida falamos pro computador que a variavel soma a mesma variavel e vamos adicionar mais 10% que na programaçao é (10/100)
}
const allmarketValue=(acc,company) => acc + company.marketValue // vamos cria uma função para somar o valor de todas as companias 
const allcompanies=company=>company.foundeOn < 2000     //aqui estamos pedindo que o computador mostre apenas as empresas antes de 2000
const mybestcompanies=companies.map(newcompanie).filter(allcompanies).reduce(allmarketValue,0) // em seguida criamos outra variavel ultilizando o map  e recebemos aquela que criamos que se chama newcompanie ,e tambem estamos chamando o filter para mostrar para gente apenas empresas antes de 2000 e vamos chamar a reduce tambem  para somar todo o marketvalue da empresa.
console.log(mybestcompanies)                     // aqui estamos pedindo para o computador que ele imprima o que esta na função.
