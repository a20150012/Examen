var nombre = prompt("Bienvenido/a al cuestionario sobre los mares . Escribe tu nombre:");
var p1 = prompt("¿Cuánta agua hay en la Tierra?\A:Alrededor de un 41% de la superficie terrestre es agua.\B: Alrededor de un 51% de la superficie terrestre es agua\C:Alrededor de un 71% de la superficie terrestre es agua * ");

var c = 0;
Var i =0 ;
if(p1 =="B"){
    var c = c + 1;
  
}else if (p1 == "A"){
    var i = i+ 1; 
}else if (p1 == "C"){
     i = i+ 1;
}else{
    alert( No es una opción válida )