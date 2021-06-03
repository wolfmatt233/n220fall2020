//pet object
let myPet = {
    name: "Apollo",
    energy: 70,
    happiness: 85,
    age: 7
}
console.log(myPet)


//Initial pet stats, includes: line breaks, myPet variables, bold, strings, and a paragraph tag
let petstats = document.getElementById("petstats").innerHTML = "<p>Pet Stats</p>" + "<b> Name: </b>" + myPet.name + "<br />" + "<b>Energy: </b>" + myPet.energy + "<br />" + "<b>Happiness: </b>" + myPet.happiness + "<br />" + "<b>Age: </b>" + myPet.age


//Updates the stats for the pet as buttons are clicked
    //tried to use 'petstats' on its own inside the function because I thought the variable stored the information from before and would display it, did not work
function update() {
    let petstats = document.getElementById("petstats").innerHTML = "<p>Pet Stats</p>" + "<b> Name: </b>" + myPet.name + "<br />" + "<b>Energy: </b>" + myPet.energy + "<br />" + "<b>Happiness: </b>" + myPet.happiness + "<br />" + "<b>Age: </b>" + myPet.age
}


//Play function for button: increase happiness by 5 when played with
function play() {
    myPet.happiness = myPet.happiness + 5

    //Maximum happiness reached: 100 (personal touch)
    if(myPet.happiness >= 100) {
        myPet.happiness = 100 
        //let petstats = document.getElementById("petstats").innerHTML = "MAX" 
            //wanted to display 'MAX' when 100 was reached, did not get around to it
        console.log(myPet)
    }
}

//Feed function for button: increase energy by 5 when fed
function feed() {
    myPet.energy = myPet.energy + 5

    //Maximum energy reached: 150 (personal touch)
    if(myPet.energy >= 150) {
        myPet.energy = 150
        console.log(myPet)
    }
}