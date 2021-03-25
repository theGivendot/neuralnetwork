
// var name = new Matrix(rows, columns)
// name.randomize()
// console.table(name.data)


// A * B != B * A

class Matrix {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = [];
      for (var r = 0; r < this.rows; r++) {
        this.data[r] = []; // setting this.data to an empty array
        for (var c = 0; c < this.cols; c++) {
          this.data[r][c] = 0; // setting each object in the array to 0
        }
      }
    }
    static fromArray(arr) {
      let m = new Matrix(arr.length, 1);
      for (let i = 0; i < arr.length; i++) {
        m.data[i][i] = arr[i]; // each object in the array is made an a value in matrix
      }
      return m;
    }
    toArray() {
      let arr = [];
      for (var r = 0; r < this.rows; r++) {
        for (var c = 0; c < this.cols; c++) {
          arr.push(this.data[r][c]); // change each value in matrix to object in an array
        }
      }
      return arr;
    }
    randomize() {
      for (var r = 0; r < this.rows; r++) {
        for (var c = 0; c < this.cols; c++) {
          this.data[r][c] = Math.floor(Math.random() * 2 - 1); // create a random value and assign it to the current object in the array
        }
      }
    }
    multiply(n) {
      for (var r = 0; r < this.rows; r++) {
        for (var c = 0; c < this.cols; c++) {
          this.data[r][c] *= n;
        }
      }
    }
    add(n) {
      if (n instanceof Matrix) {
        for (var r = 0; r < this.rows; r++) {
          for (var c = 0; c < this.cols; c++) {
            this.data[r][c] += n.data[r][c]; // add each objects to each other in multiple matrix
          }
        }
      }
      for (var r = 0; r < this.rows; r++) {
        for (var c = 0; c < this.cols; c++) {
          this.data[r][c] += n; // add one value to every value in matrix
        }
      }
    }
    transpose() {
      let result = new Matrix(this.cols, this.rows);
      for (var r = 0; r < this.rows; r++) {
        for (var c = 0; c < this.cols; c++) {
          result.data[c][r] = this.data[r][c]; // the rows become the columns and the columns become the rows 
        }
      }
      return result;
    }
    map(func) {
      for (var r = 0; r < this.rows; r++) {
        for (var c = 0; c < this.cols; c++) {
          let value = this.data[r][c];
          this.data[r][c] = func(value); // call any function
        }
      }
    }
    static multiply(a, b) {
      if (a.cols !== b.rows) {
        console.log('rows and columns do not match');
        return undefined;
          }
          let result = new Matrix(a.rows, b.cols)
          for (var r = 0; r < result.rows; r++) {
            for (var c = 0; c < result.cols; c++) {
              let sum = 0;
              for (let k = 0; k < a.rows; k++) {
                sum += a.data[r][k] + b.data[k][c]; // matrix multiplication Matrix.multiply(matrix_one, matrix_two)
                }
            result.data[r][c] = sum;
            }
          }
          return result;
        }
    see() {
      var m = new Matrix(2,3);
      var m2 = new Matrix(3,2);
      m.randomize();
      m2.randomize();
      console.table(m.data);
      console.table(m2.data);
      let m3 = m.multiply(m2);
    }
}
