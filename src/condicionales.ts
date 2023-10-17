//Condicionales
// Comparación y Operador Estricto
/*  ==  ( Comparación pero no es estricto)
    === (Comparación estricta - Revisa valor y tipo de dato)
*/
const numeroOne:number = 20
const numeroTwo:string = '20' 
if (numeroOne === parseInt(numeroTwo)) {
    console.log('Iguales');
} else {
    console.log('Diferentes');
}

// Condicion Or - And
/*  || - Al menos una debe cumplirse
    && - Todas deben cumplirse
*/
const  saldo:number = 400
const  pagar:number = 600
const tarjeta: boolean = false
if (saldo > pagar && tarjeta) {
    console.log('PUEDES PAGAR');
} else {
    console.log('NO, NO PUEDES PAGAR');   
}

// Ternarios
/*  condicion 
    ? (aqui se cumple la condicion) 
    : (aqui si no se cumple la condicion)
*/
const autenticado: boolean = true
autenticado 
  ? console.log('Usuario Autenticado')
  : console.log('No autenticado');

//Doble Ternario
console.log(saldo, pagar, tarjeta);
saldo > pagar
  ? console.log('Puedes pagar, con saldo')
  : tarjeta
    ? console.log('puedes pagar con tarjeta')
    : console.log('No puedes pagar');
    
  
  


