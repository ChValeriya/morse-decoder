const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let keys = Object.keys(MORSE_TABLE);
let values = Object.values(MORSE_TABLE);

function decode(expr) {
  let answer = [];
  let arr = expr.split('');
  let dividedArr = [];
  for (let i = 0; i < arr.length; i = i + 10) {
    dividedArr.push([...(`${arr[i]}` + `${arr[i+1]}` + `${arr[i+2]}` + `${arr[i+3]}` + `${arr[i+4]}` + `${arr[i+5]}` + `${arr[i+6]}` + `${arr[i+7]}` + `${arr[i+8]}` + `${arr[i+9]}`)])
    
  }

  for (let letter of dividedArr) {
    for (let i = 0; i < letter.length; i++) {
      letter.splice(i, 2, (`${letter[i]}${letter[i+1]}`))
    }
    for (let i = 0; i < letter.length; i++) {
      if (letter[i] === '10') {
        letter.splice(i, 1, '.')
      } else if (letter[i] === '11') {
        letter.splice(i, 1, '-')
      } else if (letter[i] === '**') {
        letter.splice(i, 5, 'probel')
      } else if (letter[i] === '00') {
        delete letter[i]
      }
    }
  }
  
  for (let i = 0; i < dividedArr.length; i++) {
    dividedArr.splice(i, 1, dividedArr[i].join(''))
  }

  for (let letter of dividedArr) {
    if (keys.includes(letter)) {
      answer.push(values[keys.indexOf(letter)])
    } else if (letter === 'probel') {
      answer.push(' ')
    }
  }
  return(answer.join(''))
}

module.exports = {
    decode
}