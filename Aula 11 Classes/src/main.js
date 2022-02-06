class Car {
    constructor(brand, price) {
        this.brand = brand
        this.price = price

        console.log()
    }
}

const civic = new Car ('honda', 130)
console.log(civic.brand)



class Car {
    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }
    run() {
        console.log('correr')
    }
}

const civic = new Car ('honda', 130)
civic.run()



class Car {
    constructor(brand, price = 10) {
        this.brand = brand
        this.price = price
    }
    run() {
        console.log('correr')
    }
}

const civic = new Car ('honda')
console.log(civic.price)