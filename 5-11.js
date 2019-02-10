/**
 * p.163
 * 
 * 함수의 캡슐화
 */

 var buffArr = [
   'I am',
   '',
   '. I live in ',
   '',
 ];

 function getCompletedStr(name, city, age) {
   buffArr[1] = name;
   buffArr[2] = city;
   buffArr[5] = age;

   // Array join function, https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   return buffArr.join('');        
 }

 var str = getCompletedStr('olulo', 'seoul', '1');
 console.log(str);

// p.164
// buffArr 은 전역변수라서, 외부에 노출되는 단점이 있다.