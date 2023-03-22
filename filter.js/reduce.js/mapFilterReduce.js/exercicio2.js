//vai filtrar as empresas  mais antigas

const companies=[
    { name:'Samsung', marketValue: 50, Ceo: 'laura giovanna', foundeOn:1938},
    { name:'Samsung', marketValue: 415, Ceo: 'laura giovanna', foundeOn:1938},
    { name:'Samsung', marketValue: 117, Ceo: 'laura giovanna', foundeOn:1976},
    { name:'Samsung', marketValue: 383, Ceo: 'laura giovanna', foundeOn:2000},
    { name:'Samsung', marketValue: 30, Ceo: 'laura giovanna', foundeOn:2008},
    { name:'Samsung', marketValue: 845, Ceo: 'laura giovanna', foundeOn:2010}
    ];

    const newcompanies2=companies.filter(client =>{
      return client.foundeOn <=1976
    })
    console.log(newcompanies2)