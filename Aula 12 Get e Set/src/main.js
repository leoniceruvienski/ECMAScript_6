class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }
}
const person = new Person('Leonice Ruvienski')

person.name = 'José Ronaldo'

console.log(person.name)