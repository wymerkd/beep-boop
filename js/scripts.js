
//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
  event.preventDefault();
  var userNumber = parseInt($("input#userInput").val());
  console.log(typeof userNumber);
});
});
