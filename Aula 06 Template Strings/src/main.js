//O valor de camisa é R$ 15, pode comprar!

const showProduct = (product, price) => {
    console.log('O valor de ' + product + ' é R$ ' + price + ', pode comprar!')
}
showProduct('Camisa', 15)



const showProduct = (product, price) => {
    console.log(`O valor de ${product} é R$ ${price}, pode comprar`)
}
showProduct('Camisa', 15)



const showProduct = (product, price) => {
    console.log(`O valor de ${product.toUpperCase()} é R$ ${price}, pode comprar`)
}
showProduct('Camisa', 15)




const showProduct = (product, price) => {
    console.log(`O valor de ${product.toUpperCase()} é R$ ${Math.round(price)}, pode comprar`)
}
showProduct('Camisa', 20.7)