// arrays o arreglos
const array = [20, 30 , true, 'react', 'JavaScript']
console.log('Mi array');
console.table(array);
console.log('array[3]: ',array[3]);

console.log('array.length: ',array.length);
console.log('array.toString(): ',array.toString());

//Manipulacion de arrays

const tecnologia = ['HTML', 'CSS', 'react', 'JavaScript', 'Node.js']
//------------------------------------------
// Añadir elementos al array
console.log('Evitar el push y el unshift');
//tecnologia.push('GraphQL') // Añade al final del array
//tecnologia.unshift('GraphQL') // Añade al inicio del array
//push y unshift son un gran NO para React

//En su lugar usar Spread Operator porque no modifica el principal

//Descomponer un array
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2);

console.log('Usar el Spread Operator');
const newArray = ['Bem',...tecnologia,'GraphQL']

console.log('Array tecnologia');
console.table(tecnologia);
console.log('Array newArray');
console.table(newArray);

//-------------------------------------------
const tecnologia1 = ['HTML', 'CSS', 'react', 'JavaScript', 'Node.js']
// Eliminar elementos al array

//En su lugar usar filter para no modificar el principal
console.log('filtra e itera para identificar que elementos hay');
const newArray2 = tecnologia1.filter(function (tech) {
  return tech !== 'HTML'
  
})

console.log('Array tecnologia');
console.log(tecnologia);
console.log('Array newArray2');
console.log(newArray2);

//-------------------------------------------
const tecnologia2 = ['HTML', 'CSS', 'react', 'JavaScript', 'Node.js']
// Reemplazar elementos al array

//En su lugar usar filter para no modificar el principal
console.log('filtra e itera para identificar que elementos hay');
const newArray3 = tecnologia2.map(function (tech) {
  if (tech === 'HTML') {
    return 'CambioJava'
  }else{
    return tech
  }
  
})
console.log('Array tecnologia');
console.log(tecnologia2);

console.log('Array newArray2');
console.log(newArray3);

//-------------------------------------------

//Destructuring de Arrays

const tecnologia3 = ['HTML', 'CSS', 'react', 'JavaScript', 'Node.js']
//Podemos extraer el elemento que deseamos
const [ , , , , var5] = tecnologia3

console.log(var5); // Dara como result -> Node.js

//-------------------------------------------

//Iteradores en JS
const tecnologia4 = ['HTML', 'CSS', 'react', 'JavaScript', 'Node.js']

//forEach
// me permite listar y acceder a cada elemnto
// se va a ejecutar una vez por cada elemento
//si no hay ningun elemento no se ejecuta
const arrayForeach = tecnologia4.forEach( function(tech) {
  return tech;  
})

// Map me permite crear un nuevo arreglo
const arrayMap = tecnologia4.map( function(tech) {
  return tech;  
})

console.log(arrayForeach); 
console.log(arrayMap); 




