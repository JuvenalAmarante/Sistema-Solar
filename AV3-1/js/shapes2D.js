class Line {
  constructor(x1, y1, x2, y2) {
    this.points = [
      new Vector(2, [x1, y1]),
      new Vector(2, [x2, y2]),
    ];

    this.tr = new Transformations();
  }

  rotate(angulo) {
    for (var index = 0; index < this.points.length; index++)
    {
      this.points[index] = this.tr.rotation2D(this.points[index], angulo)
    }
  }

  draw() {
    beginShape();

    this.points.forEach(point => vertex(point.get(1), point.get(2)));

    endShape(CLOSE);
  }
} 

class Rectangle {
  constructor(x, y, w, h) {
    this.points = [
      new Vector(2, [x, y]),
      new Vector(2, [x + w, y]),
      new Vector(2, [x + w, y + h]),
      new Vector(2, [x, y + h]),
    ];

    this.tr = new Transformations();
  }
  
  rotate(angulo) {
    for (var index = 0; index < this.points.length; index++)
    {
      this.points[index] = this.tr.rotation2D(this.points[index], angulo)
    }
  }

  draw() {
    beginShape();

    this.points.forEach(point => vertex(point.get(1), point.get(2)));

    endShape(CLOSE);
  }
} 

class Circle {
  constructor(x, y, r, t) {
    if(t<3) throw "Defina uma quantidade maior de triangulos";

    this.points = [];

    for (let indice = 0; indice <= t; indice++) {
      this.points.push(new Vector(2, [Math.cos(2 * Math.PI * (indice/t)) * r, Math.sin(2 * Math.PI * (indice/t)) * r]))
    }

    this.tr = new Transformations();
  }

  rotate(angulo) {
    for (var index = 0; index < this.points.length; index++)
    {
      this.points[index] = this.tr.rotation2D(this.points[index], angulo)
    }
  }

  draw() {
    beginShape();

    this.points.forEach(point => vertex(point.get(1), point.get(2)));

    endShape(CLOSE);
  }
} 

class Triangle {
  constructor(x1, y1, x2, y2, x3, y3) {
    this.points = [
      new Vector(2, [x1, y1]),
      new Vector(2, [x2, y2]),
      new Vector(2, [x3, y3]),
    ];
   
    this.tr = new Transformations();
  }

  rotate(angulo) {
    for (var index = 0; index < this.points.length; index++)
    {
      this.points[index] = this.tr.rotation2D(this.points[index], angulo)
    }
  }

  draw() {
    beginShape();

    this.points.forEach(point => vertex(point.get(1), point.get(2)));

    endShape(CLOSE);
  }
} 