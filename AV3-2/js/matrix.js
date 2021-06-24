class Matrix {
  constructor(linhas, colunas, elementos) {
    this.linhas = linhas;
    this.colunas = colunas;

    if (elementos == undefined) {
      this.elementos = [];

      for (let x = 0; x < this.linhas * this.colunas; x++) {
        this.elementos.push(0);
      }
    } else {
      if (elementos.length == this.linhas * this.colunas) {
        this.elementos = elementos;
      } else {
        throw "A quantidade de elementos está incompatível com a dimensão da matriz";
      }
    }
  }

  get(i, j) {
    if (i <= 0 || i > this.linhas)
      throw "O índice da linha não é compatível com a matriz " + i;
    if (j <= 0 || j > this.colunas)
      throw "O índice da coluna não é compatível com a matriz " + j;

    return this.elementos[this.getIndex(i, j)];
  }

  set(i, j, elemento) {
    if (i <= 0 || i > this.linhas)
      throw "O índice da linha não é compatível com a matriz";
    if (j <= 0 || j > this.colunas)
      throw "O índice da coluna não é compatível com a matriz";

    this.elementos[this.getIndex(i, j)] = elemento;
  }

  getIndex(i, j) {
    return j - 1 + (i - 1) * this.colunas;
  }
}

class Vector {
  constructor(dimensao, elementos) {
    this.dimensao = dimensao;

    if (elementos == undefined) {
      this.elementos = [];

      for (let x = 0; x < this.dimensao; x++) {
        this.elementos.push(0);
      }
    } else {
      if (elementos.length == this.dimensao) {
        this.elementos = elementos;
      } else {
        throw "A quantidade de elementos está incompatível com a dimensão do vetor";
      }
    }
  }

  get(i) {
    if (i <= 0 || i > this.dimensao)
      throw "O índice da linha não é compatível com o vetor";

    return this.elementos[this.getIndex(i)];
  }

  set(i, elemento) {
    if (i <= 0 || i > this.dimensao)
      throw "O índice da linha não é compatível com o vetor" + i;

    this.elementos[this.getIndex(i)] = elemento;
  }

  getIndex(i) {
    return i - 1;
  }
}

class LinearAlgebra {
  transpose(a) {
    const tipo = a.constructor.name;

    if (tipo == "Matrix") {
      let matriz = new Matrix(a.linhas, a.colunas);

      for (let i = 1; i <= matriz.linhas; i++) {
        for (let j = 1; j <= matriz.colunas; j++) {
          matriz.set(i, j, a.get(j, i));
        }
      }

      return matriz;
    } else {
      let vetor = new Vector(a.dimensao);

      for (let i = 1; i <= vetor.dimensao; i++) {
        vetor.set(i, a.get(vetor.dimensao - (i - 1)));
      }

      return vetor;
    }
  }

  sum(a, b) {
    const tipoA = a.constructor.name;
    const tipoB = b.constructor.name;

    if (tipoA == "Matrix" && tipoB == "Matrix") {
      if (a.linhas != b.linhas || a.colunas != b.colunas)
        throw "As matrizes são incompatíveis";

      let matriz = new Matrix(a.linhas, a.colunas);

      for (let i = 1; i <= matriz.linhas; i++) {
        for (let j = 1; j <= matriz.colunas; j++) {
          matriz.set(i, j, a.get(i, j) + b.get(i, j));
        }
      }

      return matriz;
    } else if (tipoA == "Vector" && tipoB == "Vector") {
      if (a.dimensao != b.dimensao) throw "Os vetores são incompatíveis";

      let vetor = new Vector(a.dimensao);

      for (let i = 1; i <= vetor.dimensao; i++) {
        vetor.set(i, a.get(i) + b.get(i));
      }

      return vetor;
    } else {
      throw "Dados incompatíveis";
    }
  }

  times(a, b) {
    const tipoA = a.constructor.name;
    const tipoB = b.constructor.name;

    if (tipoA == "Matrix" && tipoB == "Matrix") {
      if (a.linhas != b.linhas || a.colunas != b.colunas)
        throw "As matrizes são incompatíveis";

      let matriz = new Matrix(a.linhas, a.colunas);

      for (let i = 1; i <= matriz.linhas; i++) {
        for (let j = 1; j <= matriz.colunas; j++) {
          matriz.set(i, j, a.get(i, j) * b.get(i, j));
        }
      }

      return matriz;
    } else if (tipoA == "Vector" && tipoB == "Vector") {
      if (a.dimensao != b.dimensao) throw "Os vetores são incompatíveis";

      let vetor = new Vector(a.dimensao);

      for (let i = 1; i <= vetor.dimensao; i++) {
        vetor.set(i, a.get(i) * b.get(i));
      }

      return vetor;
    } else if (tipoA == "Number") {
      if (tipoB == "Matrix") {
        let matriz = new Matrix(b.linhas, b.colunas);

        for (let i = 1; i <= matriz.linhas; i++) {
          for (let j = 1; j <= matriz.colunas; j++) {
            matriz.set(i, j, a * b.get(i, j));
          }
        }

        return matriz;
      } else if (tipoB == "Vector") {
        let vetor = new Vector(b.dimensao);

        for (let i = 1; i <= vetor.dimensao; i++) {
          vetor.set(i, a * b.get(i));
        }

        return vetor;
      } else {
        throw "Dados incompatíveis";
      }
    } else {
      throw "Dados incompatíveis";
    }
  }

  dot(a, b) {
    const tipoA = a.constructor.name;
    const tipoB = b.constructor.name;

    if (tipoA == "Matrix" && tipoB == "Matrix") {
      if (a.linhas != b.colunas && a.colunas != b.linhas)
        throw "As matrizes são incompatíveis";

      let matriz = new Matrix(a.linhas, b.colunas);

      for (let i = 1; i <= b.colunas; i++) {
        for (let j = 1; j <= a.linhas; j++) {
          for (let k = 1; k <= a.colunas; k++) {
            matriz.set(j, i, matriz.get(j, i) + a.get(j, k) * b.get(k, i));
          }
        }
      }

      return matriz;
    } else {
      throw "Dados incompatíveis";
    }
  }

  gauss(a) {
    const tipo = a.constructor.name;

    if (tipo == "Matrix") {
      let matriz = a;

      for (let i = 1; i <= matriz.linhas; i++) {
        let linhaMax = i;

        // Verifica o pivor maior
        for (let j = i + 1; j < matriz.colunas; j++) {
          if (matriz.get(linhaMax, i) < matriz.get(j, i)) {
            linhaMax = j;
          }
        }

        // Permutar as linhas
        for (let j = i; j <= matriz.colunas; j++) {
          let temporario = matriz.get(linhaMax, j);
          matriz.set(linhaMax, j, matriz.get(i, j));
          matriz.set(i, j, temporario);
        }

        for (let j = i + 1; j <= matriz.colunas; j++) {
          var coeficiente = -matriz.get(j, i) / matriz.get(i, i);

          for (let k = i; k <= matriz.colunas; k++) {
            if (i === k) {
              matriz.set(j, k, 0);
            } else {
              matriz.set(
                j,
                k,
                matriz.get(j, k) + coeficiente * matriz.get(i, k)
              );
            }
          }
        }
      }

      return matriz;
    } else {
      throw "Dados incompatíveis";
    }
  }

  solve(a) {
    const tipo = a.constructor.name;

    if (tipo == "Matrix") {
      let matrizReduzida = this.gauss(a);

      let solucao = new Vector(matrizReduzida.colunas - 1);

      for (let i = matrizReduzida.colunas - 1; i > 1; i--) {
        solucao.set(
          i,
          matrizReduzida.get(i, matrizReduzida.colunas) /
            matrizReduzida.get(i, i)
        );
        // console.log(matrizReduzida.get(i, matrizReduzida.colunas) / matrizReduzida.get(i, i));
        for (let j = matrizReduzida.colunas - 1; j > 1; j--) {
          matrizReduzida.set(
            j,
            matrizReduzida.colunas,
            matrizReduzida.get(j, matrizReduzida.colunas) -
              matrizReduzida.get(j, i) * solucao.get(i)
          );
        }
      }

      console.log(solucao);
      return solucao;
    } else {
      throw "Dados incompatíveis";
    }
  }

  det(a) {
    const tipo = a.constructor.name;
    const quadrada = a.colunas == a.linhas;

    if (tipo == "Matrix") {
      if (quadrada) {
        let matriz = a;

        for (let i = 1; i <= matriz.linhas; i++) {
          let linhaMax = i;

          // Verifica o pivor maior
          for (let j = i + 1; j < matriz.colunas; j++) {
            if (matriz.get(linhaMax, i) < matriz.get(j, i)) {
              linhaMax = j;
            }
          }

          // Permutar as linhas
          for (let j = i; j <= matriz.colunas; j++) {
            let temporario = matriz.get(linhaMax, j);
            matriz.set(linhaMax, j, matriz.get(i, j));
            matriz.set(i, j, temporario);
          }

          for (let j = i + 1; j <= matriz.colunas; j++) {
            var coeficiente = matriz.get(j, i) / matriz.get(i, i);

            for (let k = i; k <= matriz.colunas; k++) {
              if (i === k) {
                matriz.set(j, k, 0);
              } else {
                matriz.set(
                  j,
                  k,
                  matriz.get(j, k) - coeficiente * matriz.get(i, k)
                );
              }
            }
          }
        }

        // Montar elementos
        let retorno = 1;

        for (let i = 1; i <= matriz.linhas; i++) {
          for (let j = 1; j <= matriz.colunas; j++) {
            if (i == j) retorno = retorno * matriz.get(i, j);
          }
        }

        return retorno;
      } else {
        throw "Matriz precisa ser quadrada";
      }
    } else {
      throw "Dados incompatíveis";
    }
  }

  gaussInverse(a, matrizI) {
    const tipo = a.constructor.name;

    if (tipo == "Matrix") {
      let matriz = a;
      let matrizIdentidade = matrizI;

      for (let i = 1; i <= matriz.linhas; i++) {
        let linhaMax = i;

        // Verifica o pivor maior
        for (let j = i + 1; j < matriz.colunas; j++) {
          if (matriz.get(linhaMax, i) < matriz.get(j, i)) {
            linhaMax = j;
          }
        }

        // Permutar as linhas
        for (let j = i; j <= matriz.colunas; j++) {
          let temporario = matriz.get(linhaMax, j);
          matriz.set(linhaMax, j, matriz.get(i, j));
          matriz.set(i, j, temporario);
        }

        for (let j = i + 1; j <= matriz.colunas; j++) {
          var coeficiente = matriz.get(j, i) / matriz.get(i, i);

          for (let k = i; k <= matriz.colunas; k++) {
            if (i === k) {
              matriz.set(j, k, 0);
            } else {
              console.log("COEF", matrizIdentidade.get(j, k), coeficiente);
              matriz.set(
                j,
                k,
                matriz.get(j, k) + coeficiente * matriz.get(i, k)
              );
              matrizIdentidade.set(
                j,
                k,
                matrizIdentidade.get(j, k) - coeficiente
              );
            }
          }
        }
      }
      console.log("COEF", matrizIdentidade);

      return matrizIdentidade;
    } else {
      throw "Dados incompatíveis";
    }
  }

  inverse(a) {
    const tipo = a.constructor.name;
    const quadrada = a.colunas == a.linhas;

    if (tipo == "Matrix") {
      if (quadrada) {
        let matriz = new Matrix(a.linhas, a.colunas);

        for (let i = 1; i <= matriz.linhas; i++) {
          for (let j = 1; j <= matriz.colunas; j++) {
            if (i == j) matriz.set(i, j, 1);
            else matriz.set(i, j, 0);
          }
        }

        let matrizReduzida = this.gaussInverse(a, matriz);
        console.log("AAA", matrizReduzida);

        let solucao = new Matrix(matrizReduzida.linhas, matrizReduzida.colunas);

        for (let i = matrizReduzida.colunas - 1; i > 1; i--) {
          solucao.set(
            i,
            matrizReduzida.get(i, matrizReduzida.colunas) /
              matrizReduzida.get(i, i)
          );

          for (let j = matrizReduzida.colunas - 1; j > 1; j--) {
            matrizReduzida.set(
              j,
              matrizReduzida.colunas,
              matrizReduzida.get(j, matrizReduzida.colunas) -
                matrizReduzida.get(j, i) * solucao.get(i)
            );
          }
        }

        return solucao;
      } else {
        throw "Matriz precisa ser quadrada";
      }
    } else if (tipo == "Vector") {
      let array = new Vector(a.dimensao);
      for (let indice = a.dimensao; indice > 0; indice--) {
        array.set(a.dimensao - indice + 1, a.get(indice));
      }
      return array;
    } else {
      throw "Dados incompatíveis";
    }
  }
}
