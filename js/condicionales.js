//---------------------------------------------
// Comparación y Operador Estricto
/*
    ==  ( Comparación pero no es estricto)
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
