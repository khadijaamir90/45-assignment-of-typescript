// task no 2
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var personName = "ERIC";
console.log("hellow ".concat(personName, " would you like to learn some python today?"));
// task no 3
// lower case
var PersonName = "Khadija";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
// task no 4
var quote = "A person who never made a mistake never tried anything new";
var author = "Albert Einstein";
console.log("".concat(author, " ones said,\"").concat(quote));
// task no 5
var qoute = "A person who never made a mistake never tried anything new";
var famous_person = "Albert Einstein";
var message = "".concat(author, " ones said,\"").concat(quote);
console.log(message);
// task no 6
var personeName = "\n\t KHADIJA AMIR\t\n";
console.log(PersonName);
var stripped = PersonName.trim();
console.log(stripped);
// task no 7
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// task no 9
var favouriteNumber = 4;
console.log("My favourite number is ".concat(favouriteNumber));
//task no 10
//my name is KHADIJA
//Dated: 21/02/2024
console.log('hello world simple program');
//task no 11
var FriendsName = ["khadija", "amir", "atta", "rahat", "ahmad"];
// index number    00        1      2      3       4
console.log(FriendsName[0]);
console.log(FriendsName[1]);
console.log(FriendsName[2]);
console.log(FriendsName[3]);
console.log(FriendsName[4]);
//task no 12
var members = ['khadija', 'amir', 'atta', 'rahat', 'ahmad'];
var messages = 'kal birthday hai kis ki:';
for (var i = 0; i < members.length; i++) {
    console.log(messages + members[i]);
}
//task no 14
var transportation = ['civic', 'bike', 'bus', 'van'];
for (var i = 0; i < transportation.length; i++) {
    console.log('i would like to own a ' + transportation[i]);
}
//task no 15
var myFriends = ["ALI", "TARIQ", "MADAD", "AYAZ"];
console.log("due to some personal reason Mr. ".concat(myFriends[1], " will not come on my dinner"));
myFriends[1] = "YASIR";
console.log("New list of my friends who are coming to my dinner");
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i, ". ").concat(myFriends[i], "."));
}
//task no 16
var MyFriends = ["ALI", "TARIQ", "MADAD", "AYAZ"];
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
for (var i = 0; i < MyFriends.length; i++) {
    console.log("Mr. ".concat('myFriends'[i], " you are invited yo my dinner"));
}
//task no 17
var myFriend = ["ALI", "TARIQ", "MADAD", "AYAZ", "HUSSAIN", "AHMAD"];
console.log("table is not avalaible I can invite only 2 person");
// remove all 4 last elements
var friends1 = myFriends.pop();
console.log("Sorry Mr.".concat('friend1', " you are not invited!"));
var friends2 = myFriends.pop();
console.log("Sorry Mr.".concat('friend2', " you are not invited!"));
var friends3 = myFriends.pop();
console.log("Sorry Mr.".concat('friend3', " you are not invited!"));
var friends4 = myFriends.pop();
console.log("Sorry Mr.".concat('friend4', " you are not invited!"));
var friend3 = myFriends.pop();
console.log("sorry Mr. ".concat(friend3, "you are not invited!"));
//task no 18
// define the array of place
var places = ["tokyo", "paris", "machu picchu", "santroini", "new york"];
// print the array in its original order
console.log("Original order:");
console.log(places);
// print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log(__spreadArray([], places, true).sort());
// show that the array  is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(places);
// print the array in reverse alphabetical order without changing the order of capital list
console.log("\nReverse Alphabetical order:");
console.log(__spreadArray([], places, true).sort().reverse());
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
places.sort(function (a, b) { return b.localeCompare(a); });
// print the list to show that its order has changed
console.log("\nSorted in reverse alphbetical order:");
console.log(places);
//task no 19
// exemple code from Exercise 14 through from 18
// assum have an arrayof guest invited to dinner
var guest = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// print the number of people you are invited to dinner
console.log("you are invited ".concat(guest.length, "people to dinner."));
//task no 20
// creating an array fo famous mountain
var mountain = ['Mount everst', 'k2', 'Kangchenjunga', 'Lhotse', 'Makalu', 'Cho oyu', 'Dhaulagiri', 'Manaslu'];
// printing the array
console.log("list if famous maountain");
mountain.forEach(function (mountain) { return console.log(mountain); });
//task no 21
// Object is consist of key + value
var stdDetail = {
    name: "Ali",
    // key   value
    age: 18,
    gender: "male",
    rollNo: 12345
};
console.log(stdDetail);
//task no 22
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "wednesday", "friday", "saturday"];
// console.log(days{7})
console.log(days[6]);
//task no 23
var car = 'sabaru';
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
var Car = 'sabaru';
var brand = 'SABARU';
var number = 10;
var color = ['red', 'green', 'blue'];
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
console.log('colors'.includes('red'));
console.log("Is 'yellow' in colors? I predict false.");
console.log('colors'.includes('yellow'));
// test whether an item is not in an array
console.log("Is 'yellow' in colors? I predict true.");
console.log(!'colors'.includes('yellow'));
console.log("Is 'red' in colors? I predict false.");
console.log(!'colors'.includes('red'));
//task no 25
var Alien_Colour = "red";
if (Alien_Colour == "green")
    console.log("no output");
//task no 26
var Alien_colour = "red";
if (Alien_colour == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else
    (console.log("player just earn 10 points"));
//task no 27
var alien_color = "red";
if (alien_color == "green") {
    console.log("5 points");
}
else if (alien_color == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
//task no 28
var age = 100;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a older");
}
// task no 29
var favorite_fruit = ['apple', 'banana', 'kiwi'];
var fruitsToCheck = ['apple', 'banana', 'kiwi', 'orange', 'strawberry'];
fruitsToCheck.forEach(function (fruit) {
    if (favorite_fruit.indexOf(fruit) !== -1) {
        console.log("you really like " + fruit + "!");
    }
});
// task no 30
var usernames = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var userName = usernames_1[_i];
    if (userName === 'admin') {
        console.log("Hello admin, would you like yo see a status report?");
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again."));
    }
}
// task no 31
var UserNames = []; // Empty array
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
        var username = usernames_2[_a];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ",thank you for logging in again."));
        }
    }
}
// task no 32
var current_users = ['john', 'alice', 'bob', 'emily', 'chris'];
var new_users = ['chris', 'daniel', 'emily', 'sophia', 'nike'];
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    var is_unique = true;
    for (var _c = 0, current_users_1 = current_users; _c < current_users_1.length; _c++) {
        var current_user = current_users_1[_c];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_unique = false;
            break;
        }
    }
    if (is_unique) {
        console.log("the username '".concat(new_user, "' is available."));
    }
    else {
        console.log("the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
}
// task no 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _d = 0, numbers_1 = numbers; _d < numbers_1.length; _d++) {
    var number_1 = numbers_1[_d];
    var ordinal = void 0;
    if (number_1 === 1) {
        ordinal = "1st";
    }
    else if (number_1 === 2) {
        ordinal = "2nd";
    }
    else if (number_1 === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = "".concat(number_1, "th");
    }
    console.log(ordinal);
}
// task no 34
var favorite_pizzas = ['Pepperoni', 'Marherita', 'supreme'];
for (var _e = 0, favorite_pizzas_1 = favorite_pizzas; _e < favorite_pizzas_1.length; _e++) {
    var pizza = favorite_pizzas_1[_e];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
// task no 35
//  define a listr of animal
var animal = ["dog", "cat", "rabbit"];
// print out of the name of each animal using a loop for a animal
console.log("name of animal:");
for (var _f = 0, _g = 'animals'; _f < _g.length; _f++) {
    var animal_1 = _g[_f];
    console.log(animal_1);
}
// print a statement about each animal
console.log("/nStatment  about each animal:");
for (var _h = 0, _j = 'animals'; _h < _j.length; _h++) {
    var animal_2 = _j[_h];
    switch (animal_2) {
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
            console.log("This animal is not recognized");
    }
}
// print a statement about what these animal have in common 
console.log("/nWhat these animal have in common");
console.log("/nAny of these animal would make a great petn!");
// task no 36
// define the make_shirt function
function make_shirt(size, message) {
    console.log("you ordered a ".concat(size, "shirt with the message: \"").concat(message, "\"."));
}
// call the make_shirt function
make_shirt("medium", "Hello, World");
// task no 37 
// Define the make_shirt function with default parameters
function Make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("you are odered a ".concat(size, "shirt with the message: \"").concat(message, "\"."));
}
// call the make_shirt function with default values
Make_shirt(); // large shirt with default message
// task no 38
// Define the describe_city function with default parameters for country
function describe_city(city, country) {
    if (country === void 0) { country = "UnKnown"; }
    console.log(" ".concat(city, " is in ").concat(country, "."));
}
// call the describe_city function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Paris"); // Using the default country
// task no 39
// define the city_country function
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// call the city_country function
var location1 = city_country("Karachi", "Pakistan");
var location2 = city_country("New York", "USA");
console.log(location1); // Output: Karachi, Pakistan
console.log(location2); // Output: New York, USA
// task no 40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}
var album = makeAlbum("ali", "light");
console.log(album);
album = makeAlbum("bilal", "red wave");
console.log(album);
album = makeAlbum("hamza", "seenbreez");
console.log(album);
// task no 41
function Show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var Magician = ["ali", "hamza", "bilal"];
show_magicians(Magician);
// task no 42
function Make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i].charAt(0).toUpperCase() + magicians[i].slice(1) + ' the Great';
    }
}
var magicians2 = ["usman", "haseeb", "wajahat"];
make_great(magicians2);
show_magicians(magicians2); // Note: corrected the function name to lowercase
// task no 43
// define the show_magicians function
function show_magicians(magicians) {
    console.log("magicians:");
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician_2 = magicians_2[_i];
        console.log(magician_2);
    }
}
// define the make_great function
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician_3 = magicians_3[_i];
        modifiedMagicians.push("the great" + magician_3);
    }
    return modifiedMagicians;
}
// array of magician's names
var magician = ["Harry Houdini", "David Copperfeild", "Penn Jillette", "Teller"];
// call make_great with a copy of a array
var modifiedMagicians = make_great(__spreadArray([], magician, true));
// call show_magicians with each array
console.log("\nOriginal Magicians:");
show_magicians(magician);
// task no 44
function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < item.length; i++) {
        console.log("= ".concat(item[i], " "));
    }
}
console.log("enjoy your sandwich Khadija Amir");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
function createCar(manufacture, model, options) {
    return __assign({ manufacture: manufacture, model: model }, options);
}
var myCar = createCar("Toyota", "Corolla", { color: "silver", year: "2024" });
console.log(myCar);
