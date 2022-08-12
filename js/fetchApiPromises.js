//Fetch API
/* -react por si solo no puede consultar una base de datos
 - una opcion es crear una API que dew una respuesta como 
 JSON entonces asi JavaScript o react pueden consumirla
 - para no perder tiempo montando una Api podemos utilizar 
 la aplicacion o la pagina de JSON placeholder
 https://jsonplaceholder.typicode.com/
 - es este caso usaremos el de 500 comentarios
 - cuando usa (.then()) -> significa que esta usando promises
 */

const url = "https://jsonplaceholder.typicode.com/comments"
//Promises es un valor que va a estar disponible ahora o en el futuro
const consultarAPI = () => {
  fetch(url)
  .then(respuesta => respuesta.json()) // hacer esto me da acceso a un segundo then
                          // cuando usa (.then()) -> significa que esta usando promises
    
    .then((resultado) => {
      // console.log(resultado); // Array(500) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
      resultado.forEach(comentario => {
        console.log(comentario); //Imprime los comentarios uno en cada linea  
      });
    })
  }
  consultarAPI() 