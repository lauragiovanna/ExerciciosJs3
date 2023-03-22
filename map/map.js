//Curiosidades do MAP
//sao muito usado
//cria um novo array a partir do arrail que voce criou
//cria um novo array com a mesma quantidade de itens do array que voce cirou primeiro
//aceita 3 parametros (item do array,index--> posição, array completo)
//voce tem que colocar o return para retorna

const students=[
    {name: "laura", age:21},
    {name:"isabely", age: 21},
    {name:"icaro", age: 29},
    {name:"rodrigo",age:29}
];

const newstudents= students.map((student)=>{ //ultilizamos a arrow functions e colocamos o nome da nossa variavel de novos estudantes
        const newstudents={
            name: student.name +  "da silva", // vamos ultilizar objetos aqui em cada nome vamos adicionar da silva
            age:  student.age -3  // vamos diminuir -3 em cada idade
        }
          return newstudents
    })
    console.log(students) //idade atual das pessoas
    console.log(newstudents) //idade -3 de cada um



