//Business Logic

var beep = "Beep!"
var boop = "Boop!"
var sorry = "I'm sorry, Dave. I'm afraid I can't do that."
var one = "1"
var two = "2"
var three ="3"

// var finalResults = newArray
var userNumbers = [];
var results = [];

function counter(countedNumbers) {
  for (i=0; i <= countedNumbers; i++) {
    userNumbers.push(i.toString());
  }
}
function convert() {
  newArray = userNumbers.map(function(userNumber) {
    if (userNumber.includes(three)){
      return(sorry)
    } else if (userNumber.includes(two)) {
      return (boop)
    } else if (userNumber.includes(one)) {
      return (beep)
    } else {
      return (userNumber)
    }
  });
  // newArray = results
  console.log(newArray);
}





//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var countedNumbers = counter(userInput);
    var userResults = convert();
    

    // console.log(newArray);
    $("#displayResult").text(newArray);
  });
});
