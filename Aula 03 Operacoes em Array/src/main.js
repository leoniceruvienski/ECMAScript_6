const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function(number, index){
    console.log(number, index)
})


const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function(number, index){
   numbers[index] = number +1
})

console.log(numbers)




const numbers = [1, 2, 3, 4, 5]

const newNumbers = numbers.map(function(number){
    return number + 1
})

console.log(newNumbers)
console.log(numbers)




const numbers = [1, 2, 3, 4, 5]

const total = numbers.reduce(function(total, next){
    return total  + next
})

console.log(total)




const todos = [
    {text: 'lavar a louça', done: true},
    {text: 'apanhar o lixo', done: true},
    {text:'dobrar as roupas', done: true},
]
const doneTodos = todos.filter(function(todo){
    return todo.done
})
console.log(doneTodos)




const todos = [
    {text: 'lavar a louça', done: true},
    {text: 'apanhar o lixo', done: true},
    {text:'dobrar as roupas', done: true},
]
const doneTodos = todos.filter(function(todo){
    return todo.text ==='dobrar as roupas'
})
console.log(doneTodos)




const todos = [
    {text: 'lavar a louça', done: true},
    {text: 'apanhar o lixo', done: true},
    {text:'dobrar as roupas', done: true},
]
const find = todos.find(function (todo){
    return todo.text === 'dobrar as roupas'
})
console.log(find)




const todos = [
    {text: 'lavar a louça', done: true},
    {text: 'apanhar o lixo', done: true},
    {text:'dobrar as roupas', done: true},
]
const index = todos.findIndex(function(todo){
    return todo.text === 'dobrar as roupas'
})
console.log(index)




const cars = ['fusca' , 'civic' , 'hb20']

const hasFusca = cars.some(function (car){
    return car === 'fusca'
})
console.log(hasFusca)




const cars = ['fusca' , 'civic' , 'hb20']

const hasFusca = cars.some(function (car){
    return car === 'bmw'
})
console.log(hasFusca)
















































