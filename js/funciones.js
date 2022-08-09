//Funciones - function declaration
//--------------------------------------------------------
//Parametros y parametros por default
// function sumar(num1 = 0, num2 = 0) {
//   console.log(num1 + num2);
// }

// sumar(10 + 20) // 30
// sumar(2 + 3) // 5
// sumar(100) // 100
// sumar() // 0

//--------------------------------------------------------
// //Funciones que retornan valores
// //como Array
// function sumar1(num1 = 0, num2 = 0) {
//   return [num1 + num2, 'Hola Array']
// }

// const [resultado, holaMundo] = sumar1(20,30)
// console.log(resultado); // 50 
// console.log(holaMundo); //Hola Array

// // como Object destructuring
// function sumar(numA = 0, numB = 0) {
//   return {
//     resultado1: numA + numB, 
//     mensaje1: 'Hola Objeto'
//   }
// }

// const {resultado1, mensaje1} = sumar(2,3)
// console.log(resultado1); // 50 
// console.log(mensaje1); //Hola Objeto

//--------------------------------------------------------
//Funciones - function Expression

// const sumar = function(num1 = 0, num2 = 0) {
//   return num1 + num2
// }
// const resultado = sumar(2,3)
// console.log(resultado); // 5

// //Arrow function -
// //con function expression puedes usar Arrow function  
// // quitar function y agregarle => antes de las llaves
// //Forma 1
// const sumar1 = () => {
//   console.log(3 + 4) 
// }
// sumar1() // 7

// //Forma 2
// const sumar2 = (num3 = 0, num4 = 0) => {
//   console.log(num3 + num4) 
// }
// sumar2(12,14) // 26
// sumar2(12) // 12

// //Forma 3
// //Donde brillan mas los arrow function es en los return
// const sumar3 = (num5 = 0, num6 = 0) => {
//   return num5 + num6 
// }
// const resultado1 = sumar3(13,14)
// console.log(resultado1); // 27

// //Forma 4
// // cuando solo hay una linea de codigo se puede quitar 
// // las llaves y por default da por implicito el return
// const sumar4 = (num7 = 0, num8 = 0) => num7 + num8 

// const resultado2 = sumar4(30,30)
// console.log(resultado2); // 60

// //forma 5
// // cuando toma un solo parametro se puede hacer asi
// const sumar5 = num9 => num9 + 20 
// const sumaArrow = () => 2 + 2 
// const resultado3 = sumar5(30)
// const resultado4 = sumaArrow()
// console.log(resultado3); // 50
// console.log(resultado4); // 4

//------------------------------------------------------
//Arrow Functions y Array Methods
// const tecnologia = ['HTML', 'CSS', 'react', 'JavaScript', 'Node.js']

// // const newArray = tecnologia.map(function (tech) {
  // // const newArray = tecnologia.map( (tech) {
    // const newArray = tecnologia.map( tech => {
      //   if (tech === 'HTML') {
//     return 'CambioJava'
//   }else{
//     return tech
//   }
// })

// const newArray2 = tecnologia.filter((tech) => {
// const newArray2 = tecnologia.filter(tech => {
  // const newArray2 = tecnologia.filter(tech => tech !== 'HTML' )
  
  // console.log(newArray2);
  
  //------------------------------------------------------
  //Otros Array Methods útiles
const tecnologia = ['HTML', 'CSS', 'react', 'JavaScript', 'Node.js']
const numeros = [10, 50, 20] 
let newArray;
newArray = tecnologia.filter(tech => tech !== 'HTML' )

// includes - comprobar si un elemento existe en el array para retornar true o false
const resultado = tecnologia.includes('GraphQL')

// Some - si al menos un elemento del array cumple con la condicion
// si alguno de estos numeros es mayor 15 retorna tru o false
const resultado2 = numeros.some(numeros => numeros > 15)

// Find - Retorna el primer elemento del array que cumpla la condicion
const resultado3 = numeros.find(numero => numero > 15)

// Every - Retorna true o false si todos cumplen la condicion
const resultado4 = numeros.every(numero => numero > 15)

//reduce - Va acumulando en el total 
//- es muy util en un carrito de compras
// - esta diseñado para cantidades
// - toma un total y un numeros actual
// se debe poner al final en que numero inicia, en este caso de jemplo inicia en "0"
const resultado5 = numeros.reduce((total, numero) => numero +total,0)

//Filter - crea un nuevo array en base a la condicion
const resultado6 = tecnologia.filter(tech => tech !== 'JavaScript')
const resultado7 = numeros.filter(tech => tech !== 10)

//forEach
// me permite listar y acceder a cada elemnto
// se va a ejecutar una vez por cada elemento
// si no hay ningun elemento no se ejecuta
tecnologia.forEach( tech => console.log("forEach: ", tech))
console.log("------------------------------------");
tecnologia.forEach( (tech, index) => console.log("forEach - index: ", index))
console.log("------------------------------------");

// Map me permite crear un nuevo arreglo
const arrayMap = tecnologia.map(tech => tech)
console.log("map: ",arrayMap);// false

console.log("------------------------------------");
console.log("includes",resultado);// false
console.log("some",resultado2); // true
console.log("find",resultado3); // 50 es el primero q encontro en el camino
console.log("every",resultado4); // false
console.log("reduce",resultado5); // 80 -> 0 + 10 + 50 + 20 
console.log("filter",resultado6); // Array(4) [ "HTML", "CSS", "react", "Node.js" ]  
console.log("filter",resultado7); // Array [ 50, 20 ]
