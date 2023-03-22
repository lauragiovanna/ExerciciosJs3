// quero saber a soma de todo o caixa do exp ultilizando o reduce 

const companies=[
    {name:'samsung', marketValue:50, CEO:'kim',foundedOn:1938},
    {name:'microsoft', MarketValue: 415,Ceo:'satya',FoundeOn: 1975},
    {name:'facebook', marketValue: 383, ceo:'mark',foundeOn:2006}
        
    ];
    const list=[50,415,383];
    const newlist=list.reduce((acc,current)=>{
        return acc +current
    }) 
    console.log(newlist)