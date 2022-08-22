// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(length, lowercase, uppercase, numeric, specialcharacters) {
  var password = '';
  var str = '';
  if (uppercase){
    str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (lowercase){
      str += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (numeric){
      str += '0123456789';
  }
  if (specialcharacters){
      str += '@#$';
  }
  for (let i = 1; i <= length; i++) {
      var char = Math.floor(Math.random()
                  * str.length + 1);
        
      password += str.charAt(char)
  }
    
  return password;
}

// Write password to the #password input
function writePassword() {
var form = document.querySelector("#constraints");
var length = document.getElementById("length").value;
var lowercase = document.getElementById("lowercase").checked;
var uppercase = document.getElementById("uppercase").checked;
var numeric = document.getElementById("numeric").checked;
var specialcharacters = document.getElementById("special-characters").checked;
checked = document.querySelectorAll("input[type=checkbox]:checked").length;
if(!checked) {
  alert("You must check at least one checkbox.");
  return false;
}
  var password = generatePassword(length, lowercase, uppercase, numeric, specialcharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
