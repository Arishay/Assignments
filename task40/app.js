"use strict";
//Created a function with an object inside the function
function make_album(artistName, albumTitle, tracks) {
    let Album = {
        artist: artistName,
        title: albumTitle,
    };
    if (tracks !== undefined) {
        Album.tracks = tracks;
    }
    return Album;
}
;
// Calling the function thrice
console.log(make_album("Arisha", "One"));
console.log(make_album("Hunny", "two", 3));
console.log(make_album("Haniya", "three"));
