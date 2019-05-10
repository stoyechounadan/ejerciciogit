var num=document.querySelector("input");
var resultado=document.querySelector("p");
var boton=document.querySelector("button");

boton.addEventListener("click", eventoClickOperacion);

function eventoClickOperacion(){
  num=num.value;
  var result = calculaExpresion(num);
  resultado.innerHTML=result;
//for(i=0, i<num.length, i++){
//  if(num[i]=="+"){



}


function calculaExpresion(exp){
  var operador=exp.indexOf("+");
  var num1=exp.substring(0,operador);
  var num2=exp.slice(operador+1);
  num1=parseInt(num1);
  num2=parseInt(num2);
  var r= num1+num2;
  return r;
}
