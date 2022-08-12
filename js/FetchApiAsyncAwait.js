// //Fetch API con Async await
// /* -Importante: cuando usas async await las funciones tienen que ser asincronas
//  */

//  const url = "https://jsonplaceholder.typicode.com/comments"

//  const consultarAPI = async () => { //async hace la funcion asincrona
//   const respuesta = await fetch(url) // le estamos diciendo vamos a esperar
//   /* lo que hace el await es bloquear el codigo; 
//   es decir, en lo que nosotros hacemos el llamado hacia esta url 
//   el await de "respuesta", previene que la linea de "resultado" aun no se ejecute,
//   digamos que la detiene hasta que tenga un resultado, 
//   una vez que "respuesta" ya esta completa, pasa a "respuesta.json", 
//   lo cual este puede tarda unos segundos entonces awit bloquea el codigo.
//   Y automaticamente cuando esta listo todo continua ejecutando el codigo y 
//   comleta la tarea que estamos haciendo en esta funcion   
//   */
//   const resultado = await respuesta.json()
//     // console.log(resultado); // Array(500) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
//     resultado.forEach(comentario => {
//       console.log(comentario); //Imprime los comentarios uno en cada linea  
//     });
//  }
//  consultarAPI()
 
//Multiples Async Await y Performance
const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

// En este caso terminaran 
//este consultarAPI no tiene un mejor performance que el consultarAPI2, revise el segundo 
const consultarAPI = async () => { //async hace la funcion asincrona
  
  // La forma de medir el performancees asi
  // const inicio = performance.now()
  // const fin = performance.now()
  
  const inicio = performance.now()
  
  const respuesta = await fetch(url) // se ejecuta primero y espera a que se complete para ejecutar la siguiente 
  const resultado = await respuesta.json() // se ejecuta despues que la anterior haya completado
    console.log(resultado); // Array(500) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
  
  console.log('Iniciando segunda consulta');  
  const respuesta2 = await fetch(url2) // se ejecuta primero y espera a que se complete para ejecutar la siguiente 
  const resultado2 = await respuesta2.json() // se ejecuta despues que la anterior haya completado
    console.log(resultado2); // Array(500) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
  
  const fin = performance.now()
  console.log(`Ejecucion Primer Asyncs: ${fin-inicio} ms`);  
  }
 consultarAPI()

//este consultarAPI2 tiene un mejor performance que el consultarAPI 
const consultarAPI2 = async () => { //async hace la funcion asincrona
  
  const inicio = performance.now()
  
  const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]) // hara que ambas se ejecuten al mismo tiempo
  const resultado = await respuesta.json()
  const resultado2 = await respuesta2.json()  
  console.log(resultado); // Array(500) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
  console.log(resultado2); // Array(5000) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
  
  const fin = performance.now()

  console.log(`Ejecucion SEGUNDO async: ${fin-inicio} ms`);

}
 consultarAPI2()