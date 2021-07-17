// Assignment Code
var generateBtn = document.querySelector("#generate");

confirmRange();
var upperCase
var lowerCase
var specialChar
var numbers

function confirmRange() {

  //create prompt for users desired password criteria
  num = prompt("How many characters would you like? Please choose between 8-128.");
  
  if (parseInt(num) < 8 || parseInt(num) > 128) {
      alert("Please choose a number greater than 8 or less than 128!");
      return confirmRange();
  
  }  else {
  upperCase = confirm("Do you want to use uppercase characters such as (ABC)?");
  lowerCase = confirm("Do you want to use lowercase characters such as (abc)?");
  specialChar = confirm("Do you want to use special characters such as (<}{!@#)?");
  number = confirm("Do you want to use numbers such as (12345)?");
      }
     
  }
  
  if (lowerCase === false && upperCase === false && specialChar === false && numbers === false) {
      alert("Please choose at least one option to procceed with generator.")
  }

  function generatePassword() {

    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special = "!@#$%^&*()-_=+;:',<.>/?";
    var numbers = "0123456789";
    var pass = "";
    if (lowerCase) {
        pass = pass + lower;
    }
    if (upperCase) {
        pass = pass + upper;
    }
    if (specialChar) {
        pass = pass + special;
    }
    if (number) {
        pass = pass + numbers;
    }
    
    var password = "";
    
    
    for (var i = 0; i < num; i++) {
        
        var character = Math.floor(Math.random() * pass.length);
        password += pass.substring(character, character + 1);
    }

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    
  }

     




generateBtn.addEventListener("click", generatePassword);

