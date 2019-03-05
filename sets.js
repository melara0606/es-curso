// los set no se puede repetir su valor oseas deben ser unicos
// let inicios = new Set([1,2,35,8,9,8,9,745,89,815,15,89]);

// inicios.add(7)
// inicios.add(15)
// inicios.add(89)
// inicios.add(15)
// inicios.add(100)
// inicios.add(896)

// console.log(inicios.has(15));
// console.log(inicios)

// inicios.delete(2)
// console.log(inicios);

// console.log('Iniciando con el recorrido del set');
// inicios.forEach(function (valor, llave, setOriginal) {
//   console.log(valor, llave, setOriginal)
//   console.log(inicios == setOriginal);
// })

// =============================================
// convertir un set en un array

let array = [1,2,3,4,5,6,7,7,8,9,5,8,9,7,8,4,78,56,9,3,2,1,45,6];
// console.log(array);
// console.log('Eliminando los duplicado');
// console.log(eliminarDuplicado(array));

function eliminarDuplicado (elemento) {
  return [...new Set(elemento)];
}

Array.prototype.eliminarDuplicado = function () {
  return [...new Set(this)];
}

array = array.eliminarDuplicado()
array = array.sort()
console.log(array);

