// Assignment code here

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);
var password = generatePassword();

function generatePassword() {
    //all of the variables for the characters and for the new password itself 
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", ">", "<", "=", "?","@", "[", "]", "{", "}", "^", "_", "`", "~", "|"];
  var newPassword = [];

  // Prompts for the user to choose what is included in the password
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

  // Error messages
  if (wantsUpper === false && wantsLower === false && wantsNumbers === false && wantsSpecial === false) {
    window.alert("You must choose at least one character type for your password. Please try again");
    generatePassword();
  }

  if (numberOfCharacters > 128 || numberOfCharacters < 8) {
    window.alert("Your password must be at least 8 characters long and can be no longer than 128 characters. Please try again.")
    generatePassword();
  }

  // While/If loops for the password to be created based on the desired criteria of the user
  while (newPassword.length < numberOfCharacters) {
    if(wantsUpper && newPassword.length < numberOfCharacters) {
      function randomUpper() {
      var uppercase = Math.floor(Math.random()*upper.length);
      var upperCharacter = upper[uppercase];
      return upperCharacter;}
      newPassword.push(randomUpper());
  }
    if(wantsLower && newPassword.length < numberOfCharacters) {
      function randomLower() {
        var lowercase = Math.floor(Math.random()*lower.length);
        var lowerCharacter = lower[lowercase];
        return lowerCharacter;}
        newPassword.push(randomLower());
    }
    if(wantsNumbers && newPassword.length < numberOfCharacters) {
      function randomNumber() {
      var numbercase = Math.floor(Math.random()*numbers.length);
      var numberCharacter = numbers[numbercase];
      return numberCharacter;}
      newPassword.push(randomNumber());
    }
    if(wantsSpecial && newPassword.length < numberOfCharacters) {
      function randomSpecial() {
      var specialcase = Math.floor(Math.random()*special.length);
      var specialCharacter = special[specialcase];
      return specialCharacter;}
      newPassword.push(randomSpecial());
    }
  }
  // Print the new password to the user
var passwordText = document.querySelector("#password");
passwordText.value = newPassword.join('');
}