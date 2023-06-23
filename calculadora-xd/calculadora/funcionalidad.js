var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var recetearnumeros = document.getElementById('recetearnumeros');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var raiz = document.getElementById('raiz');
    var porcentaje = document.getElementById('porcentaje');
    var igual = document.getElementById('igual');
    var punto = document.getElementById('punto');
    var borrar = document.getElementById('borrar');
    var mclear = document.getElementById('memory-clear');
    var mplus = document.getElementById('memory-plus');
    var mless= document.getElementById('memory-less');
    var mrecall = document.getElementById('memory-recall');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}

uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
punto.onclick = function(e){
    resultado.textContent = resultado.textContent  + ".";
}
recetearnumeros.onclick = function(e){
    operacion = "C";
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "x";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "÷";
    limpiar();
}
raiz.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "√";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
punto.onclick = function(e){
    operandob = resultado.textContent;
    operacion = "."
    resolver();
}
borrar.onclick = function(e){
    operandob = resultado.textContent;
    operacion = "⌫"
    resolver();
}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = ""; 
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
      case "x":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "÷":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
      case "√":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "%":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "⌫":
        var texto = operandob;
        res = texto.substring(0, texto.length - 1);
        break;   
    }
    resetear();
    resultado.textContent = res;
  }
