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




