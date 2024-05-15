"use strict";
//create a function with rest parameter
function sandwich(...items) {
    console.log("\nMake a sandwich with the following items:\n");
    items.forEach(anItem => {
        console.log(anItem);
    });
    console.log("\nEnjoy your Sandwich");
}
;
//calling the function
sandwich("Tomato", "Lettuce", "Chili sauce");
sandwich("ketchup", "chicken", "onion", "Mayo");
sandwich("bbq Sauce", "kabab", "egg");
