

//Business Logic

// var beep = "Beep!"
// var boop = "Boop!"
// var sorry = "I'm sorry, Dave. I'm afraid I can't do that."

var userNumbers = [];

function counter(numbersCounted) {
  for (i=0; i <= numbersCounted; i++) {
    userNumbers.push(i);
  }
}


//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var numbersCounted = counter(userInput);
    $("#displayResult").text(userNumbers);
  });
});
