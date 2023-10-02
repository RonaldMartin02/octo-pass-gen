// Assignment Code
var generateBtn = document.querySelector("#generate");
var deleteBtn = document.querySelector("#delete");
var uCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var specArray = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var numArray = "0123456789".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText = password;
  document.getElementById("password").value = passwordText;
}



function generatePassword() {
  var password = "";
  var passArray = [];
  var pLength = parseInt(prompt("How long do you want your pasword to be: \n (Please enter only numbers between 8-128)"));
  if (pLength >= 8 && pLength <= 128) {
    passArray = passArray.concat(lCaseArray)
    var uCaseConfirm = confirm("Do you need a Capital letters:");
    if (uCaseConfirm) {
      passArray = passArray.concat(uCaseArray);
      alert("OK")
    } else {
      alert("No")
    }
    var numConfirm = confirm("Do you need Numbers letters:");
    if (numConfirm) {
      passArray = passArray.concat(numArray)
      alert("OK")
    } else {
      alert("No")
    }
    var specConfirm = confirm("Do you need Special Characters:");
    if (specConfirm) {
      passArray = passArray.concat(specArray)
      alert("OK")
    } else {
      alert("No")
    }
    for (var i = 0; i < pLength; i++) {
      // This statement will run each time the loop is executed
      // console.log(passArray[i]);
      password += passArray[Math.floor(Math.random() * passArray.length)]
      
    }
    return password;
  } else if (pLength < 8) {
    alert("Too Short")
    var uChoice = confirm("would you like to try again");
    if (uChoice) {
      return generatePassword();
    }
  } else if (pLength > 128) {
    alert("Too Long")
    var uChoice = confirm("would you like to try again");
    if (uChoice) {
      return generatePassword();
    }
  } else {
    alert("Please enter only numbers between 8-128");
    var uChoice = confirm("would you like to try again");
    if (uChoice) {
      return generatePassword();
    }
  }
}
function clearDiv() {
  document.getElementById("password").value = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

deleteBtn.addEventListener("click", clearDiv);
