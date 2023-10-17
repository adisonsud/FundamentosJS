//Funciones - function declaration
function operaciones(numA: number = 0, numB: number = 0) {
    console.log(numA + numB);
}
operaciones(10 + 20); operaciones(2 + 3); operaciones(100); operaciones() 


//Funciones que retornan valores como Array
function operaArray(numA: number = 0, numB: number = 0): [string, number, string, number] {
    return ['Suma:', numA + numB, 
    'Resta', numB - numA]
}
const [MensajeSuma, rptaSuma, MensajeResta, rptaResta] = operaArray(200,350)
console.log(MensajeResta, rptaResta);
console.log(MensajeSuma, rptaSuma);

// como Object destructuring
function operaObject(numA:number = 0, numB:number = 0): {resultadoSuma:number,mensajeObj:string} {
    return { 
        resultadoSuma: numA + numB, 
        mensajeObj: 'Hola Objeto'
    }
}
const {resultadoSuma, mensajeObj} = operaObject(15,25)
console.log(resultadoSuma);
console.log(mensajeObj);

//--------------------------------------------------------
//Funciones - function Expression
const sumarA = function(numX:number = 0, numY: number = 0 ){
    return numX+numY
}
const resultSuma = sumarA(10,20)
console.log(resultSuma);

/*Arrow function - con function expression puedes usar Arrow function  
* quitar function y agregarle => antes de las llaves*/

//Forma 1
const formaUno = () => {
    console.log(3 + 4);
}
formaUno()

//Forma 2
const formaDos = (numX:number = 0, numY:number = 0) => {
    console.log(numX + numY);
}
formaDos(12,15)

//Forma 3
//Donde brillan mas los arrow function es en los return
const formaTres = (numX:number = 0, numY:number = 0 ):number => {
    return numX + numY
}
const sumaFormaTres = formaTres(12,12)
console.log(sumaFormaTres);

//Forma 4
/* Cuando solo hay una linea de codigo se puede quitar 
* las llaves y por default da por implicito el return */
const formaCuatro = (numX:number = 0, numY:number = 0):number => numX + numY
const sumaformaCuatro = formaCuatro(15,12)
console.log(sumaformaCuatro);

//forma 5
// cuando toma un solo parametro se puede hacer de la sgte manera
const formaCincoA = (numX:number=0):number => numX +20 
const sumaFormaCincoA = formaCincoA(15)
console.log(sumaFormaCincoA);

const formaCincoB = ():number => 30 +20 
const sumaFormaCincoB = formaCincoB()
console.log(sumaFormaCincoB);

//Arrow Functions y Array Methods
const lenguajeProgra:string[] = ['Java', 'R', 'python', 'JavaScript', 'c#']
    //Ejemplo 1
    //forma 1 de iniciar
    //const arrayLP = lenguajeProgra.map(function(tech){
    //forma 2 de iniciar
    const arrayLP:string[] = lenguajeProgra.map((tech:string):string => {
        if (tech === 'R') {
            return 'C++'
        }else{
            return tech
        }
    })
    console.log(arrayLP);
    
    //Ejemplo 2
    //forma 1 de iniciar
    //const newArrayLP = lenguajeProgra.filter((tech) =>{
    //forma 2 de iniciar
    /*const newArrayLP = lenguajeProgra.filter(tech =>{
            return tech !== 'Java'
        })*/
    //Forma 3 de iniciar
    const  newArrayLP:string[] = lenguajeProgra.filter((tech:string) => tech === 'Java')
    console.log(newArrayLP);
    
//------------------------------------------------------
//Otros Array Methods útiles
console.log(lenguajeProgra);
const numerosEnt:number[] = [10, 30, 50,70]

//includes 
//comprobar si un elemento existe en el array para retornar true o false
const ejemploIncludes:boolean = lenguajeProgra.includes('Java')
console.log(ejemploIncludes);

//some
//si al menos un elemento del array cumple con la condicion retorna true o false
const ejemploSome:boolean = numerosEnt.some(valor => valor > 15)
console.log(ejemploSome);

//find
//Retorna el primer elemento del array que cumpla la condicion
const ejemploFind:number | undefined = numerosEnt.find(valor => valor > 15)
console.log(ejemploFind);

//Every 
//Retorna true o false si todos cumplen la condicion
const ejemploEvery:boolean = numerosEnt.every((valor:number) => valor > 9)
console.log(ejemploEvery);

//reduce - 
/** Va acumulando en el total 
 * es muy util en un carrito de compras, esta diseñado para cantidades
 * toma un total y un numeros actual
 * se debe poner al final en que numero inicia, 
 * en este caso de ejemplo inicia en "0" */ 
console.log(numerosEnt);
const ejemploReduce = numerosEnt.reduce((total, valor) => valor + total,0)
console.log(ejemploReduce);

//filter
//crea un nuevo array en base a la condicion
console.log(lenguajeProgra);
const ejemploFilter = lenguajeProgra.filter(tech => tech !== "JavaScript")
console.log(ejemploFilter);

//forEach
/** me permite listar y acceder a cada elemnto
 * se va a ejecutar una vez por cada elemento
 * si no hay ningun elemento no se ejecuta */


lenguajeProgra.forEach((tech, index) => console.log(tech,index))

//map me permite crear un nuevo arreglo
const ejemploMap = lenguajeProgra.map(tech => tech)
console.log(ejemploMap);


