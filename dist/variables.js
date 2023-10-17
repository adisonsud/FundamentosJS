"use strict";
/*NOTA:
algunas buenas prácticas de TypeScript:
1. Nombres Descriptivos:
    Las variables se nombran de forma descriptiva para indicar su propósito o contenido.
2. CamelCase:
    Los nombres de las variables están en camelCase, que es una convención común en TypeScript.
3. Tipado Explícito:
    Se han añadido tipos explícitos para las variables para mejorar la legibilidad y
    la comprensión del código.
4. Unión de Tipos con number | undefined:
    Para la variable costo, se ha utilizado el tipo number |
    undefined para indicar que puede ser undefined inicialmente.
Esto proporciona una información clara sobre el posible estado de la variable.
*/
//variable -> let
let clienteEspecial = 'Adison Chire';
let precioEspecial = 20;
//let -> permite reasignar a diferencia de const
clienteEspecial = 'Mario Bross';
//Pueden iniciar sin valor
let costo;
costo = 100;
console.log('Cliente Especial: ', clienteEspecial);
console.log('Precio Descuento: ', precioEspecial);
console.log('costo: ', costo);
/*---------------------------------------------------------*/
//variable -> const - el mas usado
const clienteVip = true;
const precioVip = 50;
//No se puede re asignar 
//clienteVip = false
//No puede iniciar sin un valor
//const costoVip: number
console.log('cliente Vip', clienteVip);
console.log('Precio Vip', precioVip);
