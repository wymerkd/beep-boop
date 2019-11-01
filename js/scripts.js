
//Business Logic

var beep = "Beep!"
var boop = "Boop!"
var sorry = "I'm sorry, Dave. I'm afraid I can't do that."
var one = [1]
var userResult = []

var counter = function(numbersCounted) {
  for (i=0; i <= numbersCounted; i++) {
    userResult.push(i);
  }
}

var splitNumbers = function(userResult) {
  userResult.toString().split('').push();
}



// var test = userResult.map(function(result) {
//       if (one.includes(result)){
//         return(beep)
//       } else {
//         return (userResult)
//       }
//     });


    // if (i === 1) {
    //   userResult.push(beep);
    // } else if (i === 2) {
    //   userResult.push(boop);
    // } else if (i === 3) {
    //   userResult.push(sorry);
    // } else {
    //   userResult.push(i);
    // }
    // }
    // }


// userResult.push(i);




//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var numbersCounted = counter(userInput);
    var test = splitNumbers(userResult);
    console.log(userResult);
    $("#displayResult").text(userResult);
    userResult = [];
  });
});
