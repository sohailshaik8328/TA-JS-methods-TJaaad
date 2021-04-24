let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array.
// (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
// let longest = [...words].sort((a, b) => a.length - b.length).pop();
// function findLongestWord(arr){
//   return arr
// }
// findLongestWord(longest)

function findLongestWord(arr){
  return [...arr].sort((a, b) => a.length - b.length).pop();
}
findLongestWord(words)

// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map(word => word.length))

// - Create a new array that only contains word with atleast one vowel.
let vowelArray = words.filter(word => {
  if
  (
    word.toLowerCase().includes('a') ||
    word.toLowerCase().includes('e') ||
    word.toLowerCase().includes('i') ||
    word.toLowerCase().includes('o') ||
    word.toLowerCase().includes('u') 
  ){
    return true
  }else{
    return false
  }
})
console.log(vowelArray)

// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'))

// - Create a new array that contians words not starting with vowel.
let startVowel = words.filter(word => {
  if
  (
    word.toLowerCase().startsWith('a')||
    word.toLowerCase().startsWith('e')||
    word.toLowerCase().startsWith('i')||
    word.toLowerCase().startsWith('o')||
    word.toLowerCase().startsWith('u')
  ){
    return true
  }else{
    return false
  }
})
console.log(startVowel)

// - Create a new array that contianse words not ending with vowel

let endsVowel = words.filter(word => {
  if
  (
    word.toLowerCase().endsWith('a')||
    word.toLowerCase().endsWith('e')||
    word.toLowerCase().endsWith('i')||
    word.toLowerCase().endsWith('o')||
    word.toLowerCase().endsWith('u')
  ){
    return true
  }else{
    return false
  }
})
console.log(endsVowel)


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(nums){
  return nums
}

let sumArrayReduce = numbers.reduce((acc, cv) => {
  return acc + cv
}, 0)
sumArray(sumArrayReduce)

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedArray = numbers.filter(number => number % 3 === 0)
console.log(multipliedArray)

// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter(number => number % 2 !== 0)
console.log(oddNumbers)

// - Create a new array that should have true for even number and false for odd numbers.
let true_false_arr = numbers.map(number => {
  if(number % 2 === 0){
    return true
  }else{
    return false
  }
})
console.log(true_false_arr)

// - Sort the above number in assending order.
let sorted_num_arr = [...numbers].sort((a, b) => a - b)
console.log(sorted_num_arr)

// - Does sort mutate the original array?

// ```js
// Yes 'sort();' method mutates the array 
// ```
// - Find the sum of the numbers in the array.


let sumOfNumbers = numbers.reduce((acc, cv) => {
  return acc + cv
}) 
console.log(sumOfNumbers)

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let sum = 0;
function averageNumbers(){
  for(let i = 0 ; i < numbers.length ; i++){
    sum += numbers[i]

  }
return sum / numbers.length
}
averageNumbers();



let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

// function averageWordLength(char){
//   return char
// }
// let avg_word_length = strings.map(string => string.length/string.length)
// averageWordLength(avg_word_length)
function averageWordLength(words){
  return (
  words.map(word => word.length).reduce((acc, cv) => {
    return acc + cv;
  }, 0) / words.length
  );
};
console.log(averageWordLength(words))