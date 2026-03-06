/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const games = ["Counter-Strike 2", "Witcher 3: The Wild Hunt", "Total War: Warhammer 3", "Vampire Survivors", "Minecraft"];

let space = "";

for (const x of games){
    space += x + "<br>";
};

document.getElementById("list").innerHTML = space;



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const song = new Set(["Antarctica", "Harvest Moon", "MEGAN", "Call Me Water", "Leglock"]);

let space2 = "";

for (const x of song){
    space2 += x + "<br>";
};

document.getElementById("set1").innerHTML = space2;

// add two more songs to the set then display in the set2 paragraph
song.add("The Fo Five");
song.add("Feel It (Ah Ooh)");

let space3 = "";

for (const x of song){
    space3 += x + "<br>";
};

document.getElementById("set2").innerHTML = space3;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const users = new Map([
    ["Eric", "eric@randomemail.com"],
    ["Tre", "tre@randomemail.com"],
    ["David", "david@randomemail.com"],
    ["Connor", "connor@randomemail.com"],
    ["Kenneth", "kenneth@randomemail.com"]
]);

let space4 = "";

users.forEach(function(email, name){
    space4 += name + ' = ' + email + "<br>"
});

document.getElementById("map1").innerHTML = space4;

// add two new names and emails and display in map2 use the forEach() method
users.set("Fred", "fred@randomemail.com");
users.set("Webster", "webster@randomemail.com");

let space5 = "";

users.forEach(function(email, name){
    space5 += name + ' = ' + email + "<br>"
});

document.getElementById("map2").innerHTML = space5;

// get and display the email of one person, display in map3
document.getElementById("map3").innerHTML = users.get("Eric");