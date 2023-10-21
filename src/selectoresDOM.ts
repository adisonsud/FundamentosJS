// selectores de DOM 
//lo enlazamos con DOM.html

/* document.
- siempre iniciemos con (document.) para seleccionar un elemento */

/* document.querySelector
- trae de 0 a maximo 1 elemento */
//se llama como el CSS
//('h2') - ('.DOM h2') - ('.heading') - ('#heading') 
const encabezado: Element | null = document.querySelector('#heading')
console.log(encabezado); 
console.log(encabezado?.textContent);
console.log(encabezado?.tagName);
console.log(encabezado?.classList); 
console.log(encabezado?.id); 

/* document.querySelectorAll
- no se puede usar estos textContent, tagName, classList, id en este caso
- trae todos los elementos que concuerden con el selector que le estoy pasando. */
const enlaces: NodeListOf<Element> = document.querySelectorAll('.navegacion a')
console.log(enlaces);

/**Manipular elementos del HTML con JS */
const encabezadoModificado: Element | null = document.querySelector('.heading')
    if(encabezadoModificado){
        encabezadoModificado.textContent = 'Soy un nuevo Encabezado'
        console.log(encabezadoModificado.textContent);
    }
const nombreModificado: HTMLInputElement | null = document.querySelector('#nombre')
    if(nombreModificado){
        nombreModificado.value = 'Valor por Default'
        console.log(nombreModificado.value);
    }
const enlaceModificado:NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.navegacion a')
    if (enlaceModificado) {
        enlaceModificado.forEach(e =>  e.textContent = 'EnlaceNuevo');
        console.log(enlaceModificado);
        
    }

