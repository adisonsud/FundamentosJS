"use strict";
// Tipo undefined
let empleado;
console.log(typeof empleado);
// Tipo boolean---------------
const descuentoTardanza = true;
console.log('', typeof descuentoTardanza);
// Tipo number
const edad = 27;
console.log(typeof edad);
// Tipo String o cadena
const descripcion = 'el empleado llego 15 min tarde';
console.log(typeof descripcion);
//Podemos cambiar de tipo  de dato
const numeroString = '30';
const numero = 100;
//Decadena a numero
const numeroStringComoNumero = parseInt(numeroString, 10);
//De numero a cadena
const numeroComoNumeroString = String(numero);
console.log(typeof numeroString, " como ", typeof numeroStringComoNumero);
console.log(typeof numero, " como ", typeof numeroComoNumeroString);
// Typo Symbol
const primerSimbolo = Symbol(3000);
const segundoSimbolo = Symbol(3000);
// cada symbol es Unico 
console.log(primerSimbolo, typeof primerSimbolo);
console.log(segundoSimbolo, typeof segundoSimbolo);
console.log(primerSimbolo === segundoSimbolo);
// Tipo Null
const nulo = null;
console.log(typeof nulo);
