//Fetch API con Async await
/* -Importante: cuando usas async await las funciones tienen que ser asincronas
 */

 const url = "https://jsonplaceholder.typicode.com/comments"

 const consultarAPI = async () => { //async hace la funcion asincrona
  const respuesta = await fetch(url) // le estamos diciendo vamos a esperar
  /* lo que hace el await es bloquear el codigo; 
  es decir, en lo que nosotros hacemos el llamado hacia esta url 
  el await de "respuesta", previene que la linea de "resultado" aun no se ejecute,
  digamos que la detiene hasta que tenga un resultado, 
  una vez que "respuesta" ya esta completa, pasa a "respuesta.json", 
  lo cual este puede tarda unos segundos entonces awit bloquea el codigo.
  Y automaticamente cuando esta listo todo continua ejecutando el codigo y 
  comleta la tarea que estamos haciendo en esta funcion   
  */
  const resultado = await respuesta.json()
    // console.log(resultado); // Array(500) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
    resultado.forEach(comentario => {
      console.log(comentario); //Imprime los comentarios uno en cada linea  
    });
 }
 consultarAPI()