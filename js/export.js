//Exportar con solo 1 funcion 
// function sumar(num1, num2) {
  //   return num1 + num2 
  // }
  // // function restar(num1, num2) {
    // //   return num1 + num2 
    // //}
    // // usar este metodo cuando sea solo una funcion a exportar
    // export default sumar // metodo para exportar esta funcion 
    
//Exportar 2 o mas funciones 
function sumar(num1, num2) {
    return num1 + num2 
  }
function restar(num1, num2) {
    return num1 - num2 
  }

export {
  sumar,
  restar // metodo para exportar esta funcion 
}
