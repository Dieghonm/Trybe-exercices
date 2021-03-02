let asteristico = "*"
let numero = 5
let espaço = " "
let contAsteristico = numero
let contEspaços = 1



 for (let contador = 0; contador<numero; contador++){
  let imprimir = ""
  for (let cont = contEspaços; cont<numero; cont++){
    imprimir = imprimir + espaço
  }
  contEspaços++
  contAsteristico = contAsteristico -1
  for (let cont = contAsteristico; cont<numero; cont++){
  imprimir = imprimir + asteristico
  }

  console.log(imprimir)
 }
