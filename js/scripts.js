



//Business Logic

var beep = "Beep!"
var boop = "Boop!"
var sorry = "I'm sorry, Dave. I'm afraid I can't do that."
var one = "1"


var userNumbers = [];
var convertedNumbers = [];
var userOutput = [];




function counter(countedNumbers) {
  for (i=0; i <= countedNumbers; i++) {
    userNumbers.push(i);
  }
}

function convert(countedNumbers) {
  convertedNumbers.push(userNumbers.toString());
}


var checkFunction = function(convertedNumbers) {
  for (i = 0; i < convertedNumbers; i++) {
    if (convertedNumbers.includes(one)) {
      userOutput.push("beep");
    } else if (convertedNumbers.includes("2")) {
      return ("boop");
    } else {
      return convertedNumbers;
    }
  }
}



// var replaceNumbers = convertedNumbers.map(function(convertedNumber) {
  //   if (convertedNumber.includes("1")) {
    //     return ("1" = "Beep");
    //   } else {
      //     return("Boop")
      //   }
      // });







      // for (i=0; i < convertedNumbers; i++) {
        //   if (i === "1") {
          //     userOutput.push(beep);
          //   } else if (i === "2") {
            //     userOutput.push(boop);
            //   } else if (i === "3") {
              //     userOutput.push(sorry);
              //   } else {
                //     userOutput.push(i);
                //   }
                // }






                //User Interface Logic
                $(document).ready(function() {
                  $("form#submitForm").submit(function(event) {
                    event.preventDefault();
                    var userInput = parseInt($("input#userInput").val());
                    var countedNumbers = counter(userInput);
                    var convertNumbers = convert(countedNumbers);
                    var result = checkFunction(convertedNumbers);
                    console.log(convertedNumbers);
                    console.log(userOutput);
                    // console.log(replaceNumbers);
                    $("#displayResult").text(userOutput);
                  });
                });
