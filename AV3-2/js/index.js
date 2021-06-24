var sol = new Sphere(0, 0, 0, 200, 10, 15);
var terra = new Sphere(0, 0, 0, 40, 10, 15);
var lua = new Sphere(0, 0, 0, 10, 10, 15);

function setup() {
  createCanvas(640, 480, WEBGL);
  createEasyCam();
  // esfera.translate(2,1,1);
  // frameRate(60);
  sol.background(153, 71, 0)
  terra.background(16, 16, 96)
  lua.background(240,240,240)
}

function draw() {
  background(0);
  
  sol.draw();
  // terra.translateX(0,10,2)
  
  // terra.rotateX(2)
  // lua.rotateX(2)
  // lua.rotateY(1)
  // terra.translateX(-1)
  lua.rotateX(2)
  
  // lua.rotateZ(0.5)
  lua.draw();
  terra.draw();
}
