//Assignment# 14
//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

let guest:string[] = ["Aliza" , "Hunny" , "Haniya"];

guest.forEach(guest => {
    console.log(`${guest}, will you come to join me for dinner?`);
});

//Assignment# 15
let oldGuest = "Aliza";
console.log(`${oldGuest} can't make the dinner.`);

let newGuest = "Zara";
guest[guest.indexOf(oldGuest)] = newGuest;

// New invitation
guest.forEach(guest => {
    console.log(`${guest}, will you come to join me for dinner?`);
});

//Assignment# 16


//FOR THE TEACHER :
// this project is only made by arisha Ghaffar.
//me and my sister both uses the same laptop thats why 
//whenever we upload our projects on github it shows that this is made by both of us.