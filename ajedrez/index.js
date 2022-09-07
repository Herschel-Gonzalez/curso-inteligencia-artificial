

//document.getElementById("88").innerHTML='<img src="./imagenes/reina.png" height="20" width="25" />';

var tablero = [

    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    
];

function colocarReinas() {

    
    
    
    var numeroAleatorio = Math.floor(Math.random()*63);
    
    // i filas 
    // j columnas
    
    var contador = -1;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            contador++;
            if (contador==numeroAleatorio) {
    
                if (tablero[i][j]==0) {
                    document.getElementById(""+numeroAleatorio).innerHTML='<img src="./imagenes/reina.png" height="20" width="25" />';
                    tablero[i][j]=1;
    
                    //cancelamos el camino de la columna
                    anularColumna(j);
                    anularFila(i);
    
                    //anulamos las diagonales
                    anularDiagonalPrimerCuadrante(i,j);
                    anularDiagonalSegundoCuadrante(i,j);
                    anularDiagonalTercerCuadrante(i,j);
                    anularDiagonalCuartoCuadrante(i,j);
                    
    
                }
    
                
            }
    
            
        }
        
    }

    console.log(tablero);
    
}

function anularColumna(posicion) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            if (posicion == j ) {
                tablero[i][j]=1;
            }
        
        }
        
    }
}

function anularFila(posicion) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            if (posicion == i ) {
                tablero[i][j]=1;
            }
        
        }
        
    }
}

function anularDiagonalPrimerCuadrante(fila, columna){
    var contador  = 1;
    if (fila!=0) {
        for (let i = fila-1; i >= 0; i--) {
            tablero[i][columna+contador]=1;
            contador++;
            
        }
    }
}

function anularDiagonalSegundoCuadrante(fila, columna){
    var contador  = 1;
    if (columna!=0) {
        for (let i = fila-1; i >= 0; i--) {
            tablero[i][columna-contador]=1;
            contador++;
            
        }
    }
}

function anularDiagonalTercerCuadrante(fila, columna){
    var contador  = 1;
    if (fila!=7) {
        for (let i = fila+1; i <= 7; i++) {
            tablero[i][columna-contador]=1;
            contador++;
            
        }
    }
}

function anularDiagonalCuartoCuadrante(fila, columna){
    var contador  = 1;
    if (fila!=7) {
        for (let i = fila+1; i <= 7; i++) {
            tablero[i][columna+contador]=1;
            contador++;
            
        }
    }
}







