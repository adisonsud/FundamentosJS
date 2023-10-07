// Tipo undefined
let empleado: undefined
console.log(typeof empleado);

// Tipo boolean---------------
const descuentoTardanza: boolean = true
console.log('', typeof descuentoTardanza);

// Tipo number
const edad: number = 27
console.log(typeof edad);

// Tipo String o cadena
const descripcion: string = 'el empleado llego 15 min tarde'
console.log(typeof descripcion);

//Podemos cambiar de tipo  de dato
const numeroString: string = '30'
const numero: number = 100

    //Decadena a numero
    const numeroStringComoNumero: number = parseInt(numeroString,10)

    //De numero a cadena
    const numeroComoNumeroString: string = String(numero)

console.log( typeof numeroString," como ", 
    typeof numeroStringComoNumero);
console.log(typeof numero, " como ", typeof numeroComoNumeroString);

// Typo Symbol
const primerSimbolo: symbol = Symbol(3000)
const segundoSimbolo: symbol = Symbol(3000)
    // cada symbol es Unico 
console.log(primerSimbolo, typeof primerSimbolo);
console.log(segundoSimbolo, typeof segundoSimbolo);
console.log(primerSimbolo === segundoSimbolo);

// Tipo Null
const nulo: null =null
console.log(typeof nulo);

