

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

//   } else if (i === 2) {
//     userNumbers.push(boop);
//   } else if (i === 3) {
//     userNumbers.push(sorry);
//   } else {
//     userNumbers.push(i);
//   }
// }
// }



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






// userNumbers.forEach(function(result) {
  //   if (result === 1) {
    //     newUserResult.push(beep);
    //   }
    //
    // });




    // function identifier(userNumbers) {
      //   for (i=0; i <= userNumbers; i++) {
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
                  //     userNumbers.push(beep);
                  //   } else if (i === 2) {
                    //     userNumbers.push(boop);
                    //   } else if (i === 3) {
                      //     userNumbers.push(sorry);
                      //   } else {
                        //     userNumbers.push(i);
                        //   }
                        // }
                        // }





                        // var hey = tests.map(function(test) {
                          //     if (numberAlerts.includes(test)){
                            //       newUserResult.push(beep);
                            //     // } else if (i === 2) {
                              //     //   userNumbers.push(boop);
                              //     // } else if (i === 3) {
                                //     //   userNumbers.push(sorry);
                                //     } else {
                                  //       userNumbers.push(i);
                                  //     }
                                  //   });





                                  // for loop to see if test string includes 1 2 3


                                  // var splitNumbers = function(test) {
                                    //   userNumbers.toString().split('').push();
                                    // }



                                    // var test = userNumbers.map(function(result) {
                                      //       if (one.includes(result)){
                                        //         return(beep)
                                        //       } else {
                                          //         return (userNumbers)
                                          //       }
                                          //     });


                                          //     if (i === 1) {
                                            //       userNumbers.push(beep);
                                            //     } else if (i === 2) {
                                              //       userNumbers.push(boop);
                                              //     } else if (i === 3) {
                                                //       userNumbers.push(sorry);
                                                //     } else {
                                                  //       userNumbers.push(i);
                                                  //     }
                                                  //   }
                                                  // }
                                                  //

                                                  // userNumbers.push(i);
