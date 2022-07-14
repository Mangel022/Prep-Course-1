// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  return array.push(elemento);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  return array.unshift(elemento);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0; i < array.length; i++){
    if(elemento === array[i]){
      return true;
    }else{
      return false;
    }
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total = 0;
  for(let i = 0; i < numeros.length; i++){
    total = numeros[i] + total;
  }
  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total = 0;
  for(let i = 0; i < resultadosTest.length; i++){
      total = resultadosTest[i] + total;
  }
  total = total / resultadosTest.length;
  return total;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  for(let i = 0; i < numeros.length; i++){
    var si = 0;
    var no = 0
    var igual = 0;
    for(let x = 0; x <numeros.length; x++){
        if(numeros[i] === numeros[x]){
            igual = igual + 1;
        }else if(numeros[i] > numeros[x]){
            si = si + 1;
        }else{
            no = no + 1;
        }
    }
    if(si === (numeros.length - 1)){
        return numeros[i];
    }else if(no === numeros.length ){
        return numeros[i];
    }

  }
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var total = 1;
  if(arguments.length <= 0){
      return 0;
  }else{
      for(let i = 0; i < arguments.length; i++){
          total = total * arguments[i];
      }
      return total;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var x = 0;
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] >= 18){
      x++;
    }
  }
  return x;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  switch(numeroDeDia){
    case 1:
      return "Es fin de semana";
      break;
    case 2:
      return "Es dia laboral";
      break;
    case 3:
      return "Es dia laboral";
      break;
    case 4:
      return "Es dia laboral";
      break;
    case 5:
      return "Es dia laboral";
      break;
    case 6:
      return "Es dia laboral";
      break;
    case 7:
      return "Es fin de semana";
      break;
    default:
      return "Error..."
      break;
  }
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  cadena = n.toString();
  for(let i = 0; i < cadena.length; i++){
      if(cadena[i] === '9'){
          return true;
      }else{
          return false;
      }
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var si = 0;
  var no = 0;
  for(let i = 0; i < arreglo.length; i++){
      for(let x = i+1; x < arreglo.length; x++){
          if(arreglo[i] === arreglo[x]){
              si++
          }
      }
  }
  if(si > 4){
      return true;
  }else{
      return false;
  }
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesEncontrado = [];
  for(let i = 0; i < array.length; i++){
      if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
          mesEncontrado.push(array[i]);
      }
  }
  if(mesEncontrado.length === 3){
      return mesEncontrado;
  }else{
      return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayores = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 100){
      mayores.push(array[i]);
    }
  }
  return mayores;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var almacen = [];
  for(let  i = 0; i < 10; i++){
    numero = numero + 2;
    almacen.push(numero);
    if(numero === i){
      break;
    }
    return "Se interrumpió la ejecución"
  }
  return almacen;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var almacen = [];
  for(let i = 0; i < 10; i++){
    if(i === 5){
      continue;
    }else{
      numero = numero + 2;
      almacen.push(numero);
    }
  }
  return almacen;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
