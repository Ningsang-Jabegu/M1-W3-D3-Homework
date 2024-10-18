// Function to square a number
const squareNumber = (num) => {
  const squaredNumber = num * num;
  document.getElementById("solution").innerHTML = `The result of squaring the number ${num} is ${squaredNumber}`;
};

// Event listener for square button
document.getElementById("square-button").addEventListener("click", () => {
  const num = document.getElementById("square-input").value;
  squareNumber(num);
});

// Function to get half of a number
const halfNumber = (num) => {
  const half = num / 2;
  document.getElementById("solution").innerHTML = `Half of ${num} is ${half}`;
};

// Event listener for half button
document.getElementById("half-button").addEventListener("click", () => {
  const num = document.getElementById("half-input").value;
  halfNumber(num);
});

// Function to calculate percentage
const fractNumber = (num1, num2) => {
  const percentage = (num1 / 100) * num2;
  document.getElementById("solution").innerHTML = `${num1} is ${percentage}% of ${num2}`;
};

// Event listener for percentage button
document.getElementById("percent-button").addEventListener("click", () => {
  const num1 = document.getElementById("percent1-input").value;
  const num2 = document.getElementById("percent2-input").value;
  fractNumber(num1, num2);
});

// Function to round a number to the nearest integer
const intNumber = (num) => {
  const roundedNumber = Math.round(num);
  document.getElementById("solution").innerHTML = `The nearest whole number of ${num} is ${roundedNumber}`;
};

// Event listener for integer button
document.getElementById("int-button").addEventListener("click", () => {
  const num = document.getElementById("int-input").value;
  intNumber(num);
});

// Function to calculate the area of a circle
const areaNumber = (radius) => {
  const area = Math.PI * Math.pow(radius, 2);
  document.getElementById("solution").innerHTML = `The area of a circle with radius ${radius} is ${area}`;
};

// Event listener for area button
document.getElementById("area-button").addEventListener("click", () => {
  const radius = document.getElementById("area-input").value;
  areaNumber(radius);
});
