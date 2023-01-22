// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

/* Steps;
-prompt number of characters min8 max128
-getPasswordOptions 
  prompts to get specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters
-getRandom(arr) with return response from the user 
-generatePassword() with return random elements based on the users selections 
*/

var numberOfCharacters = prompt("Hello! How many characters would you like?");
alert("You have selected, " + numberOfCharacters + " characters.");
if (numberOfCharacters > 0) {
  if (numberOfCharacters > 128) {
    alert("Password must be less than 128 characters.");
  } else if (numberOfCharacters < 8) {
    alert("Password must have a minimum of 8 characters. \n *Please select a number between 8 and 128.");
  } 
}


var specialCharacters = confirm("Would you like to use a special character?")
if (specialCharacters === true) {
  alert("You have selected yes.")}
  else {
    alert("You have selected no.")
  }
var numericCharacters = confirm("Would you like to use a numerical character?"); 
if (numericCharacters === true) {
  alert("You have selected yes.")}
  else {
    alert("You have selected no.")
  }
var lowerCasedCharacters = confirm("Would you like to use a lowercase letter?");
if (lowerCasedCharacters === true) {
  alert("You have selected yes.")}
  else {
    alert("You have selected no.")
  }
var upperCasedCharacters = confirm("Would you like to use an uppercase letter?");
if (upperCasedCharacters === true) {
  alert("You have selected yes.")}
  else {
    alert("You have selected no.")
  }

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);