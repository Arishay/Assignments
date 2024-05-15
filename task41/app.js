"use strict";
//Make a array of magician’s names
let magiciansName = ["Aina", "Ayesha", "Hani"];
//Create a function & pass the array in function
function show_magicians(magiciansName) {
    magiciansName.forEach(magicians => {
        console.log(magicians);
    });
}
//Call the function
show_magicians(magiciansName);
