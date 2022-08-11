const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
  // con este se puede prevenir que se envie al action 
  //para asi realizar otras implementaciones
  e.preventDefault() 
  
  const nombre1 = document.querySelector('.nombre').value
  const password1 = document.querySelector('.password').value

  const alertaPrevia = document.querySelector(".alerta")
  if(alertaPrevia){ // si ya exite una alerta 
    alertaPrevia.remove() // remover dicha alerta 
  }
  
  // es recomendado escribir el html con mayusculas en JavaScript
  const alerta = document.createElement('DIV')
  
  alerta.classList.add('alerta') // Crea la clase alerta
  //alerta.classList.add('alerta', "segunda-clade") // Crea dos clases 
  //alerta.classList.remove('alerta') // elimina la clase alerta
  
  
  if (nombre1 === '' || password1 === '') {
    alerta.textContent = 'Todos los campos son obligatorios'
    alerta.classList.add('error')
  } else {
    alerta.textContent = 'Todo bien, enviando..'
    alerta.classList.add('exito')
  }
  
  formulario.appendChild(alerta) // agrega como hijo al formulario
  
  console.log(alerta); // para ver que voy construyendo
})