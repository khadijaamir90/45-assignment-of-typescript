
// task no 2

let personName: string= "ERIC";
console.log(`hellow ${personName} would you like to learn some python today?`);

// task no 3

// lower case
let PersonName: string="Khadija"
console.log("lowercase:" ,personName.toLowerCase());

// upper case
console.log("uppercase:" ,personName.toLocaleUpperCase());

// title case
console.log("titlecase:" ,personName.replace(/\bw/g,c => c.toUpperCase()));

// task no 4

let quote: string= "A person who never made a mistake never tried anything new";
let  author: string= "Albert Einstein";
console.log(`${author} ones said,"${quote}`);

// task no 5

let qoute: string= "A person who never made a mistake never tried anything new";
let  famous_person= "Albert Einstein";
let message=`${author} ones said,"${quote}`;
console.log(message);

// task no 6

let personeName: string = `\n\t KHADIJA AMIR\t\n`;
console.log(PersonName);
let stripped: string = PersonName.trim();
console.log(stripped);

// task no 7

console.log(5 +3);
console.log(11 -3);
console.log(4 *2);
console.log(16 / 2);

// task no 9

let favouriteNumber: number = 4;
console.log(`My favourite number is ${favouriteNumber}`);

//task no 10

//my name is KHADIJA
//Dated: 21/02/2024
console.log('hello world simple program');

//task no 11

let FriendsName: string[] = ["khadija","amir","atta","rahat","ahmad"];
             // index number    00        1      2      3       4
  console.log(FriendsName[0]);
  console.log(FriendsName[1]);
  console.log(FriendsName[2]);
  console.log(FriendsName[3]);
  console.log(FriendsName[4]);

//task no 12

let members:string[] =['khadija','amir','atta','rahat','ahmad'];
let messages: string='kal birthday hai kis ki:';
for(let i=0; i<members.length; i++){
    console.log(messages + members[i]);
}

//task no 14

let transportation : string [] =['civic','bike','bus','van'];
for(let i=0; i<transportation.length; i++){
    console.log('i would like to own a ' + transportation[i]);
}

//task no 15

const myFriends: string [] = ["ALI","TARIQ","MADAD", "AYAZ"];

console.log(`due to some personal reason Mr. ${myFriends[1]} will not come on my dinner`);
myFriends[1] = "YASIR";

console.log(`New list of my friends who are coming to my dinner`);
for(let i = 0; i < myFriends.length; i++){

    console.log(`${i}. ${myFriends[i]}.`);
}

//task no 16

const MyFriends: string [] = ["ALI","TARIQ","MADAD","AYAZ"];
console.log(MyFriends);

console.log('we have 3 more friends to invite on dinner\n');


// adding three more frinds
//add at begginning
MyFriends.unshift("yasir");
// ["yasir","ali","tariq","madad","ayaz"];
console.log(MyFriends);


// add at middle
MyFriends.splice(2, 0, "Muhammad Ali");
console.log(MyFriends);


// add at last
MyFriends.push("Hammad");
console.log(MyFriends);


// print all friends alongwith message

for(let i = 0; i < MyFriends.length; i++){
    console.log(`Mr. ${'myFriends'[i]} you are invited yo my dinner`);
}
//task no 17

const myFriend: string [] = ["ALI","TARIQ","MADAD", "AYAZ","HUSSAIN","AHMAD"];
console.log(`table is not avalaible I can invite only 2 person`);

// remove all 4 last elements

let friends1 = myFriends.pop();
console.log(`Sorry Mr.${'friend1'} you are not invited!`);


let friends2 = myFriends.pop();
console.log(`Sorry Mr.${'friend2'} you are not invited!`);


let friends3 = myFriends.pop();
console.log(`Sorry Mr.${'friend3'} you are not invited!`);


let friends4 = myFriends.pop();
console.log(`Sorry Mr.${'friend4'} you are not invited!`);

let friend3 = myFriends.pop();
console.log(`sorry Mr. ${friend3}you are not invited!`);

//task no 18

// define the array of place
let places: string[] = ["tokyo","paris","machu picchu","santroini","new york"];

// print the array in its original order
console.log("Original order:");
console.log(places);

// print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...places].sort());

// show that the array  is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(places);

// print the array in reverse alphabetical order without changing the order of capital list
console.log("\nReverse Alphabetical order:");
console.log([...places].sort().reverse());

// print that the array is still it original order
console.log("\nOriginal order (unchanged):");
console.log(places);

// reserve the order of the list
places.reverse();

//p print the array to show that its order has changed
console.log("\nReversed order:");
console.log(places);

// print order of the list again
places.reverse();

// print the list to show it's back to its original order
console.log("\nOriginal order (reversed again):");
console.log(places);

// sort the array so it's stored in alphabetical order
places.sort();

// print the array to show that its order has been changed
console.log("\nSorted in alphbetical order:");
console.log(places);

// sort the array to chang it so it's stored in reverse 
places.sort((a, b) => b.localeCompare(a));

// print the list to show that its order has changed
console.log("\nSorted in reverse alphbetical order:");
console.log(places);

//task no 19

// exemple code from Exercise 14 through from 18
// assum have an arrayof guest invited to dinner
const guest = ['Alice','Bob','Charlie','David','Eve'];

// print the number of people you are invited to dinner
console.log(`you are invited ${guest.length}people to dinner.`);

//task no 20

// creating an array fo famous mountain
const mountain = ['Mount everst','k2','Kangchenjunga','Lhotse','Makalu','Cho oyu','Dhaulagiri','Manaslu'];

// printing the array
console.log("list if famous maountain");
mountain.forEach(mountain => console.log(mountain));

//task no 21

// Object is consist of key + value
let stdDetail = {
    name: "Ali",
    // key   value
    age: 18,
    gender:"male",
    rollNo: 12345
};
console.log(stdDetail);

//task no 22

const days : string [] = ["sunday","monday","tuesday","wednesday","thursday","wednesday","friday","saturday"]
// console.log(days{7})
console.log(days[6]);

//task no 23

let car: string = 'sabaru';

console.log("Is car == 'subaru'? I pridict true");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I pridict false");
console.log(car == 'honda');

console.log("Is car == 'subaru'? I pridict true");
console.log(car == 'subaru');

console.log("Is car === 'subaru'? I pridict false");
console.log(car === 'subaru');

console.log("Is car != 'honda'? I pridict true");
console.log(car != 'honda');

console.log("Is car !=== 'subaru'? I pridict false");
console.log(car !== 'subaru');

console.log("Is car !== 'subaru'? I pridict true");
console.log(car !== 'subaru');

console.log("Is car > 'ford'? I pridict true");
console.log(car > 'ford');

console.log("Is car < 'toyota'? I pridict true");
console.log(car < 'toyota');

console.log("Is car >'subaru'? I pridict true");
console.log(car > 'subaru');

console.log("Is car <'subaru'? I pridict true");
console.log(car < 'subaru');

//task no 24

let Car: string='sabaru';
let brand: string='SABARU';
let number: number=10;
let color: string[] =['red','green','blue'];

// tests for equality and inequality with string
console.log("Is car == 'sabaru'? I predict true");
console.log(car == 'sabaru');

console.log("Is car != 'honda'? I predict true");
console.log(car != 'honda');

console.log("Is car == 'SABARU'? I predict false");
console.log(car == 'brand');

console.log("Is car != 'sabaru'? I predict true");
console.log(car != 'brand');

// test using the lower case function
console.log("Is car.tolowerCase() == 'sabaru'? I predict true");
console.log(car.toLowerCase() == 'sabaru');

console.log("Is brand.tolowerCase() == 'sabaru'? I predict true");
console.log(brand.toLowerCase() == 'sabaru');

// Numerical tests
console.log("Is number ==10? I predict true");
console.log(number == 10);

console.log("Is number != 5? I predict true");
console.log(number != 5);

console.log("Is number > 5? I predict true");
console.log(number > 5);

console.log("Is number < 15? I predict true");
console.log(number < 15);

console.log("Is number >=10? I predict true");
console.log(number >= 10);

console.log("Is number <=10? I predict true");
console.log(number <= 10);

// test using "and" and "or" operators
console.log("Is car == 'sabaru' and number ==10? I predict true");
console.log(car == 'sabaru' && number == 10);

console.log("Is car == 'sabaru' or number == 5? I predict true");
console.log(car == 'sabaru' || number == 5);

console.log("Is car == 'honda' and number ==10? I predict false");
console.log(car == 'honda' && number == 10);

console.log("Is car == 'honda' or number == 5? I predict false");
console.log(car == 'honda' || number == 5);

// test whether an item is in an array
console.log("Is 'red' in colors? I predict true.");
console.log('colors'.includes ('red'));

console.log("Is 'yellow' in colors? I predict false.");
console.log('colors'.includes ('yellow'));

// test whether an item is not in an array
console.log("Is 'yellow' in colors? I predict true.");
console.log(!'colors'.includes ('yellow'));

console.log("Is 'red' in colors? I predict false.");
console.log(!'colors'.includes ('red'));

//task no 25

let Alien_Colour : string = "red";
if (Alien_Colour == "green")
console.log("no output");

//task no 26

let Alien_colour = "red"

if (Alien_colour == "green") {
    console.log( "player just earned 5 points for shooting the alien" )
} else(
    console.log("player just earn 10 points")
)

//task no 27

let alien_color: string = "red"

if (alien_color == "green") {
    console.log("5 points")
} else if (alien_color == "yellow") {
    console.log("10 points")
} else {
    console.log("15 points")
}

//task no 28

let age : number = 100

if (age < 2) {
    console.log ("you are a baby")
}else if  (age < 4) {
    console.log ("you are a toddler") 
}else if  (age < 13) {
    console.log ("you are a kid") 
}else if  (age < 20) {
    console.log ("you are a teenager") 
}else if  (age < 65) {
    console.log ("you are a adult") 
} else {
    console.log ("you are a older")
}

// task no 29

let favorite_fruit: string[] = ['apple','banana','kiwi'];
let fruitsToCheck: string[] = ['apple', 'banana', 'kiwi', 'orange', 'strawberry'];

fruitsToCheck.forEach(fruit => {
    if (favorite_fruit.indexOf(fruit) !== -1) {
        console.log("you really like " + fruit + "!");
    }
});

// task no 30

let usernames: string[] = ['admin','Eric','Alice','Bob','John'];
 
for (let userName of usernames ){
    if (userName === 'admin'){
        console.log("Hello admin, would you like yo see a status report?");
    } else{
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
}

// task no 31

let UserNames: string[] = []; // Empty array

if (usernames.length === 0){
    console.log("We need to find some users!");
} else {
    for (let username of usernames){
        if (username === 'admin'){
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username},thank you for logging in again.`);
        }
        
    }
}

// task no 32

let current_users: string[] = ['john','alice','bob','emily','chris'];
let new_users: string[] = ['chris','daniel','emily','sophia','nike'];

for (let new_user of new_users){
    let is_unique = true;
    for (let current_user of current_users){
        if (new_user.toLowerCase() === current_user.toLowerCase()){
            is_unique = false;
            break;
        }
    }
    if (is_unique) {
        console.log(`the username '${new_user}' is available.`);
    } else {
        console.log(`the username '${new_user}' is already taken. Please enter a new username.`);
    }
}

// task no 33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers){
    let ordinal: string;
    if (number === 1) {
        ordinal = "1st";
    } else  if (number === 2) {
        ordinal = "2nd";
    } else  if (number === 3) {
        ordinal = "3rd";
    } else {
        ordinal = `${number}th`
    }
     console.log(ordinal);
}

// task no 34

let favorite_pizzas: string[] = ['Pepperoni', 'Marherita','supreme'];

for (let pizza of favorite_pizzas){
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

// task no 35

//  define a listr of animal
const animal: string[] =["dog","cat","rabbit"];

// print out of the name of each animal using a loop for a animal
console.log("name of animal:");
for (let animal of 'animals') {
    console.log(animal);
}

// print a statement about each animal
console.log("/nStatment  about each animal:");
for( let animal of 'animals') {
    switch(animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "cat":
            console.log("A pet can be loving compainion");
            break;
        case "rabbit":
            console.log("A rabbit can be a playful addition to your home");
            break;
        default:
            console.log("This animal is not recognized")                           
    }
}

// print a statement about what these animal have in common 
console.log("/nWhat these animal have in common");
console.log("/nAny of these animal would make a great petn!");

// task no 36
// define the make_shirt function
function make_shirt(size: string, message : string): void{
    console.log (`you ordered a ${size}shirt with the message: "${message}".`);
}


// call the make_shirt function
make_shirt("medium","Hello, World")

// task no 37 

// Define the make_shirt function with default parameters
function Make_shirt(size: string = "large", message: string = "I love TypeScript"): void{
    console.log(`you are odered a ${size}shirt with the message: "${message}".`);
}
// call the make_shirt function with default values
Make_shirt(); // large shirt with default message

// task no 38

// Define the describe_city function with default parameters for country
function describe_city (city: string, country: string = "UnKnown"): void{
    console.log(` ${city} is in ${country}.`);
}
// call the describe_city function for three different cities
describe_city("Karachi","Pakistan");
describe_city("New York","USA");
describe_city("Paris"); // Using the default country

// task no 39

// define the city_country function
function city_country(city: string, country: string): string{
    return `${city}, ${country}`;
}

// call the city_country function
const location1: string = city_country("Karachi","Pakistan");
const location2: string = city_country("New York","USA");

console.log(location1); // Output: Karachi, Pakistan
console.log(location2); // Output: New York, USA

// task no 40

function makeAlbum (artist: string, title: string): {artist: string; title: string} {
    const dictionaries ={
       artist: artist.charAt(0).toUpperCase() + artist.slice(1),
       title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
   }
   
   let album = makeAlbum("ali", "light")
   console.log(album)
   
   album  = makeAlbum("bilal", "red wave")
   console.log(album)
   
   album  = makeAlbum("hamza", "seenbreez")
   console.log(album)
   
// task no 41

function Show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const Magician: string[] = ["ali","hamza","bilal"];
show_magicians(Magician);

// task no 42

function Make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {           
        magicians[i] = magicians[i].charAt(0).toUpperCase() + magicians[i].slice(1) + ' the Great';
    }
} 

const magicians2: string[] = ["usman","haseeb","wajahat"];
make_great(magicians2);
show_magicians(magicians2); // Note: corrected the function name to lowercase

// task no 43

// define the show_magicians function
function show_magicians(magicians: string[]): void{
    console.log("magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// define the make_great function
function make_great(magicians: string[]): string[] {
    const modifiedMagicians: string[] = []
    for (let magician of magicians) {
        modifiedMagicians.push("the great" + magician);
    } 
    return modifiedMagicians;
}

// array of magician's names
const magician: string[] = ["Harry Houdini","David Copperfeild","Penn Jillette","Teller"]

// call make_great with a copy of a array
const modifiedMagicians: string[] = make_great([...magician]);

// call show_magicians with each array
console.log ("\nOriginal Magicians:");
show_magicians(magician);

// task no 44

function sandwich(...item: string[]): void{
    console.log("sandwich order:")

    for (let i = 0; i < item.length; i++){
         console.log(`= ${item[i]} `)
    }
} console.log("enjoy your sandwich Khadija Amir")

sandwich('capsicum' , 'tomato' , 'chicken')
sandwich('beef' , 'cheese')
sandwich('garlic chicken' , 'mayo sauce')


// task no 45

type Car = {
    manufacture: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacture: string, model: string, options: Record<string, any>): Car {
    return {
        manufacture: manufacture,
        model: model,
        ...options,
    };
}

const myCar: Car = createCar("Toyota", "Corolla", { color: "silver", year: "2024" });
console.log(myCar);
