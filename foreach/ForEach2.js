//faça um programa onde descubra a idade media dos alunos.
// Significado de ForEach - unir ele tem um poder de percorrer os itens do array ,recebe 3 parametros 
//Segunda de fazer

const students=[
    {name: "laura", age:21},
    {name:"isabely", age: 21},
    {name:"icaro", age: 29},
    {name:"rodrigo",age:29}
];
let allStudentsAge=0
students.forEach((student,index)=>{
    console.log(`O aluno se chama ${student.name}, tem ${student.age}, e esta na posição ${index} do array ` )
} )
