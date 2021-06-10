let nameInput = document.getElementById("nameInput") //username input box
let passInput = document.getElementById("passInput") //password input box
let dvResult = document.getElementById("dvResult") //completion state div

//check if input fields match the proper information
function passCheck() {
    //if username input equals "Username" and password input equals "Password"
    if((nameInput.value == "Username") && (passInput.value == "Password")) {
        dvResult.innerHTML = "Success" //then display "Success"
    } else {
        dvResult.innerHTML = "Wrong Information" //otherwise display "Wrong Informtion"
    }
}

//Algorithm\\

//2 user inputs
    //Username
    //Password

//1 Button to check if information entered into user input fields is correct

//User input field must match: "Username" and "Password"
    //if the two match then display "Success" in innerHTML
    //if one, or both do not match then display "Wrong Information" in innerHTML
    //one if statement
    //if username input is equal to "Username" and password input is equal to "Password" then display "Success" in innerHTML, else display "Wrong Information" in innerHTML

