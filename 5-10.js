/**
 * 
 * p.161
 * 
 * 이미 존재하는 객체를 이용하고, 사용자가 원하는 인자를 더 넣어 함수를 호출하는 방법
 */


// -------------------------------------------------------------------------------------------------------

// 5-9.js

function HelloFunc(func) {
  this.greeting = 'hello';
}

HelloFunc.prototype.call = function(func) {
  func ? func(this.greeting) : this.func(this.greeting);
};

var userFunc = function(greeting) {
  console.log(greeting);
};

var objHello = new HelloFunc();

// -------------------------------------------------------------------------------------------------------


function saySomething(obj, methodName, name) {
  return (function(greeting) {
    return obj([methodName](greeting, name));
  });
}

function newObj(obj, name) {
  obj.func = saySomething(this, 'who', name);
  return obj;
}

newObj.prototype.who = function(greeting, name) {
  console.log(greeting + ' ' + (name || 'everyone'));
};

var obj1 = new newObj(objHello, 'olulo');

obj1.func();