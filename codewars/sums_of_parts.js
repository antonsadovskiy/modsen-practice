const partsSums = (ls) => {
    let totalSum = 0
    ls.forEach((item) => totalSum += item)

    const startValue = [totalSum]

    return ls.reduce((acc, value) => {
        acc.partsSum.push(acc.totalSum - value)
        acc.totalSum -= value
        return acc
    }, {totalSum, partsSum: startValue}).partsSum
}


console.log(partsSums([0, 1, 3, 6, 10])) // [20, 20, 19, 16, 10, 0])