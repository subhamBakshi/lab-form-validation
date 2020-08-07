// Progression 1 
// Check username
// create a function called as checkUserName()  
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
let button = document.getElementById("submit")
button.addEventListener('click', checkUserName);

function checkUserName() {
    var txt = document.getElementById("usertext").value;
    if (txt.length < 8 || txt.length > 15 || txt == " " || /^[a-zA-Z0-9]*$/.test(txt)) {
        document.getElementById("name_error").innerHTML = "<p>Wrong username</p>";
        return false;
    }
    for (let i = 0; i < txt.length; i) {
        if (String.indexOf[i] !== -1) {
            document.getElementById("name_error").innerHTML = "<p>Wrong username</p>";
            return false;
        }
    }
}

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

button.addEventListener('click', checkEmail)

function checkEmail() {
    var txt2 = document.getElementById('')
    if (!txt2.includes('@', 1) || /^[\!#$%&_ |/>,<;{}[]()]$/.test(txt2)) {
        document.getElementById("email_error").innerHTML = "<p>Wrong email id</p>"
    }
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

button.addEventListener('click', checkPassword)

function checkPassword() {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}