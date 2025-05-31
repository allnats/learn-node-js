
// This is a Node-provided API that is async.
setTimeout(() => {
    console.log("Two seconds are up.")
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']

// Standard JS code that is synchronous.
const shortNames = names.filter(name => {
    return name.length <= 4
})

const geocode = (address, callback) => {

    setTimeout(() => {
        const data = {
            lon: 0,
            lat: 0
        }

        callback(data)
    }, 2000)

}

geocode("Philippines", (data) => {
    console.log(data)
})


const somefunc = (address, cb) => {
    setTimeout(() => {
        console.log("the test inside")
        return "test"
    }, 5000)
}

const test = somefunc("test")
console.log(test)

const add = (a, b, cb) => {
    setTimeout(() => {
        return cb(a + b)
    }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum)
})