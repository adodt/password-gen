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
var arrNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arrCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var arrLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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
        (prompt("How many charaters would you like in your password? Between 9-127."));
    } else (confirmLength >=9 || confirmLength <=128);
        alert(`Your password will have ${confirmLength} characters`);

    let confirmCharacter = confirm("Would you like to include special characters?");
    let confirmLowerCase = confirm("Would you like to include lowercase?");
    let confirmUpperCase = confirm("Would you like to include uppercase?");
    let confirmNumericCharacter= confirm("Would you like to include special characters?");

    if(confirmCharacter === false && confirmLowerCase === false && confirmUpperCase === false && confirmNumericCharacter === false){
        alert("Must choose at least one parameter")
        let confirmCharacter = confirm("Would you like to include special characters?");
    let confirmLowerCase = confirm("Would you like to include lowercase?");
    let confirmUpperCase = confirm("Would you like to include uppercase?");
    let confirmNumericCharacter= confirm("Would you like to include special characters?");
    }

    let passwordCharacters = []

    if (confirmCharacter){
        passwordCharacters = passwordCharacters.concat(arrCharacters)
    }
    if (confirmNumericCharacter){
        passwordCharacters = passwordCharacters.concat(arrNums)
    }
    if (confirmLowerCase){
        passwordCharacters = passwordCharacters.concat(arrLowerCase)
    }
    if (confirmUpperCase){
        passwordCharacters = passwordCharacters.concat(arrUpperCase)
    }

console.log(passwordCharacters)


}
    


//if outside parameters, start over

//alert how many characters the password will have

//determine parameters of password

//LOOP go back to choice if choice is outside parameter

//add parameters to password 

//create password from empty string

//return pasword to #password

