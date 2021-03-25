function setup() {
  let nn = new NeuralNetwork(2, 2, 1); // making a variable for a new neural network 
  let input = [1,1]; // the neural network's input array
  console.log(input) // logging the neurl network's input array
  let outputs = nn.feedforward(input); // calling the feedforward function in neuralnetwork.js
  console.log(outputs); // logging the guess
}
