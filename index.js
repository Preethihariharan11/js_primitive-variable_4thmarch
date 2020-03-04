/*Data Types: 
Primitive-strings,Number,Boolean,symbol
Reference-Objects,array
Vlues:special value-null,not-null,undefined,NaN*/
let intro="hai people this is "
let fname='Preethi'
let lname='Hariharan '
//string defineition
console.log(fname.length)
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
