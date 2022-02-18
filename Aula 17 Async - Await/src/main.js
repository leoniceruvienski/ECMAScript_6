const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout (() => {
        resolve ('ok')
    }, 2000)
})

myPromise().then((response) => {
    console.log(response)
})



const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout (() => {
        resolve ('ok')
    }, 2000)
})

myPromise().then((response) => {
    console.log('primeira vez')

    myPromise().then((response) => {
        console.log('segunda vez')

        myPromise().then((response) => {
            console.log('terceira vez')
        
        })
    }) 
})



const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout (() => {
        resolve ('ok')
    }, 2000)
})

async function exec(){
    await myPromise()
    console.log('ok')
}
exec()

 

const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout (() => {
        resolve ('Javascript')
    }, 2000)
})

async function exec(){
    const response = await myPromise()
    console.log(response)
}
exec()



const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout (() => {
        resolve ('Javascript')
    }, 2000)
})

const exec= async () => {
    const response = await myPromise()
    console.log(response)
}
exec()



const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout (() => {
        resolve ('Javascript')
    }, 2000)
})

myPromise().then((response) => {
    console.log('primeira vez')
    
    myPromise().then((response) => {
        console.log('segunda vez')

        myPromise().then((response) => {
            console.log('terceira vez')
        })
    }) 
    
}) 
    









