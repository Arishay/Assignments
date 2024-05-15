"use strict";
//write a function
function describeCity(cityName, countryName = "Pakistan") {
    console.log(`${cityName} is in ${countryName}`); // it will print a simple message
}
describeCity("Karachi"); //write the city name with default country
describeCity("Islamabad");
describeCity("Toronto", "Canada"); // write city and country name 
