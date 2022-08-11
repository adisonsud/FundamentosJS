//Import
// sumar es el original 
import {sumar} from "./export.js" // se puede llamar como gustemos
// es recomendado crearle un alias o copia del original
import {restar as resta} from "./export.js" // se puede llamar como gustemos

const resultado = sumar(20, 30)
const resultado2 = resta(20, 30)

console.log('suma: ',resultado);
console.log('resta: ',resultado2);