// /exercicios 4.1 do 1 ao 4/ 

let valorA = 5
let valorB = 10
let valorC = 20

console.log(valorA + valorB)
console.log(valorA - valorB)
console.log(valorA * valorB)
console.log(valorA / valorB)
console.log(valorA % valorB)

console.log('------------------------')

if (valorB > valorA){
  console.log(valorB)
}else{
  console.log (valorA)
}

console.log('------------------------')

if (valorB > valorA) {
  if (valorB > valorC){
    console.log(valorB)
  }else{
    console.log(valorC)
  }
}else if(valorC > valorA){
  console.log (valorC)
}else{
  console.log(valorA)
}

console.log('------------------------')

