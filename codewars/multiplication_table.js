multiplicationTable = function (size) {
    const matrix = []

    const array = Array.from({length: size}, (_, i) => i + 1)

    for (let i = 0; i < size; i++) {
        matrix[i] = []
        for (let j = 0; j < size; j++) {
            matrix[i][j] = array[i] * array[j]
        }
    }
    return matrix
}

console.log(multiplicationTable(3))
console.log(multiplicationTable(6))