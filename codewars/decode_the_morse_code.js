
const decodeMorseCode = (morseCode) => morseCode.split('   ').map(word => word.split(' ').map(character => MORSE_CODE[character]).join('')).join(' ').trim()


console.log(decodeMorseCode(".... . -.--   .--- ..- -.. ."))