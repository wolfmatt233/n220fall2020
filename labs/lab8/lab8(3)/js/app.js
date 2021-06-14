let userInput = document.getElementById("userInput") //user input box
let dvResult = document.getElementById("dvResult") //div to show true/false message

//separate function that determines whether the input number is divisible by 7 (boolean; true/false)
function divCalc() {
    //if the user input value is divisible by 7 with no remainder
    if (Number(userInput.value % 7 == 0)) {
        return (true)  //return true to divCalc
    } else {
        return (false) //otherwise return false to divCalc
    }
}

//onclick function that displays results of the previous calculation (divisible by 7)
function bySeven() {
    //if divCalc is returned as true
    if (divCalc() == true) {
        dvResult.innerHTML = "Yes." + " (" + divCalc() + ")" //display the "Yes" result
    } else {
        dvResult.innerHTML = "No." + " (" + divCalc() + ")" //otherwise display the "No" result
    }
}


//Algorithm Plan\\

//user input box from HTML to js --> document.getElementById
//result div from HTML to js --> document.getElementById

//create a separate function to discern if the input number is divisible by 7
    //if the user input value is divisible by 7 with no remainders then 
        //return true to the calculation function
        //otherwise return false to the calculation function 

//create an onclick function (button) updates a div with text (yes/no) to show whether the input is divisible by 7 
    //if the calculation function returns a true then
        //display a "Yes"
        //otherwise display a "No"