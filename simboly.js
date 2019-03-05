// let primerNombre = Symbol('primer nombre');
// let segundoNombre = Symbol('segundo nombre');

// let persona = {
//   [primerNombre] : 'Fernando',
//   [segundoNombre] : 'Antonio'
// };

// let symbol1 = Symbol('primer symbol');
// let symbol2 = Symbol('primer symbol');

// console.log(primerNombre);
// console.log(segundoNombre);
// console.log(persona);

// console.log( symbol1 == symbol2 );
// console.log( symbol1 === symbol2 );
// console.log( Object.is(symbol1, symbol2) );

// let userID = Symbol.for('id unico');
// let objecto = {
//   [userID] : 20
// }

// console.log(userID)
// console.log(objecto)


// let userID2 = Symbol.for('id unico');

// console.log(userID == userID2);
// console.log(userID === userID2);
// console.log(Object.is(userID, userID2));

// console.log(Symbol.keyFor(userID))

let symbol1 = Symbol('id')
let symbol2 = Symbol('codigo')

let persona = {
  [symbol1] : '1258XY',
  [symbol2] : '78-985KJ-OP',
  nombre: 'Edwin', 
  apellido : 'melara',
  edad : 27
}

for (const people of  Object.keys(persona) ) {
  console.log( `key : ${ people } = Value: ${ persona[people] }`)
}

let symbolsKey = Object.getOwnPropertySymbols(persona)
for (const i in symbolsKey) {
  console.log(`key: ${ symbolsKey[i].toString() } = Value: ${ persona[symbolsKey[i]] }`);
}