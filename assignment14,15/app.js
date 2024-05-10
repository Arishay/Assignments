"use strict";
//Assignment# 14
//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let guest = ["Aliza", "Hunny", "Haniya"];
guest.forEach(guest => {
    console.log(`${guest}, will you come to join me for dinner?`);
});
//Assignment# 15
let isNotComing = "Aliza";
console.log(`${isNotComing} can't make the dinner.`);
guest.splice(0, 1, "Aina");
// New invitation
guest.forEach(guest => {
    console.log(`${guest}, will you come to join me for dinner?`);
});
//Assignment# 16
//FOR THE TEACHER :
// this project is only made by arisha Ghaffar.
//me and my sister both uses the same laptop thats why 
//whenever we upload our projects on github it shows that this is made by both of us.
