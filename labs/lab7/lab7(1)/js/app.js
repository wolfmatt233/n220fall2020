let dvResult = document.getElementById("dvResult") //results
let numberInput = document.getElementById("numberInput")

function calcTip() {
    //Calculations for tip and total + tip, numbers only
    let tip = Number(numberInput.value * 0.15) //tip calc
    let total = Number(numberInput.value * 1.15) //total + tip calc

    //Display results in separate div
    dvResult.innerHTML = "Tip Amount: " + "$" + tip + "<br>" + "Total Amount: " + "$" + total

    //Log tip and total calculations to console
    console.log("Tip: $", tip, "Total: $", total)
}

//Algorithm\\

//User input box, number-centric

//Button calculates tip and user input amount plus tip
    //tip equals input value times 0.15
    //total equals input value times 1.15

//Display the results in a separate div, innerHTML

//log calculations to the console: "Tip: $X. Total: $X."