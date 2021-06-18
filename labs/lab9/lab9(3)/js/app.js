let objResult = document.getElementById("objResult") //connect div from HTML to JS

//objects array
let objects = [
    { color: "#FF0000", height: 100, width: 300 }, //object 1
    { color: "#FFFF00", height: 200, width: 200 }, //object 2
    { color: "#ff0000", height: 300, width: 100 }, //object 3
];

function showDivs() {
    //loop that creates 3 divs based on array data
    for(let i = 0; i < objects.length; i++) {
        let newDiv = document.createElement("div") //new div for objects to attach to every loop

        //place object data onto the new div, connect to loop variable (i)
        newDiv.style.backgroundColor = objects[i].color //object "color" property
        newDiv.style.height = objects[i].height + "px" //object "height" property
        newDiv.style.width = objects[i].width + "px" //object "width" property

        objResult.appendChild(newDiv) //connect / append the new div element to the existing HTML div
    }
}
   
//Algorithm Plan\\

//create an HTML div for objects to connect to inside of a loop
    //connect div to JS with document.getElementById
//create a button to activate the object divs

//objects array

//for loop, using objects.length
    //use document.createElement to create a new div element
    //attach the object properties to the new element using .style
    //append the new element onto the div that is connected from HTML