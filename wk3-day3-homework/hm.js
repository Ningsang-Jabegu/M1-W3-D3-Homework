//for square
function squareNumber(num) {
    var squaredNumber = num * num;
    document.getElementById("solution").innerHTML = 'The result of squaring the number ' + num + ' is ' + squaredNumber;
}
    
var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function() {
  var num = document.getElementById("square-input").value;
  squareNumber(num);
});

//for half
function halfNumber(num1) {
    var halfNumber = (num1/2);
    document.getElementById("solution").innerHTML = 'Half of ' + num1 + ' '+' ís ' + halfNumber;
}

var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function() {
  var num1 = document.getElementById("half-input").value;
  halfNumber(num1);
});

//for fraction and whole
function fractNumber(num2,num3) {
    var fractNumber = (num2/100);
    var WholNumber = (num3);
    document.getElementById("solution").innerHTML = num2 + ' is ' + (fractNumber * WholNumber) + '% of ' + num3;
}

var fractButton = document.getElementById("percent-button");
fractButton.addEventListener("click",function() {
  var num2 = document.getElementById("percent1-input").value;
  var num3 = document.getElementById("percent2-input").value;
  fractNumber(num2,num3);
})
 
//for integer
function intNumber(num4) {
  var rouNumber = Math.round(num4);
  document.getElementById("solution").innerHTML = 'The nearest whole number of ' + num4 + ' is ' + rouNumber;
}

var intButton = document.getElementById("int-button");
intButton.addEventListener("click", function() {
  var num4 = document.getElementById("int-input").value;
  intNumber(num4);
})

//for area of a circle
pi= 3.14;
function areaNumber(num5) {
  var radius = (num5*num5);
  document.getElementById("solution").innerHTML = 'The area of circle with radius ' + num5 + ' is '+ (22/7)*radius;
}

var areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function() {
  var num5 = document.getElementById("area-input").value;
  areaNumber(num5);
})