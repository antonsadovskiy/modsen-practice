function pyramid(n) {
    const arr = Array.from(Array(n).keys())

    return arr.reduce((acc, value) => {
        const currentArrayLength = value + 1

        const array = []

        for (let i = 0; i < currentArrayLength; i++) {
            array.push(1)
        }
        acc.push(array)
        return acc
    }, [])
}

console.log(pyramid(2))
console.log(pyramid(1))