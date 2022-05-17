## 스코프 (Scope) : 변수 유효 범위

내부에서 외부론느 접근 가능, 외부에서 내부로는 접근 불가능

```js
var varVal = "함수단위";
let constVal = "블럭단위";
const constVal = "블럭단위";

function test() {
  console.log(varVal); //'함수단위'
  var num = 123;
  return num;
}

test();
```

## 전역변수 (함수 스코프)

```js
// 함수 스코프는 어디서나 접근이 가능하기 때문에 위험하다.
var globalVal = "전역변수";

function outerFunc() {
  console.log(globalVal); //전역변수

  function innerFunc() {
    console.log(globalVal); //전역변수

    innerFunc();
    return num;
  }
}

outerFunc();
```

## const, let (블럭 스코프)

```js
{
  let a = "a";
}

console.log(a); //a에 접근 불가
```

```js
if (true) {
  var b = "b";
  let a = "a";
}

console.log(b); //b 어디서나 접근이 가능하기 때문에 위험하다.
console.log(a); //a is not defined
```
