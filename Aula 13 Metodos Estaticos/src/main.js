class Calculator {
    static sum (a, b) {
        return a + b
    }
}
console.log(Calculator.sum(10, 5))



class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName
        this.secondName = secondName
    }

    get fullName() {
        return`${this.firstName} ${this.secondName}`
    }
}
const person = new Person ('Leonice', 'Ruvienski')
console.log(person.fullName)



class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName
        this.secondName = secondName
    }

    get fullName() {
        return Person.joinNames(this.firstName, this.secondName)
    }

    static joinNames(firstName, secondName) {
        return `${firstName} ${secondName}`
    }
}

const person = new Person ('Leonice', 'Ruvienski')
console.log(person.fullName)