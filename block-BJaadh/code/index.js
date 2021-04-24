// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9)

// - Convert value of strings array into a sentance like "This is a collection of words"
let emptyString = ""
for(let i = 0 ; i < strings.length ; i++){
  let str = strings[i]
  emptyString += str + " "
}
// console.log(emptyString)

// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push('called ', 'sentence'))

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
// let emptyString = ""
for(let i = 0 ; i < strings.length ; i++){
  let str = strings[i]
  emptyString += str + " "
}
console.log(emptyString)

// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
strings.map(char => char.includes('is'))

// - Find all the words that contain 'is' use string method 'indexOf'
strings.map(char => char.indexOf('is'))

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(num => num % 3 === 0)

// -  Sort Array from smallest to largest

// let sorted_arr = [];
//  numbers.sort(num => {
//   if(num > num+1){
//     sorted_arr.push(num)
//   }
//   return sorted_arr
// });
// console.log(sorted_arr)
numbers.sort();


// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
// for(num of numbers){
//   return num > num + 1
// }

// - Find longest string in strings
strings.map(string => string.length )

// - Find all the even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers)

// - Find all the odd numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers)

// - Place a new word at the start of the array use (unshift)
strings.unshift('newWord')

// - Make a subset of numbers array [18,9,7,11]
// numbers.map( num => num)

// - Make a subset of strings array ['a','collection']


// - Replace 12 & 18 with 1221 and 1881
numbers.map(number => number.replace(12, 1221 && 18, 1881))

// - Replace words in strings array with the length of the word
strings.forEach(char => char.replace('words' , 'word'))

// - Find the sum of the length of words using above question
strings.map(char => char.length)


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let start_j = customers.forEach(char => char.length[0] == 'j')
console.log(start_j)

// - Create new array with only first name
customers.map(char => char.firstname)

// - Create new array with all the full names (ex: "Joe Blogs")
let new_arr = [];
for(let i = 0 ; i < customers.length.firstname ; i++){
  new_arr += customers.length[i]
}
console.log(new_arr)

// - Sort the array created above alphabetically
new_arr.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel_arr = [];
 for(let i = 0 ; i < customers.length ; i++){
   if(customers.firstname == 'a', customers.firstname == 'e', customers.firstname == 'i', customers.firstname == 'o',
    customers.firstname == 'u' ){
      vowel_arr.push(customers.firstname[i])
    }
    console.log(vowel_arr)
 }
