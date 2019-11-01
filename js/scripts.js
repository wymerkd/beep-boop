

//Business Logic

var beep = "Beep!"
var boop = "Boop!"
var sorry = "I'm sorry, Dave. I'm afraid I can't do that."
// var newUserResult = [];
var userResults = [];

var counter = function(numbersCounted) {
  for (i=0; i <= numbersCounted; i++) {
    if (i === 1) {
      userResults.push(beep);
    } else if (i === 2) {
      userResults.push(boop);
    } else if (i === 3) {
      userResults.push(sorry);
    } else {
      userResults.push(i);
    }
  }
}

//User Interface Logic
$(document).ready(function() {
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var numbersCounted = counter(userInput);
    $("#displayResult").text(userResults);
    userResults = [];
  });
});






// userResults.forEach(function(result) {
  //   if (result === 1) {
    //     newUserResult.push(beep);
    //   }
    //
    // });




    // function identifier(userResults) {
      //   for (i=0; i <= userResults; i++) {
        //     if (i === 1) {
          //       newUserResult.push(beep);
          //     } else if (i === 2) {
            //       newUserResult.push(boop);
            //     } else if (i === 3) {
              //       newUserResult.push(sorry);
              //     } else {
                //       newUserResult.push(i);
                //     }
                //   }
                // }









                //   } for (i=0; i <= numbersCounted; i++)
                //   if (i === 1) {
                  //     userResults.push(beep);
                  //   } else if (i === 2) {
                    //     userResults.push(boop);
                    //   } else if (i === 3) {
                      //     userResults.push(sorry);
                      //   } else {
                        //     userResults.push(i);
                        //   }
                        // }
                        // }





                        // var hey = tests.map(function(test) {
                          //     if (numberAlerts.includes(test)){
                            //       newUserResult.push(beep);
                            //     // } else if (i === 2) {
                              //     //   userResults.push(boop);
                              //     // } else if (i === 3) {
                                //     //   userResults.push(sorry);
                                //     } else {
                                  //       userResults.push(i);
                                  //     }
                                  //   });





                                  // for loop to see if test string includes 1 2 3


                                  // var splitNumbers = function(test) {
                                    //   userResults.toString().split('').push();
                                    // }



                                    // var test = userResults.map(function(result) {
                                      //       if (one.includes(result)){
                                        //         return(beep)
                                        //       } else {
                                          //         return (userResults)
                                          //       }
                                          //     });


                                          //     if (i === 1) {
                                            //       userResults.push(beep);
                                            //     } else if (i === 2) {
                                              //       userResults.push(boop);
                                              //     } else if (i === 3) {
                                                //       userResults.push(sorry);
                                                //     } else {
                                                  //       userResults.push(i);
                                                  //     }
                                                  //   }
                                                  // }
                                                  //

                                                  // userResults.push(i);
