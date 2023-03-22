//tem outras formas de ultilizar o map ,podemos criar uma função e usar apenas o nome dela na hora de chamar 

//exp1
const numbers1=[1,2,3,4]
const double1=number=> number*2 //chamamos a função 
const newarraydouble=numbers.map(double) //aqui colocamos apenas com o nome dentro de outra função sem precisar criar ela separada e jogar aqui da no mesmo eu colocar apenas o nome  
console.log(newarraydouble)


//exp2
const numbers2=[1,2,3,4] // nesse caso aqui ele vai multiplicar e o resultado vai somar 
const double2=number=> number*2
const sum=number=>number +10
const newarraythree=numbers2.map(double2).map(sum) //chmamos as funções sem precisar escrever novamente 
console.log(newarraythree)

//exp3
const numbers3=[10,20,30,40] // nesse caso aqui ele vai multiplicar e o resultado vai somar 
const double3=number=> number*2
const sum2=number=>`R$ ${number.toFixed(2)}` //ele vai transformar em numeros decimais exp 20,00
const newarrayfor=numbers3.map(double3).map(sum2) //chmamos as funções sem precisar escrever novamente 
console.log(newarrayfor)