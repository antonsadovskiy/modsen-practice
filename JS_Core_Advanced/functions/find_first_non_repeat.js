const findFirstNonRepeat = (string) => {
    const charCount = {};

    for (let char of string) {
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char] += 1;
        }
    }

    for (let char of string) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return undefined;
};

console.log(findFirstNonRepeat('aaaaaaabaaaa'))