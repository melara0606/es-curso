const getVolumen = "getVolumen";

class Rectangulo {
  constructor (largo, alto) {
    this.alto = alto;
    this.largo = largo;
  }

  getArea () {
    return this.largo * this.alto;
  }
}

class Cuadrado extends Rectangulo {
  constructor (largo) {
    super(largo, largo);
  }
  static crear (largo) {
    return new Cuadrado(largo);
  }

  [getVolumen] () {
    return super.getArea() * this.largo;
  }
}

let cuadrado = Cuadrado.crear(8);
console.log(cuadrado.getArea())
console.log(cuadrado.getVolumen())