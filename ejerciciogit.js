var num=document.querySelector("input");
var resultado=document.querySelector("p");
var boton=document.querySelector("button");

boton.addEventListener("click", eventoClickOperacion);

function eventoClickOperacion(){
  num=num.value;
resultado.innerHTML=num;

}
