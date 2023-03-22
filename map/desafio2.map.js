//2 exercicio
// voce vai ter o nome dos estudantes,teve um teste e cada teste enviou uma nota se ele tirou 7 ou mais esta aprovado, se nao esta reprovado.
//precisa ultilizar o MAP

const students=[
{name:"Laura", testGrade: 7}, // aqui esta os alunos e as notas
{name:"Rodrigo", testGrade: 6},
{name:"Paloma", testGrade: 5},
{name:"Lucas", testGrade: 8},
{name:"Arthur", testGrade: 9},
{name:"Isabely", testGrade: 10},
{name:"Icaro", testGrade: 4},
];

const newstudents=students.map((student)=>{   //chamamos uma nova função onde chammos o map e dentro dele colocamos o valor de student
    const newstudents={                        //chamamos novamente a nova função e objetos 
        name: student.name,  // aqui estamos falando que queremos o nome de cada estudante 
        finalResul:student.testGrade >7 ? "approved" : "desapproved"   //e que queremos que o computdaor analise os alunos e as notas se a nota for maior que 7 ele vai devolver aprovado se for menor vai ser reprovado

      }

    return newstudents    //vai retornar o valor como fizemos o uso das chaves ele nao roda automatico
})
console.log(newstudents)   //aqui estamos chamando a função e pedindo que ela devolva oque pedimos