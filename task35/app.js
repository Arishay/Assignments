// let animals:string[] = ["dog", "cat","rabbit",]
// animals.forEach(pet => {
//     console.log(`A ${pet} would be a great pet`);
// });
// console.log("These animals would make a great pet!");
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
