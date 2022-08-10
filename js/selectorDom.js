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
