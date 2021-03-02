let espaço = " "
let numero = 9


for(cont=0; cont < numero/2; cont++){
  let imprime = []
  let imprimirespaço = ""
  let imprimeasteristico = '*'
  for (contador=cont;contador < (numero-1)/2; contador++){
  imprimirespaço += espaço
  }
  for (index=0 ;index < cont; index+=1){
    imprimeasteristico += "**"
  }
  imprime=imprimirespaço+imprimeasteristico+imprimirespaço
  console.log(imprime)
}