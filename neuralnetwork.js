function sigmoid(x) {
  return 1 / (1 + Math.exp(-x)); // the sigmoid function 
}

class NeuralNetwork {
  constructor(iNodes, hNodes, oNodes) {
    this.iNodes = iNodes; // the first input when calling the neural network
    this.hNodes = hNodes; // the second input when calling the neural network
    this.oNodes = oNodes; // the third input when calling the neural network
    this.weights_ih = new Matrix(this.hNodes, this.iNodes);
    this.weights_ho = new Matrix(this.oNodes, this.hNodes);
    this.weights_ih.randomize(); // creating random weights
    this.weights_ho.randomize(); // creating random weights
    this.bias_h = new Matrix(this.hNodes, 1); // creating the bias for the hidden layers
    this.bias_o = new Matrix(this.oNodes, 1); // creating the bias for the output
    this.bias_h = Math.floor(Math.random() * 3 - 1); // giving the hidden layer bias a random number
    this.bias_o = Math.floor(Math.random() * 3 - 1); // giving the output bias a random number

  }
  feedforward(input_array) {
    // generating hidden outputs
    let inputs = Matrix.fromArray(input_array); // making variable for the array input in sketch.js
    let hidden = Matrix.multiply(this.weights_ih, inputs);
    hidden.add(this.bias_h); // adding the bias for the hidden layer to the hidden layer
    // activation function
    hidden.map(sigmoid); // applying the sigmoid function
    let output = Matrix.multiply(this.weights_ho, hidden); // making the output matrix by multiplying
    output.add(this.bias_o); // adding the output bias to the output matrix
    output.map(sigmoid); // applying the sigmoid function to the output matrix
    console.log(this.bias_h); // logging the hidden layer bias
    console.log(this.bias_o); // logging the output bias
    return output.toArray(); // returning the result to be called in sktch.js
  }
  train(inputs, answer) {

  }
}
