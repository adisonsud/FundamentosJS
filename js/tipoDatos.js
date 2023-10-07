//Tipos de datos

//Undefined--------------
let unde
// es una manera de verificar el tipo de dato
console.log('Tipo de dato Undefined-------------');
console.log('let unde: ',typeof unde); 

//Boolean---------------
const bool = true
// es una manera de verificar el tipo de dato
console.log('Tipo de dato Bolean-----------------');
console.log('true: ',typeof bool);

//Number----------------
const num1 = 20.20
const num2 = 30
const num3 = -100
// es una manera de verificar el tipo de dato
console.log('Tipo de dato Number-----------------');
console.log('20.20: ',typeof num1);
console.log('30: ',typeof num2);
console.log('-100: ',typeof num3);

//String o cadenas de texto
const alumno = "Juan";
const numst = "30"
console.log('Tipo de dato String-----------------');
console.log('"Juan": ' ,typeof alumno);
console.log('"30": ',typeof numst);

//Podemos cambiar de tipo  de dato
const num4 = '30'
const num5 = 100
console.log('De "30" a Number: ' ,typeof Number(30), 
            Number(30));
console.log('De',num5 ,'a String: ',typeof String(num5), 
            String(num5));

//Symbol-----------------
const symbol1 = Symbol(200) 
const symbol2 = Symbol(200) 
console.log('Tipo de dato Symbol-----------------');
console.log('Symbol(200): ',typeof symbol1, symbol1.valueOf());
console.log('Symbol(200): ',typeof symbol2, symbol2.valueOf());
console.log('¿son iguales?: ' ,symbol1 === symbol2);
console.log('Cada Symbol es único');


//String o cadenas de texto
const nulo = null;
console.log('Tipo de dato null-----------------');
console.log('null' ,typeof nulo);
