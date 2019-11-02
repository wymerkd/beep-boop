

//Business Logic

// var beep = "Beep!"
// var boop = "Boop!"
// var sorry = "I'm sorry, Dave. I'm afraid I can't do that."

var userNumbers = [];
var convertedNumbers = []


function counter(countedNumbers) {
  for (i=0; i <= countedNumbers; i++) {
    userNumbers.push(i);
  }
}

function convert(countedNumbers) {
  convertedNumbers.push(userNumbers.toString());
}




//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var countedNumbers = counter(userInput);
    var convertNumbers = convert(countedNumbers);
    console.log(convertedNumbers)
    $("#displayResult").text(userNumbers);
  });
});
