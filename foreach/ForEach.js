
//faça um programa onde descubra a idade media dos alunos.
// Significado de ForEach - unir ele tem um poder de percorrer os itens do array ,recebe 3 parametros 

const students=[
    {name: "laura", age:21},
    {name:"isabely", age: 21},
    {name:"icaro", age: 29},
    {name:"rodrigo",age:29}
];
 let allStudentsAge=0 // idade de todos
 students.forEach((students,index,)=> { // ultilizamos a arrow functions e colocamos que queremos a variavel students e queremos a posição
    allStudentsAge+=students.age // aqui queremos a idade de todo mundo somado com o students e o resultado multiplicado pela idade
 })
 const averageAge=allStudentsAge / students.length // aqui eu quero descobir a idade media entao vou pegar a soma de todas as idades e em seguida multiplicar pela quantidade arrays como desobrimos isso (ultilizando o length)
 console.log(`a media das idades é ${averageAge.toFixed(0)}`) // estamos chamando a função e falando que nao quremos numero decimal

