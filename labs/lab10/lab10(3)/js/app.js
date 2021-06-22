let Qbutton = document.getElementsByClassName("Qbutton") //question button collection
let divAnswer = document.getElementById("divAnswer") //display answer div

//just like the first exercise, we loop through the collection to find the div that is being clicked
for(let i = 0; i < Qbutton.length; i++) {
    //event listener is put onto div that is clicked and found within the loop
    //event listener activates the function on the click
    Qbutton[i].addEventListener("click", answerDisplay) 
}

function answerDisplay() {
    //displays the data-answer attribute from the div that was found in the collection by the loop
    divAnswer.innerHTML = this.getAttribute("data-answer") 
}

//Algorithm\\

//3 buttons that ask questions
//each button should have a data-answer
//when a button is clicked, display the answer to the question in a div
//use only one function, must make use of button's data-attribute