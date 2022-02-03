// const fruits = ['laranja', 'morango', 'maçã']
const a = fruits[0]
const b = fruits[1]

console.log(a, b)



const fruits = ['laranja', 'morango', 'maçã']
const [a, b] = fruits

console.log(a, b)



const fruits = ['laranja', 'morango', 'maçã']
const [a, , c] = fruits

console.log(a, c)




const person = {
    firstName: 'Leonice',
    secondName: 'Ruvienski',
    age: 23,
    address: {
        city: 'Irati',
        region:  'PR',
    },
}
const firstName = person.firstName
const secondName = person.secondName
const city = person.address.city

console.log(firstName, secondName, city)




const person = {
    firstName: 'Leonice',
    secondName: 'Ruvienski',
    age: 30,
    address: {
        city: 'Irati',
        region:  'PR',
    },
}
const { firstName, secondName, address: {city} } = person


console.log(firstName, secondName, city)



const person = {
    firstName: 'Leonice',
    secondName: 'Ruvienski',
    age: 30,
    address: {
        city: 'Irati',
        region:  'PR',
    },
}
const showFullName = ({ firstName, secondName}) => {
    console.log(`${firstName} ${secondName}`)
}
showFullName(person)