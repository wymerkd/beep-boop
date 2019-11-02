


//Business Logic

var beep = "Beep!"
var boop = "Boop!"
var sorry = "I'm sorry, Dave. I'm afraid I can't do that."

var userNumbers = [];
var convertedNumbers = [];
var userOutput = [];




function counter(countedNumbers) {
  for (i=0; i <= countedNumbers; i++) {
    userNumbers.push(i);
  }
}

function convert(countedNumbers) {
  convertedNumbers.push(userNumbers.toString());
}

  // for (i=0; i < convertedNumbers; i++) {
  //   if (i === "1") {
  //     userOutput.push(beep);
  //   } else if (i === "2") {
  //     userOutput.push(boop);
  //   } else if (i === "3") {
  //     userOutput.push(sorry);
  //   } else {
  //     userOutput.push(i);
  //   }
  // }






//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var countedNumbers = counter(userInput);
    var convertNumbers = convert(countedNumbers);

    $("#displayResult").text(userOutput);
  });
});
