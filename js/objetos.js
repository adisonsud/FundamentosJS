//Objetos-------------
const producto = {
  nombre: "Tablet",
  precio: 300,
  stock: true
}
console.log('Formas de mostrar---------------------');
console.log(producto);
console.log('--------------------------------');
console.log('producto.nombre:',producto.nombre);
console.log('producto.precio:',producto.precio);
console.log('producto.stock:',producto.stock);
console.log('--------------------------------');
console.table(producto);

//Destructuring-------------------------
const producto2 = {
  nombre: "Celular",
  precio: 500,
  stock: false
}
//Sacar valores de una estructura
const {nombre, precio, stock} = producto2
console.log('--------------------------------');
console.log('Destructuring: ', nombre, precio, stock)

//Object Literal Enhacement-------------------------
// Sirve para que las variables que estan fuera
// de un objeto las coloquemos dentro de un objeto  
const autenticado = true
const usuario = "Adison"
const newObject = {
  //autenticado: autenticado,
  autenticado,
  //usuario: usuario
  usuario
}
console.log('Object Literal Enhacement')
console.table(newObject)

//Objetos-Manipulacion------------
const producto3 = {
  nombre: "Tablet",
  precio: 300,
  stock: true
}
//Reescribir un valor
console.log('--------------------------------');
console.log('Reescribir un valor');
producto3.nombre = 'Monitor curvo'
console.table(producto3)

//Si no existe lo va a añadir
console.log('--------------------------------');
console.log('Si no existe lo va a añadir');
producto3.imagen = 'imagen.jpg'
console.table(producto3) 

//Eliminar un elemnto
console.log('--------------------------------');
console.log('Eliminar un elemnto');
delete producto3.stock 
console.table(producto3)

const producto4 = {
  nombre: "Tablet",
  precio: 300,
  stock: true
}

//Object.freeze(producto) 
// Freeze no permite modificarlo, no permite añadir, 
// ni eliminar

// Object.seal(producto) 
// Seal permite modificar propiedades existentes, 
// no permite añadir, ni eliminar

//Destructuring con 2 o mas objetos
const productoA = {
  nombre1: "Tablet",
  precio1: 300,
  stock1: true
}
const cliente = {
  nombre1: "Adison",
  premium: true
}
const {nombre1, precio1, stock1} = productoA
//Debemos crearle un alias o una variable temporal 
//con otro nombre
const {nombre1: nombreCliente} = cliente

console.log('Destructuring con 2 o mas objetos');
console.log(nombre1);
console.log(nombreCliente);

//Unir 2 o mas objetos
const productoB = {
  nombre2: "Tablet",
  precio2: 300,
  stock2: true
}
const cliente2 = {
  nombre2: "Adison",
  premium2: true
}
// la mejor forma de unirlos es la siguiente
// esto con el fin de que no se pisen
const newObject2 = {
  productoB: {...productoB},
  cliente2: {...cliente2}
}
console.log('--------------------------------');
console.log('Uniendo 2 o mas objetos');

console.log(productoB);
console.log(cliente2);
console.table(newObject2);













