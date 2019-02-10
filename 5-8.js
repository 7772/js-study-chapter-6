/**
 * p.159
 * 
 * 성능문제
 *
 * 대부분의 클로저에서는 스코프 체인의 뒤쪽에 있는 객체에 자주 접근하므로,
 * 성능을 저하시키는 이유로 지목된다.
 * 따라서 영리하게 사용하는 것이 필요하다.
 */

function outerFunc(arg1, arg2) {
  var local = 1;

  function innerFunc(innerArg) {
    console.log( (arg1 + arg2) / (innerArg + local) );
  }

  return innerFunc;
}

var exam1 = outerFunc(4, 8);
exam1(3);
