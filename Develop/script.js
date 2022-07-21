// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", ">", "<", "=", "?","@", "[", "]", "{", "}", "^", "_", "`", "~", "|"];



// Write password to the #password input
function writePassword() {
  var wantsUpper = confirm("Would you like uppercased letters in your password? 'OK' for yes, 'Cancel' for no.");
  console.log(wantsUpper);
  var wantsLower = confirm("Would you like lowercased letters in your password? 'OK' for yes, 'Cancel' for no.");
  console.log(wantsLower);
  var wantsNumbers = confirm("Would you like numbers in your password? 'OK' for yes, 'Cancel' for no.");
  console.log(wantsNumbers);
  var wantsSpecial = confirm("Would you like special characters in your password? 'OK' for yes, 'Cancel' for no.");
  console.log(wantsSpecial);
  var numberOfCharacters = parseInt(prompt("How many characters would you like in your password? Write a number between 8 and 128."));
  console.log(numberOfCharacters);
  var newPassword = [];
  if (wantsUpper === false && wantsLower === false && wantsNumbers === false && wantsSpecial === false) {
    window.alert("You must choose at least one character type for your password. Please try again");
  }

  if (numberOfCharacters > 128 || numberOfCharacters < 8) {
    window.alert("Your password must be at least 8 characters long and can be no longer than 128 characters. Please try again.")
  }

  
  while (newPassword < numberOfCharacters) {
    if(wantsUpper && newPassword.length < numberOfCharacters) {
      var randomUpper = getRandomCharacter(upper);
      newPassword.push(randomUpper);
    }
    if(wantsLower && newPassword.length < numberOfCharacters) {
      var randomLower = getRandomCharacter(lower);
      newPassword.push(randomLower);
    }
    if(wantsNumbers && newPassword.length < numberOfCharacters) {
      var randomNumber = getRandomCharacter(numbers);
      newPassword.push(randomNumber);
    }
    if(wantsSpecial && newPassword.length < numberOfCharacters) {
      var randomSpecial = getRandomCharacter(special);
      newPassword.push(randomSpecial);
    }
  }
console.log(newPassword)
}

//var password = generatePassword();
//var passwordText = document.querySelector("#password");
//passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
