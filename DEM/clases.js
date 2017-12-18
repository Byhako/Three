class Poligono{
  constructor(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
  }

  // Metodo de instancia
  get area(){
    return this.alto * this.ancho;
  }

  get perimetro(){
    return 2*this.alto + 2*this.ancho
  }
}

class Punto{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  // Metodo estatico
  static distancia(a, b){
    let dx = a.x - b.x;
    let dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
  }
}

// ==============================================================
var cuadro = new Poligono(2, 5);

console.log(cuadro.area);
console.log(cuadro.perimetro);

const p1 = new Punto(2, 3);
const p2 = new Punto(1, 5);

console.log(Punto.distancia(p1, p2));