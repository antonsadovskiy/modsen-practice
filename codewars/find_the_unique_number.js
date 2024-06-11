function findUniq(arr) {
    const array = [...arr];

    array.sort((a, b) => a - b);

    const possibleUniqNumbers = [array[0], array[array.length - 1]];

    array.splice(0, 1)
    array.splice(array.length - 1, 1)

    if (array.includes(possibleUniqNumbers[0])) {
        return possibleUniqNumbers[1]
    }
    return possibleUniqNumbers[0]
}


console.log(findUniq([1, 1, 1, 2, 1, 1]))