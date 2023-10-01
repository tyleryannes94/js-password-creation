// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var charsetLowercase = "abcdefghijklmnopqrstuvwxyz";
  var charsetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charsetNumeric = "0123456789";
  var charsetSpecial = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var passwordLength = ""; 

  var passwordInput = prompt ("How many characters should your passwordd be? Enter a number between 8 and 128.");

  if (passwordInput < 8 || passwordInput > 128){
    alert ("You need to choose an integer between 8 and 128. Try again!");
    return "";
  }

  if (confirm("Do you want to include a lowercase letter in your password? If yes, click OK. If no, click Cancel to proceed to your next selection.")) passwordLength += charsetLowercase;
  if (confirm("Do you want to include an upper case letter in your password? If yes, click OK. If no, click Cancel to proceed to your next selection.")) passwordLength += charsetUppercase;
  if (confirm("Do you want to include a number in your password? If yes, click OK. If no, click Cancel to proceed to your next selection.")) passwordLength += charsetNumeric;
  if (confirm("Do you want to include a special character in your password? If yes, click OK. If no, click Cancel to proceed to your next selection. Remember you must choose at least one of these selections!")) passwordLength += charsetSpecial;

  var password = "";
  for (var i = 0, n = passwordLength.length; i < passwordInput; ++i) {
      password += passwordLength.charAt(Math.floor(Math.random() * n));
  }

  if (passwordLength === ""){
    alert ("You need to select at least 1 character type. Try again!");
    return "";

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

function copyPassword () {
  var copyText = document.getElementById ("password").value;
  navigator.clipboard.writeText(copyText).then(function() {
    alert("Copied your password.");
  }).catch(function(err) {
    alert('Something went wrong', err);
  });
}
