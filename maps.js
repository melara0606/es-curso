let arrayInitial = [
  ['nombreSecond', 'Antonio'],
  ['lastSecond', 'Landaverde']
]

let mapa = new Map(arrayInitial);

mapa.set('nombre', 'Edwin')
mapa.set('edad', 27)
mapa.set('apellido', 'Melara')
mapa.set('direccion')
console.log(mapa);
console.log(mapa.size);
console.log(mapa.has('nombre'));
console.log(mapa.get('nombre'));

mapa.delete('nombre')
console.log(mapa.get('nombre'));
console.log(mapa.has('nombre'));
console.log(mapa.has('nombreSecond'));
console.log(mapa.get('lastSecond'));
console.log(mapa);


for (const map of mapa) {
  console.log(map)
}