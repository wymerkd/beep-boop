
//Business Logic

var beep = "Beep!"
var boop = "Boop!"
var sorry = "I'm sorry, Dave. I'm afraid I can't do that."
var one = [1]

// var userResult = []
// var counter = function(userNumber) {
//   for (i=0; i <= userNumber; i++) {
  
  var counter = numbers.map(function(number) {
    if (i === 1) {
      userResult.push(beep);
    } else if (i === 2) {
      userResult.push(boop);
    } else if (i === 3) {
      userResult.push(sorry);
    } else {
      userResult.push(i);
    }
  });

// userResult.push(i);




//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    // var countUserNumber = counter(userNumber);
    $("#displayResult").text(userResult);
    userResult = [];
  });
});
