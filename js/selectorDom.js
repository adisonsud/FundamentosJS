// selectores de DOM

/* document.
- siempre iniciemos con (document.) para seleccionar un elemento */

/* querySelector
- trae de 0 a maximo 1 elemento */

/* querySelectorAll
- trae todos los elementos que concuerden con el selector 
que le estoy pasando. */

const heading = document.querySelector('.heading')
//se llama como el CSS
//('h2') - ('.DOM h2') - ('.heading') - ('#heading') 
console.log("heading: ",heading)
console.log("heading.textContent: ",heading.textContent) // dice el texto que tiene este
console.log("heading.tagName: ",heading.tagName) // dice el nombre de la etiqueta
console.log("heading.classList: ",heading.classList) // retorna las clases que tiene asociadas
console.log("heading.id: ",heading.id) // retorna el nombre del id

/* querySelectorAll
- trae todos los elementos que concuerden con el selector 
que le estoy pasando. */

const enlaces = document.querySelectorAll('.navegacion a')
console.log("enlaces: ", enlaces)

/* Manipular HTML con CSS */
const heading2 = document.querySelector('.heading')
heading2.textContent = 'Un nuevo heading'
console.log("cambio heading2: ",heading2.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'

const enlaces1 = document.querySelectorAll('.navegacion a')
enlaces1.forEach( enlace => enlace.textContent = 'nuevo enlace' );