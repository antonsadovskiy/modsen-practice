function shortestStepsToNum(num) {
    let steps = 0
    while (true) {
        if (num === 1) {
            return 0
        }
        num % 2 === 1 ? num -= 1 : num /= 2
        steps++
        if (num === 1) {
            return steps
        }
    }
}