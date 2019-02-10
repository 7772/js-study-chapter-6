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

countSeconds(3);