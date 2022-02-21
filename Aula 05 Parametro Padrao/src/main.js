function sayHello(name) {
    console.log(' Olá ' + name)
}

sayHello('Leonice ')



function sayHello(name = 'Fulano') {
    console.log(' Olá ' + name)
}

sayHello()



const sayHello = (name = 'Fulano') => console.log(' Olá ' + name)

sayHello()
