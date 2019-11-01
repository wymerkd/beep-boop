

//Business Logic

var beep = "Beep!"
var boop = "Boop!"
var sorry = "I'm sorry, Dave. I'm afraid I can't do that."
// var numberAlerts = ["1", "2", "3"]

var userResult = [];
// var newUserResult = [];
// var tests = userResult.toString();

var counter = function(numbersCounted) {
  for (i=0; i <= numbersCounted; i++) {
    userResult.push(i);
  }
}



// var hey = tests.map(function(test) {
//     if (numberAlerts.includes(test)){
//       newUserResult.push(beep);
//     // } else if (i === 2) {
//     //   userResult.push(boop);
//     // } else if (i === 3) {
//     //   userResult.push(sorry);
//     } else {
//       userResult.push(i);
//     }
//   });





// for loop to see if test string includes 1 2 3


// var splitNumbers = function(test) {
  //   userResult.toString().split('').push();
  // }



  // var test = userResult.map(function(result) {
    //       if (one.includes(result)){
      //         return(beep)
      //       } else {
        //         return (userResult)
        //       }
        //     });

    //
    //     if (i === 1) {
    //       userResult.push(beep);
    //     } else if (i === 2) {
    //       userResult.push(boop);
    //     } else if (i === 3) {
    //       userResult.push(sorry);
    //     } else {
    //       userResult.push(i);
    //     }
    //   }
    // }
    //

    // userResult.push(i);




    //User Interface Logic
    $(document).ready(function() {
      $("form#submitForm").submit(function(event) {
        event.preventDefault();
        var userInput = parseInt($("input#userInput").val());
        var numbersCounted = counter(userInput);
        // var tests = userResult.toString().split('');

        // var numbersCounted2 = counter2(test);
          // console.log(tests)
          $("#displayResult").text(userResult);
          userResult = [];
        });
      });
