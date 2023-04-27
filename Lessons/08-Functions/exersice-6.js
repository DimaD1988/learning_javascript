'use strict';
/*
Your task is to write a function, that decodes Morse code and returns a string.
Write your solution in `src/index.js`

---

**Input:** String. Its length is multiple of 10.
- Each letter from alphabet encoded with dots(`.`) and dashes(`-`). `10` stands for dot(`.`), `11` stands for dash(`-`).
- Each encoded **letter's length is 10**.
- If the length of the encoded letter is **less then 10**, it `left padded` with `0`.
- `Space` in string is `**********`.
**Output:** String (decoded)
**Example:** `me` -> `m === -- === 0000001111`, `e === . === 0000000010` -> `00000011110000000010`
// */
/*
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
  const key = Object.keys(MORSE_TABLE);
  const value = Object.values(MORSE_TABLE);
  let str = '';
  for (let i = 0; i < expr.length; i += 10) {
    let letter = '';
    if (expr[i] !== `*`) {
      for (let y = 0; y < 10; y += 2) {
        expr[i + y] === '1' && expr[i + y + 1] === '0' && (letter += `.`);
        expr[i + y] === '1' && expr[i + y + 1] === '1' && (letter += `-`);
      }
      str += value[key.indexOf(letter)];
    } else {
      str += ' ';
    }
  }
  console.log(str);
  return str;
}

decode(
  '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'
);
// /*

decode(
  '0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010'
);
// /*
  const result = 'hello world';
  const result = 'rolling scope school';
*/
