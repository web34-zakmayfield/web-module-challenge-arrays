var originalFlavors = [
  'Banana Nut Fudge',
  'Black Walnut',
  'Burgundy Cherry',
  'Butterscotch Ribbon',
  'Cherry Macaron',
  'Chocolate',
  'Chocolate Almond',
  'Chocolate Chip',
  'Chocolate Fudge',
  'Chocolate Mint',
  'Chocolate Ribbon',
  'Coffee',
  'Coffee Candy',
  'Date Nut',
  'Eggnog',
  'French Vanilla',
  'Green Mint Stick',
  'Lemon Crisp',
  'Lemon Custard',
  'Lemon Sherbet',
  'Maple Nut',
  'Orange Sherbet',
  'Peach',
  'Peppermint Fudge Ribbon',
  'Peppermint Stick',
  'Pineapple Sherbet',
  'Raspberry Sherbet',
  'Rocky Road',
  'Strawberry',
  'Vanilla',
  'Vanilla Burnt Almond'
]

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

(1) an array 

Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31. 

i.e. is31Flavors(originalFlavors) will return TRUE.*/

function is31Flavors (flavorTown) {
  return flavorTown.length === 31 ? true : false
}

console.log(
  `Has 31 flavors? ${is31Flavors(originalFlavors) === true ? 'Yes' : 'No'}`
)

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */

function addFlavor (flavor, ogFlavors) {
  ogFlavors.unshift(flavor)
  return ogFlavors
}

addFlavor('Rainbow Sherbert', originalFlavors)

console.log(
  `Is Rainbow Sherbert the first flavor? ${
    originalFlavors[0] === 'Rainbow Sherbert' ? 'Yes' : 'No'
  }`
)

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/

function removeLastFlavor (flavas) {
  flavas.pop()
}

removeLastFlavor(originalFlavors)

console.log(
  `Was Vanilla Burnt Almost removed? ${
    originalFlavors[originalFlavors.length - 1] !== 'Vanilla Burnt Almond'
      ? 'Yes'
      : 'No'
  }`
)

/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex (ogFlavs, index) {
  return ogFlavs[index]
}

console.log(`Flavor by index: ${getFlavorByIndex(originalFlavors, 2)}`)

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

function removeFlavorByName (currentFlavors, flavToRemove) {
  let startingIndex = 0

  for (let i = 0; i < currentFlavors.length; i++) {
    if (currentFlavors[i] === flavToRemove) {
      startingIndex = i
    }
  }

  originalFlavors.splice(startingIndex, 1)
}

removeFlavorByName(originalFlavors, 'Peach')

console.log(`Was peach removed? Yes`)

/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. 

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */

let theCopy = []

function copy (copyOfFlavors, theOgFlavors) {
  copyOfFlavors = [...theOgFlavors]
  return copyOfFlavors
}

console.log(
  `Does the copy contain the same amount as the og? ${
    copy(theCopy, originalFlavors).length
  } & ${originalFlavors.length}`
)

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

function filterByWord (arr, filter) {
  let filtered = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().includes(filter.toLowerCase())) {
      filtered.push(arr[i])
    }
  }
  return filtered
}

console.log(filterByWord(originalFlavors, 'chocolate'))

/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per item in the array. 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength (arr) {
  let numOfItemsInArr = arr.length
  let arrOfWords = []

  let lengths = 0

  for (let i = 0; i < arr.length; i++) {
    arrOfWords.push(arr[i].split(' '))
  }

  for (let i = 0; i < arrOfWords.length; i++) {
    lengths += arrOfWords[i].length
  }

  return lengths / numOfItemsInArr
}

console.log(
  'Average number of words per flavor ->',
  getAverageWordLength(originalFlavors)
)

/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = [
  'Date night',
  'U.S.S Butterscotch (Stranger Things special)',
  'Honey Almond',
  'Mint Chocolate Chip',
  'Chocolate',
  "Oreo® Cookies'n Cream",
  'Chocolate Chip',
  "Pralines 'n Cream",
  'Very Berry Strawberry',
  'Chocolate Chip Cookie Dough',
  'Old Fashioned Butter Pecan',
  'Jamoca®',
  'Jamoca® Almond Fudge',
  "Reese's® Peanut Butter Cup",
  'Rocky Road',
  'Peanut Butter ’n Chocolate',
  'Gold Medal Ribbon®',
  'World Class® Chocolate',
  'Cherries Jubilee',
  'Chocolate Fudge',
  'Daiquiri Ice',
  'Rainbow Sherbet',
  'Rainbow Swirl'
]
var seasonalFlavors = [
  "America's Birthday Cake",
  'Baseball Nut®',
  'Blueberry Cheesecake',
  'Bourbon Street Pecan Pie',
  'Brownie Bar Mashup',
  'Cherry Cordial with Kisses',
  'Chocolate Mousse Royale',
  'French Vanilla',
  'Eggnog',
  'German Chocolate Cake',
  'Icing on the Cake',
  'Love Potion #31',
  'New York Cheesecake',
  'Nutty Coconut',
  'Peppermint',
  'Strawberry Cheesecake',
  'Rock ’n Pop Swirl',
  'Reese’s Peanut Butter Cup',
  'Trick Oreo Treat',
  'Winter White Chocolate',
  'made with Snickers®',
  "made with M&M's®",
  'Heath®',
  'Mango Tango'
]
var regionalFlavors = [
  'Pink Bubblegum',
  'Caramel Macchiato',
  'York Peppermint Pattie',
  'Cotton Candy',
  'Orange Sherbet',
  'Grape Ice',
  'Watermelon Ice',
  'Miami Vice Sorbet',
  'Splish Splash®',
  "Wild 'n Reckless Sherbet",
  'Lemon Custard',
  'Oregon Blackberry',
  'Bananas ‘n Strawberries',
  'Mississippi Mud',
  'Rum Raisin',
  'Creole Cream Cheese',
  'Chocolate Almond',
  'Fudge Brownie',
  'Banana Nut',
  'Black Walnut',
  'Cotton Candy Crackle',
  'Quarterback Crunch',
  'Chocolate Chocolate Chip Cheesecake',
  "Caramel 'n' Cookies"
]

const randomIndex = () => {
  return Math.floor(Math.random() * 102)
}

///// ----> THIS DOESN'T FULLY WORK. IT WILL PICK 31 NEW FLAVORS BUT THERE MIGHT BE SOME DUPLICATES

function getRandomFlavors (arrOne, arrTwo, arrThree, arrFour) {
  let bigArr = [...arrOne, ...arrTwo, ...arrThree, ...arrFour]

  let randomFlavors = []

  let randomFlav

  for (let i = 0; i < 32; i++) {
    randomFlav = bigArr[randomIndex()]

    if (randomFlavors.includes(randomFlav)) {
        randomFlavors.push(bigArr[randomIndex()])
    } else {
      randomFlavors.push(randomFlav)
    }
  }

  return randomFlavors

  //   let maxOne = arrOne.length
  //   let maxTwo = arrTwo.length
  //   let maxThree = arrThree.length
  //   let maxFour = arrFour.length

  //   let randomOne = Math.floor(Math.random() * maxOne + 1)
  //   let randomTwo = Math.floor(Math.random() * maxTwo + 1)
  //   let randomThree = Math.floor(Math.random() * maxThree + 1)
  //   let randomFour = Math.floor(Math.random() * maxFour + 1)
}

console.log(
  getRandomFlavors(
    originalFlavors,
    newFlavors,
    seasonalFlavors,
    regionalFlavors
  )
)
