//Template Strings

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

function textOfFunction() {
  return "Este texto proviene de la funcion"
}
// encerrar entre backticks
// si se quiere poner una variable ingresarlo en ${--}
console.log(`${producto} $${precio} Dólares, Marca: ${marca}, ${textOfFunction()}`) 
// Tablet de 12 pulgadas $400 Dólares, Marca: Orange, Este texto proviene de la funcion