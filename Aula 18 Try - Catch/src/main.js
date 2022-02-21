const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout (() => {
        resolve ('ok')
    }, 2000)
})

// myPromise().then(() => {
//     console.log('primeira vez')
// }).catch((error) => {
//     console.warn(error)
// })

const exec = async () => {
    try {
        await myPromise()
        console.log('primeira vez')
        await myPromise()
        console.log('segunda vez')
    } catch (error) {
        console.warn(error)
    } finally {
        console.log('finalizou')
    }
}
exec()
    









