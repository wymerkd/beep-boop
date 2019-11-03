//Business Logic

var beep = " Beep !"
var boop = " Boop! "
var sorry = " I'm sorry, Dave. I'm afraid I can't do that. "

var userNumbers = [];

function counter(countedNumbers) {
  for (i=0; i <= countedNumbers; i++) {
    userNumbers.push(i.toString());
  }
}

function convert() {
  userResults = userNumbers.map(function(userNumber) {
    if (userNumber.includes('3')){
      return(sorry)
    } else if (userNumber.includes('2')) {
      return (boop)
    } else if (userNumber.includes('1')) {
      return (beep)
    } else {
      return (userNumber)
    }
  });
  console.log(userResults)
}


//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var countedNumbers = counter(userInput);
    convert();
    $("#displayResult").text(userResults);
    userNumbers= [];
  });
});
