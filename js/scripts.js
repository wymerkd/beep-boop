




//Business Logic

var beep = "Beep!"
var boop = "Boop!"
var sorry = "I'm sorry, Dave. I'm afraid I can't do that."
var one = "1"


var userNumbers = [];
var convertedNumbers = [];


function counter(countedNumbers) {
  for (i=0; i <= countedNumbers; i++) {
    userNumbers.push(i.toString());
  }
}

// function convert(countedNumbers) {
//   convertedNumbers.push(userNumbers.toString());
//   convertedNumbers.forEach(function(convertedNumber) {
//
//   }
//
//   if (convertedNumbers.includes('1')) {
//     return("Beep")
//   }
// }


// var checkFunction = function(convertedNumbers) {
//   var userOutput = [];
//   console.log(userOutput);
//
//     if (convertedNumbers.includes("1")) {
//       userOutput.push("beep");
//     } else if (convertedNumbers.includes("2")) {
//       return ("boop");
//     } else {
//       return convertedNumbers;
//     }
//   }










//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var countedNumbers = counter(userInput);
    // var convertNumbers = convert(countedNumbers);
    // var result = checkFunction(convertedNumbers);
    console.log(userNumbers);

    $("#displayResult").text(convertedNumbers);
  });
});
