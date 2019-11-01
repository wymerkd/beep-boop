

//Business Logic

var beep = "Beep!"
var boop = "Boop!"
var sorry = "I'm sorry, Dave. I'm afraid I can't do that."
// var newUserResult = [];
var userNumbers2 = [];
var userNumbers = [];
var userConvertedNumbers = userNumbers.toString();

var counter = function(numbersCounted) {
  for (i=0; i <= numbersCounted; i++) {
    userNumbers2.push(i);
  }
}

var identify = function(number) {
  for (i=0; i <= userConvertedNumbers; i++) {
    if (i === "1") {
      userNumbers.push(beep);
    }
  }
}

//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var numbersCounted = counter(userInput);
    identify(userConvertedNumbers);
    $("#displayResult").text(userNumbers2);
    userNumbers2 = [];
  });
});
