let custo = 100
let venda = 200
let imposto = (custo*.2)
let custototal = imposto+custo

if(custo>0 && venda>0){
  console.log((venda-custototal)*1000)
}else{
  console.log(ERRO)
}