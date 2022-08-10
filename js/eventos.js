//Eventos del DOM - clicks
// Evento click en heading
const heading = document.querySelector('.heading')
// addEventListener solo se puede asociar a un solo elemento
heading.addEventListener('click', () => {
  heading.textContent = 'Nuevo heading al dar click'
  console.log('Diste click en heading');
})

//Evento click en enlaces
const enlaces = document.querySelectorAll('.navegacion a')
// tenemos que usar forEach para listar y acceder a un elemento 
// con addEventListener.
enlaces.forEach( enlace => {
  enlace.addEventListener('click', () =>{
    console.log('diste click en un enlace')
  })  
} )

//Eventos del DOM - inputs
//todos los selectores de CSS pueden ser usados en querySelector

//Evento en el input nombre
const inputNombre = document.querySelector('.nombre')
//inputNombre.type = 'password'
inputNombre.placeholder = 'Un placeholder desde JS'


// Keydown cuando presionas una tecla se ejecuta
// inputNombre.addEventListener('Keydown',() => console.log("escribiendo en el input"))

//inputNombre.addEventListener('Keyup',() => console.log("escribiendo en el input"))

// Recomendado usar el input a comparacion de los de arriba
inputNombre.addEventListener('input',(e) => {
  //console.log(inputNombre.value); // no es lo recomendado llamarlo asi.
  
  /*Lo recomendado es con evento
  - cuando se utiliza un addEventListener  en la funcion se pasa 
  automaticamente un evento 
  - donde estamos ecribiendo es en Target
  - y el value nos mostrara lo que estamos escribiendo 
  */ 
  console.log(e.target.value);
  
})


//Eventos en el password
const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(e) {
  inputPassword.type = 'text' //convierte a tipo texto
  setTimeout(() => {
    //despues de segundos lo convierte a tipo password 
    inputPassword.type = 'password' 
  }, 750); // 1000 es 1 segundo
}


//Eventos en el Submit - boton enviar
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
  // con este se puede prevenir que se envie al action 
  //para asi realizar otras implementaciones
  e.preventDefault() 
  
  const nombre1 = document.querySelector('.nombre').value
  const password1 = document.querySelector('.password').value
  
  if (nombre1 === '' || password1 === '') {
    console.log('Todos los campos son obligatorios');
  } else {
    console.log('Todo bien, enviando ');
  }
})






