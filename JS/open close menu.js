
var open = document.getElementById("abrir-nav");
var close = document.getElementById("fechar-nav");


open.addEventListener("click", abrir);
close.addEventListener("click", fechar);

function abrir(){
  document.getElementById('mynav').style.width = "30%";
}

function fechar(){
  document.getElementById('mynav').style.width = "0px";
}