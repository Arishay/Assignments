//ASSIGNMENT #16
let guest:string[] = ["Aina" , "Hunny" , "Haniya"];
console.log("I have found a bigger dinner table!");
//adding Guests
guest.unshift("Zara")
guest.splice(guest.length/2, 0, "Ayesha");
guest.push("Afiya");
guest.forEach(guest => {
    console.log(`${guest} will you come to join me for dinner`);   
});
//ASSIGNMENT #17
let guestList:string[] = ["Zara","Aina" , "Hunny","Ayesha" , "Haniya","Afiya"];
 //changing Guest list    
console.log("I can invite only two people for dinner.");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guestList.splice(0, guestList.length);
console.log(guestList);


//FOR THE TEACHER :
// this project is only made by arisha Ghaffar.
//me and my sister both uses the same laptop thats why 
//whenever we upload our projects on github it shows that this is made by both of us.