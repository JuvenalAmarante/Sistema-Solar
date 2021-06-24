// 2D
var linha = new Line(0, 0, 0, 200);
var retangulo = new Rectangle(0, 0, 300, 200);
var circulo = new Circle(0, 0, 45, 15);
var triangulo = new Triangle(0, 0, 80, 250, 250, 80);
// 3D
var plano = new Plane(0, 10, 20, 100, 100, 100);
var paralelograma = new Parallelogram(0, 0, 0, 100, 100, 0);
var esfera = new Sphere(50, 50, 50, 50, 10, 15);
var piramide = new Pyramid(0, 0, 0, 50, 50, 0, 100);

function setup() {
  createCanvas(640, 480, WEBGL);
  createEasyCam();
  // esfera.translate(2,1,1);
  // frameRate(60);
}

function draw() {
  background(230);
  // 2D
  // triangulo.rotate(2);
  // triangulo.draw();

  // 3D
  esfera.rotateX(2);
  // esfera.rotateY(2);
  // esfera.rotateZ(2);
  esfera.translate(2);

  esfera.draw();
}
