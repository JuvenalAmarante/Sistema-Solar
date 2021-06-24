class Plane {
  constructor(x, y, z, w, h, l) {
    this.points = [
      new Vector(3, [x, y, z]),
      new Vector(3, [x + w, y, z]),
      new Vector(3, [x + w, y + h, z + l]),
      new Vector(3, [x, y + h, z + l]),
    ];

    this.tr = new Transformations();
  }

  rotateX(angulo) {
    for (var index = 0; index < this.points.length; index++) {
      this.points[index] = this.tr.rotation3DX(this.points[index], angulo);
    }
  }

  rotateY(angulo) {
    for (var index = 0; index < this.points.length; index++) {
      this.points[index] = this.tr.rotation3DY(this.points[index], angulo);
    }
  }

  rotateZ(angulo) {
    for (var index = 0; index < this.points.length; index++) {
      this.points[index] = this.tr.rotation3DZ(this.points[index], angulo);
    }
  }

  draw() {
    beginShape();

    this.points.forEach((point) =>
      vertex(point.get(1), point.get(2), point.get(3))
    );

    endShape(CLOSE);
  }
}

class Parallelogram {
  constructor(x, y, z, w, h, l) {
    this.points = [
      new Vector(3, [x, y, z]),
      new Vector(3, [x + w, y, z]),
      new Vector(3, [25 + x, y + h, z + l]),
      new Vector(3, [x + w, y, z]),
      new Vector(3, [25 + x + w, y + h, z + l]),
      new Vector(3, [25 + x, y + h, z + l]),
    ];

    this.tr = new Transformations();
  }

  rotateX(angulo) {
    for (var index = 0; index < this.points.length; index++) {
      this.points[index] = this.tr.rotation3DX(this.points[index], angulo);
    }
  }

  rotateY(angulo) {
    for (var index = 0; index < this.points.length; index++) {
      this.points[index] = this.tr.rotation3DY(this.points[index], angulo);
    }
  }

  rotateZ(angulo) {
    for (var index = 0; index < this.points.length; index++) {
      this.points[index] = this.tr.rotation3DZ(this.points[index], angulo);
    }
  }

  draw() {
    beginShape();

    this.points.forEach((point) =>
      vertex(point.get(1), point.get(2), point.get(3))
    );

    endShape(CLOSE);
  }
}

class Sphere {
  constructor(x, y, z, r, st, se, tipo) {
    this.points = [];
    this.newPoints = [];
    this.linhas = [];

    this.r = r;
    this.x = x;
    this.y = y;
    this.z = z;
    let sectorStep = (2 * Math.PI) / se;
    let stackStep = Math.PI / st;

    for (let indice = 0; indice <= st; indice++) {
      let stackAngle = Math.PI / 2 - indice * stackStep;
      let xy = r * Math.cos(stackAngle);
      let vz = r * Math.sin(stackAngle);
      for (let indice2 = 0; indice2 <= se; indice2++) {
        let sectorAngle = indice2 * sectorStep;
        let vx = xy * Math.cos(sectorAngle);
        let vy = xy * Math.sin(sectorAngle);
        this.points.push(new Vector(3, [vx, vy, vz]));
      }
    }

    for (let i = 0; i < st; ++i) {
      let k1 = i * (se + 1);
      let k2 = k1 + se + 1;

      for (let j = 0; j < se; ++j, ++k1, ++k2) {
        if (i == 0) {
          this.newPoints.push(this.points[k1])
          this.newPoints.push(this.points[k2])
          this.newPoints.push(this.points[k2 + 1]);
        } else if (i == (st - 1)) {
          this.newPoints.push(this.points[k1])
          this.newPoints.push(this.points[k2])
          this.newPoints.push(this.points[k1 + 1]);
        } else {
          this.newPoints.push(this.points[k1])
          this.newPoints.push(this.points[k2])
          this.newPoints.push(this.points[k1 + 1]);
          this.newPoints.push(this.points[k1]);
        }
      }
    }

    this.tr = new Transformations();
  }

  rotateX(angulo) {
    for (var index = 0; index < this.newPoints.length; index++) {
      this.newPoints[index] = this.tr.rotation3DX(this.newPoints[index], angulo);
    }
  }

  rotateY(angulo) {
    for (var index = 0; index < this.newPoints.length; index++) {
      this.newPoints[index] = this.tr.rotation3DY(this.newPoints[index], angulo);
    }
  }

  rotateZ(angulo) {
    for (var index = 0; index < this.newPoints.length; index++) {
      this.newPoints[index] = this.tr.rotation3DZ(this.newPoints[index], angulo);
    }
  }

  translateX(dx, dy, dz) {
    // for (let index = 0; index < this.newPoints.length; index++) {
    //   this.newPoints[index] = new Vector(this.newPoints[index].dimensao, [this.newPoints[index].get(1) - this.x,this.newPoints[index].get(2) - this.y, this.newPoints[index].get(3) - this.z]);
    // }

    for (let index = 0; index < this.newPoints.length; index++) {
      // this.newPoints[index] = this.tr.projection3DX(this.newPoints[index]);
    }

    // for (let index = 0; index < this.newPoints.length; index++) {
    //     this.newPoints[index] = new Vector(this.newPoints[index].dimensao, [this.newPoints[index].get(1) + this.x,this.newPoints[index].get(2) + this.y, this.newPoints[index].get(3) + this.z]);
    // }
  }

  translateY(dy) {
    for (let index = 0; index < this.newPoints.length; index++) {
      this.newPoints[index] = new Vector(this.newPoints[index].dimensao, [this.newPoints[index].get(1) - this.x,this.newPoints[index].get(2) - this.y, this.newPoints[index].get(3) - this.z]);
    }

    for (let index = 0; index < this.newPoints.length; index++) {
      this.newPoints[index] = this.tr.rotation3DY(this.newPoints[index], dy);
      this.newPoints[index] = new Vector(this.newPoints[index].dimensao, [this.newPoints[index].get(1) + this.x,this.newPoints[index].get(2) + this.y, this.newPoints[index].get(3) + this.z]);
    }
  }

  translateZ(dz) {
    for (let index = 0; index < this.newPoints.length; index++) {
      this.newPoints[index] = new Vector(this.newPoints[index].dimensao, [this.newPoints[index].get(1) - this.x,this.newPoints[index].get(2) - this.y, this.newPoints[index].get(3) - this.z]);
    }

    for (let index = 0; index < this.newPoints.length; index++) {
      this.newPoints[index] = this.tr.rotation3DZ(this.newPoints[index], dz);
      this.newPoints[index] = new Vector(this.newPoints[index].dimensao, [this.newPoints[index].get(1) + this.x,this.newPoints[index].get(2) + this.y, this.newPoints[index].get(3) + this.z]);
    }
  }

  background(r,g,b) {
    // console.log(r,g,b)
    this.color = {r,g,b};
  } 

  draw() {
    beginShape();
    // noStroke()
    for (let index = 0; index < this.newPoints.length; index++) {
      // this.newPoints[index] = this.tr.translate3D(this.newPoints[index], this.x, this.y, this.z);
      this.newPoints[index] = this.tr.translate3D(this.newPoints[index], 1, 1, 1);
      // console.log(this.tr.translate3D(this.newPoints[index], this.x, this.y, this.z));
    }
    
    if(this.color!=null) fill(color(this.color.r, this.color.g, this.color.b));

    this.newPoints.forEach((point) =>
      vertex(point.get(1), point.get(2), point.get(3))
    );
    // console.log(this.newPoints);

    endShape();
  }
}

class Pyramid {
  constructor(x, y, z, w, h, l, hp) {
    this.points = [
      new Vector(3, [x, y, z]),
      new Vector(3, [x + w, y, z]),
      new Vector(3, [x, y + h, z + l]),
      new Vector(3, [x + w, y, z]),
      new Vector(3, [x + w, y + h, z + l]),
      new Vector(3, [x, y + h, z + l]),
      new Vector(3, [x + w / 2, y + w / 2, z + hp]),
      new Vector(3, [x, y, z]),
      new Vector(3, [x + w, y, z]),
      new Vector(3, [x + w / 2, y + w / 2, z + hp]),
      new Vector(3, [x + w, y, z]),
      new Vector(3, [x + w, y + h, z + l]),
      new Vector(3, [x + w / 2, y + w / 2, z + hp]),
      new Vector(3, [x + w, y + h, z + l]),
      new Vector(3, [x, y + h, z + l]),
      new Vector(3, [x + w / 2, y + w / 2, z + hp]),
      new Vector(3, [x, y + h, z + l]),
    ];

    this.tr = new Transformations();
  }

  rotateX(angulo) {
    for (var index = 0; index < this.points.length; index++) {
      this.points[index] = this.tr.rotation3DX(this.points[index], angulo);
    }
  }

  rotateY(angulo) {
    for (var index = 0; index < this.points.length; index++) {
      this.points[index] = this.tr.rotation3DY(this.points[index], angulo);
    }
  }

  rotateZ(angulo) {
    for (var index = 0; index < this.points.length; index++) {
      this.points[index] = this.tr.rotation3DZ(this.points[index], angulo);
    }
  }

  draw() {
    beginShape();

    this.points.forEach((point) =>
      vertex(point.get(1), point.get(2), point.get(3))
    );

    endShape(CLOSE);
  }
}
