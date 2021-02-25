let entrada ="Cavalo"
let peça = entrada.toLowerCase();

switch (peça){
  case "peão":
    console.log('anda uma casa para frente e captura uma casa na diagonal a frente')
    break
  case "torre":
    console.log('anda quantas casas quiser em linha reta, captura em linha reta e para onde capturou')
    break
  case "bispo":
    console.log('anda quantas casas quiser em retas diagonais, captura em  retas diagonais e para onde capturou')
    break

  case "cavalo":
    console.log('anda 1 casa para qualquer diteção e 3 para outra formando a letra L, so captura onde a peça para')
    break

  case "rainha":
    console.log('soma os movimentos da torre e do bispo, podendo andar em linhareta para qualquer lado ou diagonal')
    break

  case "rei":
    console.log('anda uma casa para qualquer lado')
    break





}