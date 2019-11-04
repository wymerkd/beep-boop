//Business Logic

var beep = " Beep !"
var boop = " Boop! "
var sorry = " I'm sorry, Dave. I'm afraid I can't do that. " //Set three messages to variables that will be displayed depending on the user's inputted number

var userNumbers = []; //Empty array to store the user's numbers after being converted to strings

function counter(countedNumbers) { //Function for for loop that counts up to user's number and stores each number as a string in the userNumbers array
  for (i=0; i <= countedNumbers; i++) {
    userNumbers.push(i.toString());
  }
}

function convert() {
  userResults = userNumbers.map(function(userNumber) { //Numbers stored in userNumbers are ran through map loop to determine if they meet the conditions in if/else if statements. Output array stored in global variable userResults
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
    var userInput = parseInt($("input#userInput").val());//Gathers user's input from HTML and converts from string to a number
    var countedNumbers = counter(userInput); //Calls function for user's inputted numbers to be ran through for loop
    convert(); //calls function for map loop
    $("#displayResult").text(userResults); //Displays user's final results in HTML
    userNumbers= []; //Empties the array so user can resuse the application withouth refreshing the page
  });
});
