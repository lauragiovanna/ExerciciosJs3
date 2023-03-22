// no novo array so vai ter as empresas fundadas depois de 1975
// e que tenham mais de 2 milhoes de dolares no mercado

const companies=[
{name:'samsung', marketValue:50, CEO:'kim',foundedOn:1938},
{name:'microsoft', MarketValue: 415,Ceo:'satya',FoundeOn: 1975},
{name:'facebook', marketValue: 383, ceo:'mark',foundeOn:2006}
    
];

    const newcompanies=companies.filter(client =>{
       if (client.foundeOn <= 1975) return false // se fo menor ou igual a 197 retorna false  ela tem que ser maior
       if (client.marketValue <= 200) return false // se for menor ou igual a 200 retorna false
//ou pode  resolver assim tambem 
// if(client.foundOn > 1975 && client.marketValue > 200) return true 
//else return false --> prefiro essa.
       return true //senao passando pelos dois filtros retorna verdadeiro
    })
    console.log(newcompanies)
