// objects {}

let person = {name:'frank', age:22, friends:['tony','bob']}

// object cloning
let personClone = {...person}
let personCloneWithDOB = {...person, dob:"june 1"}
let personCloneWithUpdateAge = {...person, age:23}

console.log(person)
console.log(personClone)
console.log(personCloneWithDOB)
console.log(personCloneWithUpdateAge)

//snake case
// my_age_here

// camelcase
// myAgeHere

// object destructoring
let x = person.age
let y = person.name
console.log(x)
console.log(y)

// names of var have to match name of keys in object
const { name, age } = person

console.log(name)
console.log(age)

// these two are doing the samething
// expecting person to be {name, age}
const sayHi = (person)=>{
    console.log(`hello ${person.name} you are ${person.age}`)
}

// expecting the 1rst param to be {name, age}
const sayHi1 = ({name, age})=>{
    console.log(`hello ${name} you are ${age}`)
}

sayHi(person) // ERROR hello undefined you are undefined
sayHi({name:'tony', age:23}) // hello frank you are 22
sayHi1({name:'tonysdf', age:22343}) // hello frank you are 22
sayHi1('tony',23) // hello frank you are 22

const comp = (turkey)=>{
    const {key1, key2}= turkey
    console.log(key1)
    console.log(key2)
    console.log(turkey.key1)
    console.log(turkey.key2)
}

const comp1 = ({key1, key2})=>{
  console.log(key1)
  console.log(key1)
  console.log(key1)
  console.log(key2)
}

comp({key1:'xcvasdf', key2:'asdfasd'})
comp1({key1:'xcvasdf', key2:'asdfasd'})