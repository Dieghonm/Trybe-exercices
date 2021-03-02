let n = 9
let asteristico = ["*"]
let espaco = []

for (let cont = 0; cont < n; cont++){
    espaco.push(' ');
}

for(let cont = 0; cont < n/2; cont++){
  console.log(espaco.join('')+asteristico.join(""));
  asteristico.push('**');
  espaco.pop();
}
