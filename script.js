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
  //sets the possibleCharacters array
  var possibleCharacters = [];
      //function to ensure that at least 1 of the password criteria is selected
      function checkPossibleCharacters() {
      //prompts the user to select whether they would like numbers in their password; if confirm, numbers array is added to possibleCharacters array
      var confirmNumbers = confirm("You can generate a password with numbers, special characters, lowercase letters, and/or uppercase letters.  Would you like numbers in your password?");
      
      if (confirmNumbers) {
        possibleCharacters = possibleCharacters.concat(number);
      }
      //prompts the user to select whether they would like special characters in their password; if confirm, characters array is added to possibleCharacters array
      var confirmCharacters = confirm("Would you like special characters in your password?");
      
      if (confirmCharacters) {
        possibleCharacters = possibleCharacters.concat(character);
      }
      //prompts the user to select whether they would like lowercase letters in their password; if confirm, lowerCase array is added to possibleCharacters array
      var confirmLowerCase = confirm("Would you like lowercase letters in your password?");
      
      if (confirmLowerCase) {
        possibleCharacters = possibleCharacters.concat(lowerCase);
      }
      //prompts the user to select whether they would like uppercase letters in their password; if confirm, upperCase array is added to possibleCharacters array
      var confirmUpperCase = confirm("Would you like uppercase letters in your password?");
      
      if (confirmUpperCase) { 
        possibleCharacters = possibleCharacters.concat(upperCase);
      }
      // if user doesn't select at least one criteria, they are alerted and function is regenerated
      if ((!confirmNumbers)&&(!confirmCharacters)&&(!confirmLowerCase)&&(!confirmUpperCase)) {
          alert("You must choose at least 1 criteria for your password: numbers, special characters, lowercase letters, and/or uppercase letters.")
          checkPossibleCharacters();
      }
      // if user selects at least 1 criteria, possibleCharacters is returned 
      return possibleCharacters;
      }
    // calls the function 
    checkPossibleCharacters();
  console.log(possibleCharacters);

  
  //prompts the user to enter a number of characters for their password between 8 and 128.  If they choose the wrong number of characters, they will be required to reenter a number.
  var numberOfCharacters = Number(prompt("How many characters would you like in your password?  You must have at least 8 characters and no more than 128."));

  while (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Your selection must be at least 8 and no more than 128.");
    var numberOfCharacters = Number(prompt("How many characters would you like in your password?  You must have at least 8 characters and no more than 128."));

  }
  
  alert("Great choice!");


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