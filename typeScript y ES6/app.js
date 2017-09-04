"use strict";
function activar(quien, objeto) {
    if (objeto === void 0) { objeto = "algo"; }
    var texto = quien + " activo " + objeto;
    console.log(texto);
}
activar("perro");
