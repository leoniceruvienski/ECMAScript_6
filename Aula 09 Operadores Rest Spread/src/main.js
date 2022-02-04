const numbers = [1, 2, 3, 4, 5]
const[first, second] = numbers
console.log(first, second)


const numbers = [1, 2, 3, 4, 5]
const[first, second, ...rest] = numbers
console.log(rest)

 

const person = {
    name: 'Leonice',
    age: 30,
    height: 1.64,
    company: 'TI++',
}
const { name, ...rest} = person
console.log(rest)



const sum = (... params) => {
    return params.reduce((total, next) => total + next)
}
console.log(sum(5, 5, 10, 10, 10))



const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [6, 7, 8, 9, 10]

const numbers = [...numbers1, ...numbers2]
console.log(numbers)



const person = {
    name: 'Leonice',
    age: 30,
    height: 1.64,
    company: 'TI++',
}
const person1 = {
    ...person,
    company: 'google'
}
console.log(person1)












