// sets the var generateBtn to pull the #generate button from HTML (traversing the code)
var generateBtn = document.querySelector("#generate");

// establishes variables for the criteria options
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var character = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "-", "`", "{", "|", "}", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function writePassword establishes:
//       * var password which calls the generatePassword function
//       * var passwordText which calls the password id from HTML (traversing the code)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// function called within writePassword function to generate password
function generatePassword() {
  // establishes an empty array to fill with user-selected criteria
  var possibleCharacters = [];
  // user is prompted to confirm whether they want numbers in their password
  var confirmNumbers = confirm("You can generate a password with numbers, special characters, lowercase letters, and/or uppercase letters.  Would you like numbers in your password?");
  // if user clicks "ok," the number array is added to the possibleCharacters array
  if (confirmNumbers) {
    possibleCharacters = possibleCharacters.concat(number);
  }
  // user is prompted to confirm whether they want special characters in their password
  var confirmCharacters = confirm("Would you like special characters in your password?");
  // if user clicks "ok," the character array is added to the possibleCharacters array
  if (confirmCharacters) {
    possibleCharacters = possibleCharacters.concat(character);
  }
  // user is prompted to confirm whether they want lowercase letters in their password
  var confirmLowerCase = confirm("Would you like lowercase letters in your password?");
  // if user clicks "ok," the lowerCase array is added to the possibleCharacters array
  if (confirmLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }
  // user is prompted to confirm whether they want uppercase letters in their password
  var confirmUpperCase = confirm("Would you like uppercase letters in your password?");
  // if user clicks "ok," the uppercase array is added to the possibleCharacters array
  if (confirmUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }
  console.log(possibleCharacters);

  //prompts the user to enter a number of characters for their password between 8 and 128.  If they choose the wrong number of characters, they will be required to reenter a number.
  var numberOfCharacters = Number(prompt("How many characters would you like in your password?  You must have at least 8 characters and no more than 128."));

    if ((numberOfCharacters > 7) && (numberOfCharacters < 129)) {
      alert("Great Choice!");
      
      } else {
      Number(prompt("Your selection must be at least 8 and no more than 128.  Please enter a new number."));
      }
  
      
  console.log(numberOfCharacters);

  // loop assigns random characters from the possibleCharacters array in the length of the requested number of characters and returns the final password
  var finalPassword = "";
    for (var i = 0; i < numberOfCharacters; i++) {

      var randomNumber = Math.floor(Math.random() * possibleCharacters.length);
      var includedCharacter = possibleCharacters[randomNumber];
      console.log(includedCharacter);
      finalPassword += includedCharacter;
  }
  return finalPassword;



}

