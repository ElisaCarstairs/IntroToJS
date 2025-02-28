// Función para sumar
function sumar(a, b) {
    return a + b;
  }
  
  // Función para restar
  function restar(a, b) {
    return a - b;
  }
  
  // Función para multiplicar
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Función para dividir
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Error: División por cero no permitida";
    }
  }
  
  // Programa principal
  let num1 = 5;
  let num2 = 3;
  
  console.log(`Suma: ${sumar(num1, num2)}`);
  console.log(`Resta: ${restar(num1, num2)}`);
  console.log(`Multiplicación: ${multiplicar(num1, num2)}`);
  console.log(`División: ${dividir(num1, num2)}`);
  
 