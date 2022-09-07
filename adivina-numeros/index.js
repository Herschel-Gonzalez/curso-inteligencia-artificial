var cadenaFinal = "";

var salida = document.getElementById("cadenaUsuario");
var contadorDigitos = 0;
var cadenaAleatoria = document.getElementById("cadenaAleatoria");
var resultado = document.getElementById("resultado");
var mensaje = document.getElementById("mensaje");


function escribi0() {
    if (contadorDigitos<6) {
        cadenaFinal+="0";
        salida.innerText=cadenaFinal;
        contadorDigitos++;
    }else{
        comparar();
    }
    
}

function escribi1() {

    if (contadorDigitos<6) {
        cadenaFinal+="1";
        salida.innerText=cadenaFinal;
        contadorDigitos++;
    }else{
        comparar();
    }

    
}

function escribi2() {

    if (contadorDigitos<6) {
        cadenaFinal+="2";
        salida.innerText=cadenaFinal;
        contadorDigitos++;
    }else{
        comparar();
    }

    
}

function escribi3() {
    if (contadorDigitos<6) {
        cadenaFinal+="3";
        salida.innerText=cadenaFinal;
        contadorDigitos++;
    }else{
        comparar();
    }
}

function escribi4() {
    if (contadorDigitos<6) {
        cadenaFinal+="4";
        salida.innerText=cadenaFinal;
        contadorDigitos++;
    }else{
        comparar();
    }
}

function escribi5() {
    if (contadorDigitos<6) {
        cadenaFinal+="5";
        salida.innerText=cadenaFinal;
        contadorDigitos++;
    }else{
        comparar();
    }
}

function comparar() {
    var min = 100000;
    var max = 999999;
    var numeroAleatorio = Math.floor(Math.random()*(max-min+1)+min);
    var aleatorio = String(numeroAleatorio);
    cadenaAleatoria.innerText = aleatorio;
    var res = "";

    //descomponemos las cadenas
    var aciertos = 0;
    for (let i = 0; i < 6; i++) {
        if(cadenaFinal[i]==aleatorio[i]){
            aciertos++;
            res+=cadenaFinal[i];
        }else{
            res+="X";
        }
        
    }

    if (aciertos==6) {
        mensaje.innerText = "FELCIDADES! GANASTE!";
    }else{
        mensaje.innerText="Fallaste :(";
    }

    resultado.innerText = res;

}
