'use strict';
/*
function check(str, bracketsConfig) {
  let bool = 1;
  while (bool !== 0) {
    bool = 0;
    str.includes(`()`) && (str = str.replace(`()`, ``)) && (bool = 1);
    str.includes(`{}`) && (str = str.replace(`{}`, ``)) && (bool = 1);
    str.includes(`[]`) && (str = str.replace(`[]`, ``)) && (bool = 1);
    str.includes(`||`) && (str = str.replace(`||`, ``)) && (bool = 1);
    str.includes(`12`) && (str = str.replace(`12`, ``)) && (bool = 1);
    str.includes(`34`) && (str = str.replace(`34`, ``)) && (bool = 1);
    str.includes(`56`) && (str = str.replace(`56`, ``)) && (bool = 1);
    str.includes(`77`) && (str = str.replace(`77`, ``)) && (bool = 1);
    str.includes(`88`) && (str = str.replace(`88`, ``)) && (bool = 1);
  }
  str.length === 0 ? console.log(`true`) : console.log(`false`);
  console.log(str);
}

check('()'); // true
check('((()))()'); // true
check('())('); // false
check('([{}])'); // true
check('[(])'); // false
check('[]()'); // true
check('[]()('); // false
check('||'); // true
check('|()|'); // true
check('|(|)'); // false
check('|()|(||)||'); // true
check('111115611111111222288888822225577877778775555666677777777776622222'); // true
check(
  '5555512575557777777555566667888888667661133833448441111222233333444442266666'
); // false
check(
  '8888877878887777777888888887777777887887788788887887777777788888888887788888'
); // false
check(
  '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222'
); // true
check('[]][[]'); // false

check(
  '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()'
); // false
check(
  '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())'
); // true
check(
  '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))'
); // true
*/
