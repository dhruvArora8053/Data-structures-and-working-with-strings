'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Remember it's impossible to mutate strings because they are primitives

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
//strings also starts with zero index
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'));
//here if we wrote portugal then we get the ouptut -1 because indexof is case sensitive

console.log(airline.slice(4));
//part of the string is known as substring as strings are immutable we would have to store this slice to some data structure or some variable so that we can use it further

console.log(airline.slice(4, 7));
//end value does not get included in the string like 7
//remember 7-4=3 so that's length of the new string going to be

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//write a function that recieves an airplane seat and locks to the console wether it is a middle seat or not
const checkMiddleSeat = function (seat) {
  const lastWord = seat.slice(-1);
  if (lastWord === 'A') console.log('first seat');
  else if (lastWord === 'B') console.log('middle seat');
  else if (lastWord === 'C') console.log('last seat');
  else console.log('wrong input');
};

checkMiddleSeat('11C ');

//We know strings are just primitives. So why they do have methods? Shouldn't methods only be available on objects such as arrays?
//Ans: Well that is true but javascript is really smart, whenever we call a method on a string javascript will automatically behind the scenes convert that string primitive to a string object with the same content and then it's on that object where the methods are called and this process is called boxing because it basically takes our string and puts it into a box which is the object so bascially what happens is this:

console.log(new String('jonas'));
console.log(typeof new String('jonas')); //otput: object
//and so now you'll see that this string here looks a little bit more like an object

//and so this conversion here is what javascript does behing the scenes whenever we call a method on a string and then when the operation is done the object is converted back to a regular string primitive.

//and infact all string methods return primitives even if called on string object:
console.log(typeof new String('jonas').slice(1));
//and so the result of all of this is then back to being a string 
