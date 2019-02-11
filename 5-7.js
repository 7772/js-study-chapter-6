/**
 * 
 * Closure
 * 
 * p.157
 * 
 * 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수를 Closure(폐쇄) 라고 합니다.
 * '자유 변수에 엮여있는 함수' 라고 의역할 수 있습니다.
 */


function outerFunc() {
  var x = 10;
  var innerFunc = function() {
    console.log(x);
  };
  
  return innerFunc;
}

// outerFunc 가 실행되면 outerFunc 의 실행컨텍스트가 생성됩니다.
// 이후 7번 라인의 innerFunc 가 리턴되면서, outerFunc 의 실행컨텍스트는 종료됩니다.
var inner = outerFunc();

// inner 변수는 내부함수인 innerFunc 이고, 15번 라인에서 실행과 동시에 실행컨텍스트가 생성됩니다.
inner();

// 이후, 이미 실행이 종료된 outerFunc 의 내부변수인 x 를 출력합니다.
// innerFunc 의 [[scope]] 는 다음과 같습니다.

// 2. innerFunc 의 변수객체
// 1. outerFunc 변수객체
// 0. 전역객체

console.dir(inner);
/** [[scope]] 객체에는 innerFunc 변수객체가 없습니다. (책과 다른 부분입니다.) */
