"use strict";
//Scope
/**
El concepto de "scope" (ámbito) en programación se refiere a las reglas que
determinan dónde una variable es válida y accesible en un programa.
En tu código, existen dos variables llamadas precio con ámbitos diferentes:
una en el ámbito global y otra en el ámbito local de la función scopeF.
Cada una de estas variables solo es visible y accesible dentro de su propio
ámbito, y no afecta a la otra. */
const precio = 300; //ambito global
function scopeF() {
    const precio = 600; // ambito local
    console.log(precio);
}
if (true) {
    console.log(precio);
}
scopeF();
