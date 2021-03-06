// function palindromo(frase){
//   let array = frase.split('')
//   let palindr = true;
//   console.log(array.length);
//   for(let cont in array){
//     if (array[cont] != frase[(array.length-1)-cont])
//     palindr = false;
//   }
// return palindr;
// }
// let seilah = palindromo('arara1')
// console.log(seilah);

// function maior(valores){
//   let maior=0
//   let indice=0
//   for (let cont in valores){
//     if (maior < valores[cont]){
//       maior = valores[cont]
//       indice=cont
//     }
//   }
// return(indice)
// }
// let indice = maior([2, 3, 6, 7, 10, 1])
// console.log(indice)


// function menor(valores){
//   let menor=valores[0]
//   let indice=0
//   for (let cont in valores){
//     if (valores[cont]<menor){
//       menor = valores[cont]
//       indice = cont
//     }
//   }
// return indice
// }
// let retorno = menor([2, 4, 6, 7, 10, 0, -3])
// console.log(retorno) 


// function maiorNome (nomes){
//   let maior = 0
//   let indice = 0
//   for (let cont in nomes){
//     let nome = nomes[cont]
//     let array = nome.split('')
//     for (let contador in array){
//       if(maior < contador){
//         maior = contador
//         indice = cont
//       }
//     }
//   }
//   return(nomes[indice])
// }
// let seilah = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
// console.log(maiorNome(seilah))


// function maisRepete (numeros){
//   let numero = {
//   };
//   for (let cont in numeros) {
//     let maior = 0
//     for (let index in numeros) {
//       if (numeros[index] == numeros[cont]){
//         maior += 1
//         numero[numeros[cont]] = maior
//       }
//     }
//   }
//   let compara = 0
//   let index = 0
//   for (let cont in numero){
//     if(numero[cont] > compara)
//     index = cont
//     compara = numero[cont]
//   }
//   return(index)
// }

// console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]))


// function soma(numero){
//   let somaNumeros=0
//   for(let cont=0; cont < numero+1; cont++){
//     somaNumeros += cont
//   }
//   return(somaNumeros)
// }
// console.log(soma(5))

function verificaPalavra(palavra, fim) {
  palavra = palavra.split('');
  fim = fim.split('');
  controle = true;
  for (let i = 0; i < fim.length; i++) {
    if (palavra[palavra.length-fim.length+i] != fim[i]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaPalavra("trybe", "be"))



// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be") ;
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan") ;
// Retorno esperado: false