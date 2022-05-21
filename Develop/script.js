var userArray = [];
var lowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var symbols = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']',':',';','?','/','~','`','<','>'];

var characterLength = 8;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  getPrompts();

  if(getPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++){
    var randomIndex = Math.floor(Math.random() * userArray.length)
    password = password + userArray[randomIndex];
  }
  return password;
}

function getPrompts() {
  userArray = [];
  characterLength = parseInt(prompt("How long is your password? (8-128 characters)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number between 8 and 128.")
    return false;
  }

  if (confirm("Do you have lowercase letters in your password?")) {
    userArray = userArray.concat(lowerAlpha);
  }
  if (confirm("Do you have uppercase letters in your password?")) {
    userArray = userArray.concat(upperAlpha);
  }
  if (confirm("Do you have numbers in your password?")) {
    userArray = userArray.concat(numbers);
  }
  if (confirm("Do you have special characters in your password?")) {
    userArray = userArray.concat(symbols);
  }
  return true;

}