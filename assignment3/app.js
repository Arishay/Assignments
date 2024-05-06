"use strict";
let Name = 'Arisha';
//lowerCase
console.log(Name.toLowerCase());
//upperCase
console.log(Name.toUpperCase());
//titleCase
console.log(Name.replace(/\b\w/g, c => c.toUpperCase()));
