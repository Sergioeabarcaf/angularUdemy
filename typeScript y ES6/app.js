"use strict";
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "algo"; }
    var texto;
    if (momento) {
        texto = quien + " activo " + objeto + " en el " + momento;
    }
    else {
        texto = quien + " activo " + objeto;
    }
    console.log(texto);
}
activar("perro");
