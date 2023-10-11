"use strict";
// arrays o arreglos
const array = [20, 30, true, 'react', 'JavaScript'];
console.log(array);
console.log(array[2]);
console.log(array.length);
console.log(array.toString());
//Manipulacion de arrays
// Añadir elementos al array
/*Nota:
- Evitar el push y el unshift ya que son un gran NOOOO para React
- tecnologia.push('GraphQL') // Añade al final del array
- tecnologia.unshift('GraphQL') // Añade al inicio del array
*/
/* En su lugar usar Spread Operator porque no modifica el principal,
y ademas se denota con tres puntos suspensivos "..." */
//Descomponer un array
const arrayFive = [0, 1, 2, 3, 4, 5];
const arrayTen = [...arrayFive, 6, 7, 8, 9, 10];
console.log(arrayTen);
const tecnologias = ['HTML', 'CSS', 'React'];
const tecnologiasExtras = ['BEM', ...tecnologias, 'JavaScript'];
console.log(tecnologiasExtras);
//Eliminar un array - estos son un gran NO xq modifican el principal
/*tecnologiasExtras.pop() // Elimina el ultimo elemento
tecnologiasExtras.shift() // Elimina el primer elemento
tecnologiasExtras.splice(1,2) // Elimina desde la posicion 1, dos elementos
*/
//Usar filter para no modificar el principal
//filter-filtra e itera para identificar que elementos hay
const filtrarTech = tecnologiasExtras.filter(function (tech) {
    return tech !== 'CSS';
});
console.log(filtrarTech);
const filtrarTechNew = filtrarTech.filter(function (tech) {
    return tech === 'React';
});
console.log(filtrarTechNew);
console.log(tecnologiasExtras);
// Reemplazar elementos al array 
/** El método map es útil para realizar transformaciones en un array, como cambiar
 * los valores de los elementos, aplicar una función a cada elemento, o incluso
 * generar un nuevo array con elementos diferentes a partir del array original. */
const newArray = tecnologiasExtras.map(function (tech) {
    if (tech === 'HTML') {
        return 'JavaNow';
    }
    else {
        return tech;
    }
});
console.log(newArray);
console.log(tecnologiasExtras);
//Destructuring de Arrays
console.log(tecnologiasExtras);
//Podemos extraer el elemento que deseamos
const [, , , punt,] = tecnologiasExtras;
console.log(punt);
//Iteraciones
console.log(tecnologiasExtras);
/* forEach me permite listar y acceder a cada elemnto, se va a ejecutar una vez
por cada elemento si no hay ningun elemento no se ejecuta */
const arrayForeach = tecnologiasExtras.forEach(function (tech) {
    return tech;
});
console.log(arrayForeach);
tecnologiasExtras.forEach((tech) => {
    console.log(tech);
});
// Map me permite crear un nuevo arreglo
const arrayMap = tecnologiasExtras.map(function (tech) {
    return tech;
});
console.log(arrayMap);
