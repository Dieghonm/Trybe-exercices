let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let cont = 0; cont < numbers.length; cont++){
console.log(numbers[cont])
}

let soma = 0

for(let cont = 0; cont < numbers.length; cont++){
  soma = soma + numbers[cont]
}
console.log('A soma e' + soma)

soma=0
for(let cont = 0; cont < numbers.length; cont++){
  soma = soma + numbers[cont]
}
let media = (soma/numbers.length)
console.log(media)
if(media>20){
  console.log("valor maior que 20")
}else("valor menor ou igual a 20")
let maior = 0
for(let cont = 0; cont< numbers.length; cont++){
  if (maior<numbers[cont]){
    maior = numbers[cont]
  }
}
console.log('O maior numero e o'+ maior)

let impar = 0
for(let cont = 0; cont< numbers.length; cont++){
  impar+=(numbers[cont])%2
}
console.log(impar + " numeros impares")

let menor = 0
for(let cont=0; cont<numbers.length;cont++){
  if(menor = 0){
    menor=numbers[cont]
  }else if(menor > numbers[cont]){
    menor = numbers[cont]
  }
}
console.log("o menor numero e o " + menor)





