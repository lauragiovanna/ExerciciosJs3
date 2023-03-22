//o novo array tera numeros pares e divisiveis por 5

const list=[20,3,234,12,17,541,6,87,275,1000]; //para saber se é par ou nao dividimos por 2 se sobrar resto é impar se nao sobrar é par
const newlist=list.filter(number =>{
if(number % 2 !==0) return false //se meu numero dividio por 2 for diferente de 0 é impar se for isso retorna false
if(number %5 !==0) return false // se meu numero for dividio por 5 ele n pode sobrar resto se sobrar resto retorno falso
return true   // ele passando pelos dois filtros e dando negativo temos mais um 
})
console.log(newlist)


