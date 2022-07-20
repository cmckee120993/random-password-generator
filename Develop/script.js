// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generate () {
  prompt ("Would you like numbers in your password? Type Y for yes or N for no.");
  prompt ("Would you like special characters in your password? Type Y for yes or N for no.");
  prompt ("Would you like upper case letters in your password? Type Y for yes or N for no.");
  prompt ("Would you like lowercase letters in your password? Type Y for yes and N for no.")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
