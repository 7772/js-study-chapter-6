/**
 * p.164
 * 
 * 캡슐화
 */

var getCompletedStr = (function() {
  var buffArr = [
    'I am',
    '',
    '. I live in ',
    '',
  ];

  return function(name, city, age) {
    buffArr[1] = name;
    buffArr[3] = city;
    buffArr[5] = age;

    return buffArr.join('');
  }
})();

var str = getCompletedStr('olulo', 'seoul', 1);

console.log(str);