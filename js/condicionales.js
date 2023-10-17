//---------------------------------------------
// Comparación y Operador Estricto
/*
    ==  ( Comparaciónno es estricto)
    === (Comparación estricta - Revisa valor y tipo de dato)
*/
const numero1 = 20
const numero2 = "20"

if(numero1 === numero2 ) {
    console.log('Si!, son iguales')
} else {
    console.log('No, no son iguales')
}

const autenticado = true
if(autenticado) {
    console.log('Si esta autenticado')
}

//--------------------------------------------
// Condicion Or - And
/*
|| - Al menos una debe cumplirse
&& - Todas deben cumplirse
*/
const saldo = 600
const pagar = 500
const tarjeta = true
if(saldo > pagar && tarjeta ) {
  console.log('puedes pagar')
}  else {
  console.log('No, no puedes pagar')
}

//--------------------------------------------
// Ternarios
/* 
condicion 
  ? (aqui se cumple la condicion) 
  : (aqui si no se cumple la condicion)
*/
const autenticado1 = true

autenticado1 
    ? console.log('usuario autenticado') 
    : console.log('No autenticado, dirigir hacia login')

// Doble ternario
const saldo1 = 600
const pagar1 = 800
const tarjeta1 = false

saldo1 > pagar1 
  ? console.log('Puedes pagar con saldo') 
  : tarjeta1 
    ? console.log('Puedes pagar con tarjeta') 
    : console.log('No no puedes pagar')