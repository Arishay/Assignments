"use strict";
//ASSIGNMENT# 11
//Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let friendNames = ['Zara', 'Aina', 'Amna', 'huma'];
for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}
//ASSIGNMENT# 12
//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them.The text of each 
//message should be the same,but each message should be personalized with the person’s name.
let friends = ["Zara", "Aina", "Amna", "Huma"];
for (let name of friends) {
    console.log(`Hello! ${name}, Happy friendship day`);
}
//ASSIGNMENT# 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
let favouriteTransportation = ["Hilux", "Electric bike", "Mountain Bicycle"];
for (let brand of favouriteTransportation) {
    console.log(`I would like to own a ${brand}, `);
}
//FOR THE TEACHER :
// this project is only made by arisha Ghaffar.
//me and my sister both uses the same laptop thats why 
//whenever we upload our projects on github it shows that this is made by both of us.
