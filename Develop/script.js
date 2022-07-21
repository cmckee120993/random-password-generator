// Assignment code here


// Get references to the #generate element
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", ">", "<", "=", "?","@", "[", "]", "{", "}", "^", "_", "`", "~", "|"];
var generateBtn = document.querySelector("#generate");

function generate () {
  confirm ("Would you like numbers in your password? Click 'OK' for yes and 'Cancel' for no.");
  confirm ("Would you like special characters in your password? Click 'OK' for yes and 'Cancel' for no.");
  confirm ("Would you like upper case letters in your password? Click 'OK' for yes and 'Cancel' for no.");
  confirm ("Would you like lowercase letters in your password? Click 'OK' for yes and 'Cancel' for no.");
  prompt ("How many characters would you like in your password? Enter a number between 8 and 128.")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
