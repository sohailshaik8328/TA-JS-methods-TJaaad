let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log( `The length of ${message} is ${message.length}`)

// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
console.log(`The first character of ${message} is ${message.charAt(0)}`)

// Log the last character of message using length like `The last character of [message] is [character]`
console.log(`The first character of ${message} is ${message.charAt(message.length-1)}`)


// Log the index of word "you" in message
console.log(`${message.indexOf("you")}`)


// Log the index of word "still" in message
console.log(`${message.indexOf("still")}`)


// Log the index of word "answers" in message
console.log(`${message.indexOf("answers")}`)


// Log true or false based on whether the word "answers" exist in message or not
for(let char of message){
    if(char == "answers") return true
    else return false
}

// Log true or false based on whether the word "they" exist in message or not
for(let char of message){
    if(char == "they") return true
    else return false
}

// Log true or false based on whether the word "is" exist in message or not
for(let char of message){
    if(char == "is") return true
    else false
}

// Log true or false based on whether the word "Is" exist in message or not
for(let char of message){
    if(char == "Is") return true
    else false
}

// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
let  check_slice = message.slice(3, 6)
if(message === check_slice) return true
else return false

// Check and log whether the word from index 7 to 8 is "a" or not
let check_slice_new = message.slice(7, 8)
if(message === check_slice_new) return true
else return false

// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
var slice = message.slice(-3) 
    if(slice === "no!"){
        return true
    }else{
        return false
    }

// Check and log whether the last 5 character in message is "no!" or not
var slice = message.slice(-5) 
    if(slice === "no!"){
        return true
    }else{
        return false
    }

// Log the message variable, all in lowecase
console.log(message.toLowerCase())

// Log the message variable, all in uppercase
console.log(message.toUpperCase())


// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
let newMessage = message.replace("are", "can't")
console.log(newMessage)

// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
 newMessage = message.replace("still", "")
console.log(newMessage)

// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
let newMessage = message.replace("thinking", "decide")
console.log(newMessage)

// Log all the characters from the message variable (you can user for..of loop on string)
for(let char of message){
    console.log(char)
}

// Split all the words in message (split by " " space) and store it in a variable messageArray
let messageArray =message.split(" ")


// Log all the words of messageArray
console.log(messageArray)
