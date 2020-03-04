/*Data Types: 
Primitive-strings,Number,Boolean,symbol
Reference-Objects,array
Vlues:special value-null,not-null,undefined,NaN*/
//STRING METHODS//
let intro="hai people this is "
let fname='Preethi'
let lname='Hariharan '
//-----------------string methods
console.log(fname.length)
//output=7
//returns length of var
console.log(intro.concat(fname,lname))
console.log(fname.concat(lname))
//return the value of string concatenation\
console.log(intro.endsWith('haran'))
console.log(intro.endsWith('is '))
//returns boolean value-true of false by ends with condition
console.log(intro)
//concatenation doesnt alter the variable value physically
console.log(fname.includes('thi'))
//variable fname contains 'thi' character in it by includes function
console.log(lname.indexOf('n'))
//returns the index value of element inside var
console.log(intro.lastIndexOf('this'))
//returns the position of the last occurrence of a specified value in a string.
console.log(lname.repeat(9))
//returns a new string with a specified number of copies of the string it was called on
console.log(intro.replace('this is',''))
//searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
console.log(intro.search('this is'))
//searches a string for a specified value, and returns the position of the match.
console.log(intro.slice(1,10))
//returns the selected elements from range of index value
console.log(intro.split(" "))
//returns the string into an array of substrings, and returns the new array
console.log(intro.startsWith("hai"))
//returns boolean value-true of false by startswith condition
console.log(intro.substr(1,8))
//returns the selected elements from range of index value
console.log(intro)
console.log(intro.substring(1,8))
//returns the selected elements from range of index value
console.log(intro.toLowerCase())
//returns the string im lower case
console.log(intro.toUpperCase())
//returns the string im upper case
console.log(intro.trim())
//removes whitespace from both sides of a string.

//-------------------------------------------------------------------//
//NUMBER METHODS//
let age=18
let salary= 4567.08967
console.log(salary.toFixed(10))
//toFixed() method converts a number into a string, keeping a specified number of decimals.
console.log(salary.toExponential())
//The toExponential() method converts a number into an exponential notation.
console.log(salary.toString())
//The toString() method converts a number to a string.
console.log(salary.toString(2))
console.log(salary.toString(8))
console.log(salary.toString(16))
//The toString() method converts a number to a string Of binary,octal,hexa-decimal.

//----------------------------------------------------------------------//
// GLOBAL METHODS//
console.info("Hey hey!! I am a intern at Ducen")
//The console.info() method writes a message to the console.
console.warn("This is a warning!")
//The console.warn() method writes a warning to the console.
console.error("You made a mistake")
//The console.error() method writes an error message to the console.
console.table(["Audi", "Volvo", "Ford"])
//The console.table() method writes a table in the console view.
//-----few console methods------//
//alert("Hello! I am an preethi's alert box!")
//The alert() method displays an alert box with a specified message and an OK button.
//prompt("Please enter your name","Preethi?!");
//The prompt() method displays a dialog box that prompts the visitor for input.
 // confirm("Confirm your details?");
 //The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
 console.log(Number(false))
 //The Number() function converts the object argument to a number that represents the object's value.
 console.log(isNaN('h8'))
 //output=true
 //The isNaN() function determines whether a value is an illegal number (Not-a-Number).
console.log(parseFloat('10.764 yoyo'))
//output=10.764
//The parseFloat() function parses a string and returns a floating point number.
console.log(parseInt(10.6745))
//output=10
//The parseInt() function parses a string and returns an integer.
console.log(String(Boolean(1)))
//output=true
//The String() function converts the value of an object to a string.
console.log(Boolean(1<2))
//output=true
// Boolean() function to find out if an expression (or a variable) is number or not respective to true or false
