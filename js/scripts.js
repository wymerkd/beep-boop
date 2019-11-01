//Business Logic
var userResult = []
var counter = function(userNumber) {
  for (i=0; i <= userNumber; i++) {
    userResult.push(i);
  }
}


//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
  event.preventDefault();
  var userNumber = parseInt($("input#userInput").val());
  var countUserNumber = counter(userNumber);
  $("#displayResult").text(userResult);
  userResult = [];
});
});
