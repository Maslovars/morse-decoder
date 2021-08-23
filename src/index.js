const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let res = '';
    let symbol = '';
    let replacedSymbol = '';


    for (let i = 0; i < expr.length; i += 10) {

        for (let j = 0; j < 10; j++) {
            symbol += expr[j + i];
        }

        if (symbol === '**********') res += ' ';

        else {
            replacedSymbol = symbol.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
            res += MORSE_TABLE[replacedSymbol];
        }

        symbol = '';
        replacedSymbol = '';
    }

    return res;
}

module.exports = {
    decode
}