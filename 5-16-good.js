/**
 * p.167
 * 
 * 5.4.3.3 루프 안에서 클로저를 활용할 때는 주의하자
 * 
 */

function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
};

// 위 코드는 지역변수 i 로만 작업을 하기때문에 setTimeout 내부의 함수가 실행될때에는
// 이미 지역변수 i 는 4 가 되어있다.

// function countSeconds(howMany) {
//   for (var i = 1; i <= howMany; i++) {
//     // 실행 컨텍스트가 생성된다.
//     (function(currentI) {
//       setTimeout(function() {
//         console.log(currentI);
//       }, currentI * 1000);
//     })(i);
//   }
// }

countSeconds(3);

// 반면, 클로저를 사용하면 내부함수 입장에서 자신을 호출한 부모함수의 지역변수에 접근하게 됨으로써,
// 내부함수(21번 줄) 는 [[scope]] 체인에 저장된 i 값 (1,2,3) 에 모두 접근할 수 있다.