let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName = persons.map(person => {
  return person.name
})
console.log(peopelName)

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map(person => {
  return person.grade
})
console.log(peopleGrade)

// Create serray peopleSex and store the value of sex key from persons array

let peopelSex = persons.map(person => {
  return person.sex
})
console.log(peopelSex)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filtered_peopleName = peopelName.filter( person => {
  return person.startsWith('J' || 'P')
  
}
)
console.log(filtered_peopleName)

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let length_people_name = peopelName.filter(person => {
  return person.startsWith('A' && 'C')
})
console.log(length_people_name.length)

// Log all the filtered male ('M') in persons array
let filtered_male = persons.filter(person => {
  return person.sex == 'M'
})
console.log(filtered_male)

// Log all the filtered female ('F') in persons array
let filtered_female = persons.filter(person => {
  return person.sex == 'F'
})
console.log(filtered_female)

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filterFemaleStarts = filtered_female.filter(person => {
  return person.name.startsWith('C' || 'J')
})

// Log all the even numbers from peopleGrade array
let even_grade = peopleGrade.filter(eve => {
  return eve % 2 === 0
})
console.log(even_grade)

// Find the first name that starts with 'J' in persons array and log the object

let first_filtered_name = persons.filter( person => {
  return person.name.startsWith('J')
  
}
)
console.log(first_filtered_name)

// Find the first name that starts with 'P' in persons array and log the object

let first_filtered_name_again = persons.filter( person => {
  return person.name.startsWith('P')
  
}
)
console.log(first_filtered_name_again)

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let first_filtered_name_greater = persons.filter( person => {
  return person.name.startsWith('J') && person.sex == "F" && person.grade > 10
  
}
)
console.log(first_filtered_name_greater)

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(person => {
  return person.sex == "F"
})
console.log(femalePersons)

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(person => {
  return person.sex == "M"
})
console.log(malePersons)

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc , cv) => {
  return acc + cv
})
console.log(gradeTotal)

// Find the average grade
let average_grade = gradeTotal / peopleGrade.length
console.log(average_grade)

// Find the average grade of male
let filtered_male_grade = malePersons.map(person => {
  return person.grade
})
console.log(filtered_male_grade)

let avg_male_grade = filtered_male_grade.reduce((acc, cv) => {
  return acc + cv
}, 0) / filtered_male_grade.length
console.log(avg_male_grade)

// Find the average grade of female
let filtered_female_grade = femalePersons.map(person => {
  return person.grade
})
console.log(filtered_female_grade)

let avg_female_grade = filtered_female_grade.reduce((acc, cv) => {
  return acc + cv
}, 0) / filtered_female_grade.length
console.log(avg_female_grade)

// Find the highest grade
let highest_grade = peopleGrade.filter(grade =>{
  return grade
} )
console.log(highest_grade) 

// Find the highest grade in male
let highest_male_grade = filtered_male_grade.filter(grade =>{
  return grade
} )
console.log(highest_male_grade)

// Find the highest grade in female
let highest_female_grade = filtered_female_grade.filter(grade =>{
  return grade
} )
console.log(highest_female_grade)

// Find the highest grade for people whose name starts with 'J' or 'P'
let highest_grade_JP = filtered_peopleName.filter(person =>{
  return person.grade
} )
console.log(highest_grade_JP)

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let sortedPeopleGradeAsc = peopleGrade.sort((a, b) => (a - b))
console.log(sortedPeopleGradeAsc)

// Sort the peopleGrade in descending order
let sortedPeopleGradeDsc = peopleGrade.sort((a, b) => (b - a))
console.log(sortedPeopleGradeDsc)

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let sorted_people_grade_dsc_no_mu = [...peopleGrade].sort((a, b) => (b - a))
console.log(sorted_people_grade_dsc_no_mu)
// Sort the array peopelName in ascending `ABCD..Za....z`
let sorted_people_name = peopelName.sort((a, b) => a.length - b.length)
console.log(sorted_people_name)

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let sorted_people_name_no_mu = [...peopelName].sort((a, b) => a.length - b.length)
console.log(sorted_people_name_no_mu)
