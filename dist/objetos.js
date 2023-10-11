"use strict";
//Objetos-------------
const productoTablet = {
    nameT: "Tablet",
    price: 300,
    stock: true,
};
console.log(productoTablet);
console.log(productoTablet.nameT);
console.log(productoTablet.price);
console.log(productoTablet.stock);
console.table(productoTablet);
//Destructuring-------------------------
const { nameT, price, stock } = productoTablet;
console.log(nameT);
console.log(price);
console.log(stock);
//Object Literal Enhacement(Mejora literal del objeto)
// Sirve para que las variables que estan fuera
// de un objeto las coloquemos dentro de un objeto  
const empleadoAutenticado = false;
const nombreEmpleado = "Adison Chire";
const objetoEmpleados = {
    empleadoAutenticado,
    nombreEmpleado
};
console.log(objetoEmpleados);
//Manipulacion de Objetos ------------
//Reescribir un valor
productoTablet.nameT = "Tablet curva";
console.log(productoTablet.nameT);
//añadir un valor si no existe da un mensaje de error con typescript
//productoTablet['imgTa'] = '/img/tabletCurva.jpeg' 
//Eliminar un elemnto con detele da un error con typescript
//delete productoTablet.stock 
//Freeze no permite modificarlo, no permite añadir, ni eliminar
/*Object.freeze(productoTablet)
productoTablet.price = 800
console.log(productoTablet);*/
// Seal permite modificar propiedades existentes, no permite añadir, ni eliminar
Object.seal(productoTablet);
productoTablet.stock = false;
console.log(productoTablet);
//Destructuring con 2 o mas objetos
const productoPc = {
    nameK: "Monitor",
    price: 300,
    stock: true
};
const clientePc = {
    nameK: "Adison",
    premium: true
};
//Debemos crearle un alias o una variable temporal con otro nombre
const { nameK: namePc, price: pricePc, stock: stockPc } = productoPc;
const { nameK: nameCliente, premium: ClientePremium } = clientePc;
console.log(namePc, pricePc, stockPc);
console.log(nameCliente, ClientePremium);
// Unir 2 o mas objetos
// la mejor forma de unirlos es la siguiente esto con el fin de que no se pisen
const objetoPc = {
    productoPc: Object.assign({}, productoPc),
    clientePc: Object.assign({}, clientePc)
};
console.log(productoPc);
console.log(clientePc);
console.log(objetoPc);
