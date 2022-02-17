// arrays
// es6 syntax
// arrays
let letters = ['a','b','c']

// clone an array with spread operator ...
 const clone = [...letters,]
 const addMore = ['a', ...letters, 'd']
 const anotherDemo = [...letters, '-',...addMore]

console.log(letters)
console.log(clone)
console.log(addMore)
console.log(anotherDemo)
console.log(clone == letters)
console.log(clone === letters)

//Array destructoring - order
let arr = ['12', ()=>{console.log('here')}, 34]
let a = arr[0]
let b = arr[1]
let c = arr[2]

// above works but better way (cleaner)
let [x,y,z,q] = arr

console.log(x)
console.log('y:', y())
console.log(z)
console.log(q)