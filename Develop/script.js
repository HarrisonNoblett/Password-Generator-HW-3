  //Assignment code
  
function generatePassword(){
  //Variables of different letters, numbers, and symbols
var diffNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","q","R","S","T","U","V","W","X","Y","Z"];
var difSymbols = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","//",":",";","<","=",">","?","@","[","/","]","^","_","`","{","|","}","~"];
var newPass = [];

var passwordLength = getPasswordLength();

var chrTypeSelected = false;

function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)){
    userChoice = window.prompt("Enter a number of characters between 8 and 128: ");

      //if not number, makes user reset the choice value to 0
    if (isNaN(userChoice)) {
      userChoice = 0;
    }
  }
    return userChoice;
}


while (chrTypeSelected == false){
  var lowerAlpha = getChoice("lowercase");
  var upperAlpha = getChoice("uppercase");
  var numChar = getChoice("numeric");
  var specialPick = getChoice("special");

  if ((lowerAlpha) || (upperAlpha) || (numChar) || (specialPick)){
    chrTypeSelected = true;
  }
  else {
    window.alert("You must select at least one charater type")
  }
}

  //prompting what the user would like to use in there password
function getChoice(currentOption){
  var userChoice = "a";
  messagePrompt = "";
  var messagePrompt = ('would your like '.concat(currentOption));
  messagePrompt = messagePrompt.concat(' characters (y/n)?');

  while (userChoice = "a") {
    userChoice = (window.prompt(messagePrompt));
    userChoice = userChoice.toLowerCase();

    if (userChoice == "y"){
      return true;
    }

    else if (userChoice == "n") {
      return false;
    }
  }

}

if (lowerAlpha) {
  newPass = newPass.concat(lowerCase)
}
if (upperAlpha) {
  newPass = newPass.concat(upperCase);
}
if (numChar) {
  newPass = newPass.concat(diffNumbers)
}
if (specialPick) {
  newPass = newPass.concat(difSymbols)
}

var passwordString = "";
  for (var i= 0; i < passwordLength; i ++) {
  passwordString += newPass[Math.floor(Math.random() * (newPass.length))];
}

return passwordString;

}

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
