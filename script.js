// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {


    var length = prompt("how many characters would you like in your password? Min 8, Max 128.")

    if (length < 8 || length > 128) {
        message = 'Wrong Input ! Password Length must be between 8 to 128 characters.'
        return message

    }

    var lowerprompt = prompt("would you like lower case letters in you password? yes or no")
    var upperprompt = prompt("would you like upper case letters in your password? yes or no")
    var numbersprompt = prompt("would you like numbers in your password? yes or no")
    var specialprompt = prompt("would you like special charecters in your password? yes or no")

    characters = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '!@#$%^&*()']
    chosenstrings = '';

    chosenoptions = [lowerprompt, upperprompt, numbersprompt, specialprompt]
    console.log(chosenoptions)




    if (lowerprompt == "yes" || upperprompt == "yes" || numbersprompt == "yes" || specialprompt == "yes") {
        for (var i = 0; i < 4; i++) {
            if (chosenoptions[i] == "yes") {
                chosenstrings = chosenstrings + characters[i];
            }
        }
        console.log("chosenstrings", chosenstrings)

        password = ''

        for (var j = 0; j < length; j++) {
            var randomNumber = Math.floor(Math.random() * chosenstrings.length);
            password = password + chosenstrings[randomNumber];
        }

        console.log("password", password)
        return password;


    } else {
        console.log("Error")
        return "Please select one of the character type"
    }


}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);