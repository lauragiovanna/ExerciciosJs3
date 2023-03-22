//podemos ultilizar o map com numeros tambem 
//lembrando que ele cria um array novo 
//sobre a função se caso voce fizer o uso das {} precisa colocar o return pra função retornar quando voce coloca tudo na mesma linha ele faz automatico
//se tiver apenas um parametro n precisa car virgula
//
const numbers=[1,2,3,4]
const newarray=numbers.map((number)=>{
    return number*4
})
console.log(newarray)// o resultado vai ser uma nova array ele vai multiplicar a 1 por 4 
