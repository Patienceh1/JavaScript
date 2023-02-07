// Create a function called `add` using traditional syntax that will add two values

function add (x,y) {
    return x + y
}

add(1,2);

// Create a function called `subtract` using arrow syntax that will subtract two values

const subtract = (x,y) => (x-y)

// Create a function called `operate` using arrow syntax that will execute a callback function and `console.log` the result

const operate = (callback) => console.log(callback())


// Call your `operate` function three times, calling your `add` function, your `subtract` function and an anonymous arrow function that multiples two numbers

operate(() => add(43,96));
operate(() => subtract(76,9));
operate(() => 8 * 3)

const numArray = [1,2,3,4];

const sum = numArray.reduce((accumilator, currentValue) => {
    return accumilator + currentValue;
})

 console.log(sum);

 const numbersArr = [23,54,56,87,98];

 numbersArr.forEach(number => {
     console.log(number);
 })

 const filteredArray = numbersArr.filter(n => {
    return n > 50;
 })

 console.log(filteredArray);

 const finalParticipants = ["Micah", "Aaron", "Naishe", "Adie"]

 const announcement = finalParticipants.map(member => {
    return member + " joined the contest";
 })

 console.log(announcement);

 x => x * x
 


const numbers = [1,2,3,4];
const numberDoubled = numbers.map((num) => {
    return num * 2;
})

console.log(numbers);
console.log(numberDoubled);

const string = "my name is patience, i live in wolves";
const stringExtract = string.slice(7);
console.log(stringExtract);

const nemo = ["nemo"];

// function findNemo (array) {
//     let t0 = performance.now();
//     for(let i = 0; i < array.length; i++) {
//       if (array[i] === "nemo") {
//         console.log("Found NEMO");
//       }
//     }
//     let t1 = performance.now();
//     console.log("Call to find nemo took " + (t0-t1) + " milliseconds ")
// }

// findNemo(nemo);


const a = 1;

// function arrFill (arr) {

//  for (let i = 0; i < arr.length; i++) {
//     a++;
//  }
//  return a;
// }

console.log(a);
// const large = new Array(365).fill(1);

// console.log(large);

const palString = 'olleh';

const reverseString = palString.split('').reverse().join('');

console.log(reverseString);

// function longestWord (str) {
//  let stringg = str.split(" ");
//  let longest = 0;
//  let longest_Word = null;
//  for(let i = 0; i < stringg.length; i++) {
//     if (longest < stringg[i].length) {
//         longest = stringg[i].length;
//         longest_Word = stringg[i];
//     }
//  }
//  return longest_Word;
// }
// console.log(longestWord("ello guys this is geeksforgeeks where students learn programming"));


