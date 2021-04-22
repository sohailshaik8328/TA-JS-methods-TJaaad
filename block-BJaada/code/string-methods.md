Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

 - parameter : no parameter
 - Return : It will convert the varibale that you have given into 'capital letter's' or 'Uppercase letter's'

 ```js
 let name = 'sohail'
 name.toUpperCase() // 'SOHAIL'
 ```

 - `toUpperCase` doesn't accepts any parameter and it will converts the variable to UpperCase letters.

3. `toLowerCase`

- parameter : no parameter
 - Return : It will convert the varibale that you have given into 'small letter's' or 'Lowercase letter's'

 ```js
 let name = 'SOHAIL'
 name.toLowerCase() // 'sohail'
 ```

 - `toUpperCase` doesn't accepts any parameter and it will converts the variable to LowerCase letters.

4. `trim`
  - parameter :  No parameter
  - Return : It will remove all the empty extra space existed at starting and ending of the variable.

  ```js
  let name = "      sohail      " // "      sohail      "
  name.trim() // "sohail"
  ```
  - `trim` It will remove all the empty extra space existed at starting and ending of the variable.

5. `trimEnd`

 - parameter :  No parameter
  - Return : It will remove all the empty extra space existed only in the ending of the variable.

  ```js
  let name = "      sohail      " // "      sohail      "

  name.trimEnd() // "       sohail"

  let username = "sohail;      " // "sohail      "
  username.trimEnd() // "sohail"
  ```
  - `trim` It will remove all the empty extra space existed at starting and ending of the variable.


6. `trimStart`

- parameter :  No parameter
  - Return : It will remove all the empty extra space existed only in the starting of the variable.

  ```js
  let name = "      sohail      " // "      sohail      "

  name.trimStart() // "sohail      "

  let username = "      sohail;" // "      sohail"
  username.trimStart() // "sohail"
  ```
  - `trim` It will remove all the empty extra space existed at starting and starting of the variable.


7. `concat`

  - parameter : It accepts two or more parameters 
  - Return : It will concatinate the strings or numbers which are given by us.

  ```js
  let name = "sohail"
  name.concat(" ", "shaik") // "sohail shaik'
  name.concat(" ", 12345) // 'sohail 12345'
  name.concat(" ", "shaik", 12345) // "sohail shaik 12345'
  ```
  - `concat` It will concat whatever we want to attach each other as you can see in the above examples.

8. `endsWith`

  - parameter : It accepts one parameter
  - Return : It will returns the 'Boolean' value based on the variable value.

  ```js
  let name = "sohail"
  name.endsWith("l") // true
  name.endsWith("s") // false
  ```
  - `endsWith` It will accepts one parameter and it will returns the boolean value based on the value which we have given.


9. `includes`
  - parameter : It accepts one parameter.
  - Return : It will return the boolean value based on teh variable value checking.

  ```js
  let name = "sohail"
  name.includes("s") // true
  name.includes("k") // false
  ```
  - `includes` It will checks the value which is given by us with the value we are comparing.


10. `indexOf`

  - parameter : It will accepts one parameter.
  - Return : It will returns the index of the particular value in the variable.

  ```js
  let name = "sohail"
  name.indexOf("s") // 0
  name.indexOf("l") // 5
  name.indexOf("k") // -1
  ```
  - `indexOf` It will shows the index of the particular value and if we give non-existed value it will return '-1'.

11. `lastIndexOf`

 - parameter : It will accepts one parameter.
  - Return : It will returns the index of the particular value in the variable.

  ```js
  let name = "sohail"
  name.lastIndexOf("s") // 0
  name.lastIndexOf("l") // 5
  name.lastIndexOf("k") // -1
  ```
  - `lastIndexOf` It will shows the index of the particular value and if we give non-existed value it will return '-1'.


12. `padEnd`

 - parameter : It will accepts two parameter.
  - Return : It will concatinate any value or a string with it only at the end.

  ```js
  let name = "sohail"
  name.padEnd(10 ,".") // "sohail.........."
  name.padEnd(6, "l") // "sohailllllll"
  ```
  - `padEnd`It will concatinate any value or a string with it only at the end. And it also calculate the number of times you want to repeat some symbols as you can see in the above example.

13. `padStart`

- parameter : It will accepts two parameter only in the start.
  - Return : It will concatinate any value or a string with it.

  ```js
  let name = "sohail"
  name.padEnd(10 ,".") // "..........sohail"
  name.padEnd(6, "l") // "llllllsohail"
  ```
  - `padEnd`It will concatinate any value or a string with it only in the start. And it also calculate the number of times you want to repeat some symbols as you can see in the above example.


14. `repeat`

 - parameter : It will accepts one parameter
 - Return : It will return the repeated values number of times.

 ```js
 let name = "sohail"
 name.repeat(4) // "sohailsohailsohailsohail' 
 ```
  - `repeat` It will repeat the any string or number as we want based on the values given.


15. `replace`

 - parameter : It will accepts two parameters
  - Return : It will replace the value we want to replace

  ```js
  let name = "AltCampus"
  name.replace("Campus", "School") // "AltSchool"
  ```


16. `slice`

 - parameter : It  accepts two parameters that is start index and end index of the variable value.
 - Return : It will cuts the portion of the string given by us with values.

 ```js
 let name = "sohail"
 name.slice(0, 5) // "sohai"
 name.slice(1, 3) // "oh"
 name.slice(1) // "ohail"
 ```
 `slice` It will takes two parameters one is starting index and another one is ending index o cut the value from where to where.If you can't give the ending index it will go till the end from start. If you give the indexe's reversely it will show an empy string


17. `split`
  - parameter : It accepts one parameter
  - Return : It will return the splitting value given by us with an 'array' of strings or numbers.

  ```js
  let name = "Sohail Shaik"
  name.split(" ") // ["Sohail", "Shaik"]
  ```
  - `split` It will take one parameter and it will return the strings or numbers separately in the form of array.


18. `substring`

 - parameter : It  accepts two parameters that is start index and end index of the variable value.
 - Return : It will gives the portion of the string given by us with values.

  ```js
  let name = "Sohail Shaik"
  name.substring(0, 5) // 'sohai'
  name.substring(5, 0) // 'sohai'
  ```
 - `substring` It will takes two parameters one is starting index and another one is ending index o cut the value from where to where. If you give the indexe's reversely also it will return the same output.