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

## 전역변수

```js
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
