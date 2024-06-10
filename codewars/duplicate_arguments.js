function solution(...args) {
    const array = [...args]

    const obj = {}

    array.forEach((value) => {
        if (obj[value]) {
            obj[value] += 1
        } else {
            obj[value] = 1
        }
    })

    let isDuplicate = false

    for (const key in obj) {
        if (obj[key] > 1) {
            isDuplicate = true
        }
    }
    return isDuplicate
}

console.log(solution(1, 2, 3, 6, 5, 6))
console.log(solution('a', 'b', 'c', 'a'))
console.log(solution(1, 2, 3, 'a', 'b'))
console.log(solution(1, 2, 3, '1', 'b'))
