// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(length, lowercase, uppercase, numeric, specialcharacters) {
  var password = '';
  var str = '';
  if (uppercase == "on"){
    str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (lowercase == "on"){
      str += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (numeric == "on"){
      str += '0123456789';
  }
  if (specialcharacters == "on"){
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
var lowercase = document.getElementById("lowercase").value;
var uppercase = document.getElementById("uppercase").value;
var numeric = document.getElementById("numeric").value;
var specialcharacters = document.getElementById("special-characters").value;
checked = document.querySelectorAll("input[type=checkbox]:checked").length;
console.log(checked);
if(!checked) {
  alert("You must check at least one checkbox.");
  return false;
}
console.log(lowercase);
  var password = generatePassword(length, lowercase, uppercase, numeric, specialcharacters);
  console.log(password);
  /* var passwordText = document.querySelector("#password");

  passwordText.value = password; */

}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
