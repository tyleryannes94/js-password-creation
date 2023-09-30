// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var charsetLowercase = "abcdefghijklmnopqrstuvwxyz";
  var charsetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charsetNumeric = "0123456789";
  var charsetSpecial = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
 

  var passwordInput = prompt ("How many characters should your passwordd be? Enter a number between 8 and 128.");

  if (passwordInput < 8 || passwordInput > 128){
    alert ("You need to choose an integer between 8 and 128. Try again!");
    return "";
  }

  if (confirm("Include lowercase letters?")) password += charsetLowercase;

  var password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
