let userInput = document.getElementById("userInput") //not an array yet, just what user types
let dvResult = document.getElementById("dvResult") //displays results

//button function to make calculations
function takeList() {
    //make variable for user input value
    let userNum = userInput.value
    console.log(userNum)

    //user input value used and split into an array
    let splitNum = userNum.split(",")
    console.log(splitNum)

    sum = 0 //variable used for sum calculation

    //loop through array and sum up values
    for(let i = 0; i < splitNum.length; i++) {
        sum += Number(splitNum[i]) //calculates sum using number array instead of string array

        avg = sum / splitNum.length
    }

    //log sum and average to console
    console.log(sum)
    console.log(avg)

    //Display the results to the user: sum and average
    dvResult.innerHTML = "Sum: " + sum + "<br>" + "Average: " + avg

    userInput.value = "" //takes the user input box value and makes it clear after button is pressed
}



//Algorithm\\

//User types list of numbers and clicks button

//list of numbers made into an array using .split
    //user input variable = user input value
    //array variable = user input variable .split

//Loops through array and sums up values
    //for loop, use split variable.length
    //sum calculation:
        //set sum variable up outside of loop
        //use Number to convert away from string array
        //sum += Number(split variable[i])
    //average variable = sum of array divided by split variable length

//reset user input box to blank, delete text that has been typed
    //value = "" --> no space, meaning there is nothing typed