function generateHashtag(str) {
    const trimmedStr = str.trim()
    if (trimmedStr === "") {
        return false
    }
    const array = trimmedStr.split(" ").filter((item) => item !== "")

    const processedString = array.map((word) => {
        const arrayOfLetters = word.split("")
        const firstLetter = arrayOfLetters[0].toUpperCase()
        const wordWithoutFirstLetter = arrayOfLetters.slice(1).join("")
        return firstLetter + wordWithoutFirstLetter
    }).join("")

    const resultWord = `#${processedString}`

    if (resultWord.length > 140) {
        return false
    }

    return resultWord
}

console.log(generateHashtag(""))// false
console.log(generateHashtag(" ".repeat(200))) // false
console.log(generateHashtag("Do We have A Hashtag"))// "#DoWeHaveAHashtag"
console.log(generateHashtag("Codewars")) //, "#Codewars"
console.log(generateHashtag("Codewars Is Nice")) //, "#CodewarsIsNice"
console.log(generateHashtag("Codewars is nice")) //, "#CodewarsIsNice"
console.log(generateHashtag("code" + " ".repeat(140) + "wars")) //, "#CodeWars")
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138)) //, "Should work")
console.log(generateHashtag("a".repeat(140))) //, false, "Too long")