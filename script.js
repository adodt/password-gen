// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Variables
let confirmLength = "";
let confirmCharacters
let confirmLowerCase
let confirmUpperCase
let confirmNumbers

//ask how many characters in password
function generatePassword(){
    var confirmLength = (prompt("How many charaters would you like in your password? Between 9-127."));

    if(confirmLength <=8 || confirmLength >= 128){
        alert("Password must be between 9-127 characters.");
    } else (confirmLength >=9 || confirmLength <=128);
        alert(`Your password will have ${confirmLength} characters`);
    }


    



    //var confirmLength <= 8 || confirmLength >=128
//if outside parameters, start over

//alert how many characters the password will have

//determine parameters of password

//LOOP go back to choice if choice is outside parameter

//add parameters to password 

//create password from empty string

//return pasword to #password

//run