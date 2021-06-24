class Transformations {
  translate2D(vetor, dx, dy) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 2) throw "Precisa ser em uma dimensão 2D";

      let matrizColuna = new Matrix(3, 1, [...vetor.elementos, 1]);
      let matrizTransformacao = new Matrix(3, 3, [1, 0, dx, 0, 1, dy, 0, 0, 1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      matrizResultado.elementos.pop();
      return new Vector(matrizResultado.linhas-1, [...matrizResultado.elementos]);
    } else {
      throw "Dados incompatíveis";
    }
  }

  translate3D(vetor, dx, dy, dz) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [1, 0, dx, 0, 1, dy, 0, 0, dz]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, [...matrizResultado.elementos]);
    } else {
      throw "Dados incompatíveis";
    }
  }

  reflection2DY(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 2) throw "Precisa ser em uma dimensão 2D";

      let matrizColuna = new Matrix(2, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(2, 2, [-1, 0, 0, 1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  reflection2DX(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 2) throw "Precisa ser em uma dimensão 2D";

      let matrizColuna = new Matrix(2, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(2, 2, [1, 0, 0, -1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  reflection3DX(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [1, 0, 0, 0, 1, 0, 0, 0, -1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  reflection3DY(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [1, 0, 0, 0, -1, 0, 0, 0, 1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  reflection3DZ(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [-1, 0, 0, 0, 1, 0, 0, 0, 1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  projection2DY(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 2) throw "Precisa ser em uma dimensão 2D";

      let matrizColuna = new Matrix(2, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(2, 2, [0, 0, 0, 1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  projection2DX(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 2) throw "Precisa ser em uma dimensão 2D";

      let matrizColuna = new Matrix(2, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(2, 2, [1, 0, 0, 0]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  projection3DX(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [1, 0, 0, 0, 1, 0, 0, 0, 0]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  projection3DY(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [1, 0, 0, 0, 0, 0, 0, 0, 1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  projection3DZ(vetor) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [0, 0, 0, 0, 1, 0, 0, 0, 1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  rotation2D(vetor, angulo) {
    const tipo = vetor.constructor.name;

    let anguloRadiano = (angulo / 180) * Math.PI;

    if (tipo == "Vector") {
      if (vetor.dimensao != 2) throw "Precisa ser em uma dimensão 2D";

      let matrizColuna = new Matrix(2, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(2, 2, [
        Math.cos(anguloRadiano),
        -Math.sin(anguloRadiano),
        Math.sin(anguloRadiano),
        Math.cos(anguloRadiano),
      ]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  rotation3DX(vetor, angulo) {
    const tipo = vetor.constructor.name;

    let anguloRadiano = (angulo / 180) * Math.PI;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [
        Math.cos(anguloRadiano),
        -Math.sin(anguloRadiano),
        0,
        Math.sin(anguloRadiano),
        Math.cos(anguloRadiano),
        0,
        0,
        0,
        1,
      ]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
//       return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  rotation3DY(vetor, angulo) {
    const tipo = vetor.constructor.name;

    let anguloRadiano = (angulo / 180) * Math.PI;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [
        1,
        0,
        0,
        0,
        Math.cos(anguloRadiano),
        -Math.sin(anguloRadiano),
        0,
        Math.sin(anguloRadiano),
        Math.cos(anguloRadiano),
      ]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  rotation3DZ(vetor, angulo) {
    const tipo = vetor.constructor.name;

    let anguloRadiano = (angulo / 180) * Math.PI;

    if (tipo == "Vector") {
      if (vetor.dimensao != 3) throw "Precisa ser em uma dimensão 3D";

      let matrizColuna = new Matrix(3, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(3, 3, [
        Math.cos(anguloRadiano),
        0,
        Math.sin(anguloRadiano),
        0,
        1,
        0,
        -Math.sin(anguloRadiano),
        0,
        Math.cos(anguloRadiano),
      ]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }

  shearing(vetor, kx, ky) {
    const tipo = vetor.constructor.name;

    if (tipo == "Vector") {
      if (vetor.dimensao != 2) throw "Precisa ser em uma dimensão 2D";

      let matrizColuna = new Matrix(vetor.dimensao, 1, vetor.elementos);
      let matrizTransformacao = new Matrix(2, 2, [1, ky, kx, 1]);

      const la = new LinearAlgebra();

      let matrizResultado = la.dot(matrizTransformacao, matrizColuna);

      return new Vector(matrizResultado.linhas, matrizResultado.elementos);
    } else {
      throw "Dados incompatíveis";
    }
  }
}