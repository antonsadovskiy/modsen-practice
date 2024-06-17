new Promise((resolve) => {
    resolve(10);
}).then((value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * value)
        }, 3000)
    })
}).then((value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * value)
        }, 3000)
    })
}).then((value) => {
    console.log(value)
})