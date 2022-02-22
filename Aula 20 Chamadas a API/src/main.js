import Todos from './api/todos'

async function exec() {
    const todos = new Todos()

    const response = await todos.store({text: 'hidratar o cabelo', done: true})
    console.log(response)
}
exec()



import Todos from './api/todos'

async function exec() {
    const todos = new Todos()

    const response = await todos.update({
        id: 6, 
        text: 'beber vitamina', 
        done: true
    })
    console.log(response)
}
exec()



import Todos from './api/todos'

async function exec() {
    const todos = new Todos()

    const response = await todos.destroy({id:7})
    console.log(response)
}
exec()









