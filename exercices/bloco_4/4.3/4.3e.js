let numero = 13
let simbolo = "*"
let espaco = " "
let imprime = []

for (let cont=0;cont<(numero/2)-1;cont++){
  imprime = []
  for (let contador=cont;contador < (numero-1)/2; contador++){
  imprime += espaco
  }
  imprime+= simbolo
  if (cont>0){
      for (let contador = 0; contador<cont;contador++){
        imprime+=espaco 
        if (contador>0)
        imprime+=espaco
      }
    imprime += simbolo
  }
  console.log(imprime)
}
imprime=[]
for (let cont = 0; cont<numero;cont++){
  imprime += simbolo 
}
console.log(imprime)



