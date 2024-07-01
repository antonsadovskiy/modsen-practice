function findMissingLetter(array) {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    for (let i = alphabet.indexOf(array[0].toUpperCase()), j = 0; i < array.length, j < array.length; i++, j++) {

        if (alphabet[i] !== array[j].toUpperCase()) {
            return array[j - 1] === alphabet[i - 1].toUpperCase() ? alphabet[i] : alphabet[i].toLowerCase()
        }
    }
}