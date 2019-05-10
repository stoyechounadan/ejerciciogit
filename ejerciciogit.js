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
  var operadorMas=exp.indexOf("+");
  var operadorMenos=exp.indexOf("-");
  var operadorPor=exp.indexOf("*");
  var operadorEntre=exp.indexOf("/");

if(operadorMas!=-1){
  var num1=exp.substring(0,operadorMas);
  var num2=exp.slice(operadorMas+1);
  num1=parseInt(num1);
  num2=parseInt(num2);
  var r= num1+num2;
  return r;
}else if(operadorMenos!=-1){
  var num1=exp.substring(0,operadorMenos);
  var num2=exp.slice(operadorMenos+1);
  num1=parseInt(num1);
  num2=parseInt(num2);
  var r= num1-num2;
  return r;
}else if(operadorPor!=-1){
  var num1=exp.substring(0,operadorPor);
  var num2=exp.slice(operadorPor+1);
  num1=parseInt(num1);
  num2=parseInt(num2);
  var r= num1*num2;
  return r;
}else if(operadorEntre!=-1){
  var num1=exp.substring(0,operadorEntre);
  var num2=exp.slice(operadorEntre+1);
  num1=parseInt(num1);
  num2=parseInt(num2);
  var r= num1/num2;
  return r;
}



}
