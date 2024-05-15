"use strict";
//created function
function make_shirt(size = "large", message = "I love TypeScript.") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
//call the function
make_shirt(); //this will print default size and message
make_shirt("small"); //changed the size but default message
make_shirt("medium", "Coding Lover"); //customized the message and size
