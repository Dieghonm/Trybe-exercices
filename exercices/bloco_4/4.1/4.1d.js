let nota = 40
let situação


if(nota >= 80){
console.log("Parabéns, você foi aprovada(o)")
situação = "aprovado"
}else if(nota >= 60){
console.log("Você está na nossa lista de espera")
situação = "lista"
}else{
  console.log("Voce foi reprovado")
  situação = "reprovado"
}

switch (situação) {
  case "aprovado":
    console.log('aprovado')
    break

  case "lista":
    console.log('lista')
    break

  case "reprovado":
    console.log('reprovado')
    break
}