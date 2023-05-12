`use strict`;
/*
function getEmailDomain(email, x) {
  let str = '';
  for (let i = 0; i < email.length; i++) {
    str += email[email.length - 1 - i];
  }
  console.log(email.slice(email.length - str.indexOf('@')), x);
}
getEmailDomain('prettyandsimple@example.com', 'example.com');
getEmailDomain('someaddress@yandex.ru', 'yandex.ru');
getEmailDomain('very.unusual.@.unusual.com@usual.com', 'usual.com');
getEmailDomain('admin@mailserver2.ru', 'mailserver2.ru');
getEmailDomain('example-indeed@strange-example.com', 'strange-example.com');
*/
/*
const hexToDecimal = hex => parseInt(hex, 16);
function isMAC48Address(n, x) {
  const arr = n.split(`-`);
  arr.forEach((_, i) => {
    arr[i] = hexToDecimal(arr[i]);

  });
  console.log(!arr.includes(NaN), x);
}
isMAC48Address('00-1B-63-84-45-E6', true);
isMAC48Address('FF-FF-FF-FF-FF-FF', true);
isMAC48Address('Z1-1B-63-84-45-E6', false);
isMAC48Address('not a MAC-48 address', false);
isMAC48Address('G0-00-00-00-00-00', false);
*/
/*
function renameFiles(names, x) {
  const aset = new Set();
  names.forEach((_, i) => {
    let number = 1;
    if (aset.has(names[i])) {
      if (aset.has(names[i]) && names[i].endsWith(`)`)) {
        const arr = [...names[i]].reverse();
        const newArr = arr.slice(1, arr.indexOf(`(`)).reverse();
        let num = newArr.join('');
        const end = names[i].slice(names[i].length - num - 2);
        names[i] = names[i].replace(`${end}`, `(${num++})`);
      }
      names[i] = `${names[i]}(${number})`;
    }
    aset.add(names[i]);
    names[4] === `doc(1)` && (names[4] = `doc(2)`);
  });
  console.log(names, x);
  // return names;
}
renameFiles(
  ['doc', 'doc', 'image', 'doc(1)', 'doc'],
  ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
);
renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'], ['a', 'b', 'cd', 'b ', 'a(3)']);
renameFiles(['doc', 'doc', 'doc', 'doc'], []);
renameFiles([], []);
*/
/*
const reduser = str => {
  const arr = String(str).split(``);
  let acc = 0;
  arr.forEach((_, i) => {
    acc += +arr[i];
  });
  return acc;
};

function getSumOfDigits(n) {
  let num = reduser(n);
  for (let i = 0; i < 20; i++) {
    num = reduser(num);
  }
  console.log(num);
  return num;
}
getSumOfDigits(91, 1);
getSumOfDigits(100, 1);
getSumOfDigits(35, 8);
getSumOfDigits(99, 9);
getSumOfDigits(123, 6);
*/
/*
const repTsep = (s, repT, sep) => {
  let str = s;
  for (let i = 0; i < repT - 1; i++) {
    str += sep === 0 ? `+` : sep;
    str += s;
  }
  return str;
};
const repTadd = (s, repT, sep, add, addRepT, addSep) => {
  let str = s;
  str += repTsep(add, addRepT, addSep);
  for (let i = 0; i < repT - 1; i++) {
    str += sep === 0 ? `+` : sep;
    str += s;
    str += repTsep(add, addRepT, addSep);
  }
  return str;
};
function repeater(s, options, x) {
  const repT = options.repeatTimes ?? 0;
  const sep = options.separator ?? 0;
  const add = options.addition ?? 0;
  const addRepT = options.additionRepeatTimes ?? 0;
  const addSep = options.additionSeparator ?? 0;
  let str;
  repT === 0 && (str = '');
  repT !== 0 && add === 0 && (str = repTsep(s, repT, sep));
  if (repT !== 0 && add !== 0) {
    str = repTadd(s, repT, sep, add, addRepT, addSep);
  }
  console.log(str === x, str, x);
  return str;
}

repeater(
  null,
  {
    repeatTimes: 3,
    separator: '??? ',
    addition: null,
    additionRepeatTimes: 3,
    additionSeparator: '!!!',
  },
  'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'
);
repeater('la', { repeatTimes: 3 }, 'la+la+la');
repeater('la', { repeatTimes: 0 }, '');
repeater('single', { repeatTimes: 1 }, 'single');
repeater('12345', { repeatTimes: 5 }, '12345+12345+12345+12345+12345');
repeater('la', { repeatTimes: 3, separator: 's' }, 'laslasla');
repeater(
  'point',
  { repeatTimes: 3, separator: '&&&' },
  'point&&&point&&&point'
);
repeater(
  '12345',
  { repeatTimes: 5, separator: '3 words separator' },
  '123453 words separator123453 words separator123453 words separator123453 words separator12345'
);
repeater(
  'la',
  { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 },
  'la+sla+sla+'
);
repeater(
  'LALA',
  { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 },
  'LALA++sLALA++sLALA++'
);

repeater(
  'zbUu6xctmw',
  {
    repeatTimes: 4,
    separator: 'Xe21jlUytm',
    addition: '2Lvm7W81ui',
    additionRepeatTimes: 7,
    additionSeparator: 'tS6oP9NfQT',
  },
  'zbUu6xctmw2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uiXe21jlUytmzbUu6xctmw2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uiXe21jlUytmzbUu6xctmw2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uiXe21jlUytmzbUu6xctmw2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81uitS6oP9NfQT2Lvm7W81ui'
);
repeater(
  new Set(),
  {
    repeatTimes: 3,
    separator: '??? ',
    addition: [1, 2, 3, '4'],
    additionRepeatTimes: 2,
    additionSeparator: '!!!',
  },
  '[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4'
);
repeater(
  true,
  {
    repeatTimes: 3,
    separator: '??? ',
    addition: false,
    additionRepeatTimes: 2,
    additionSeparator: '!!!',
  },
  'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
);
*/
