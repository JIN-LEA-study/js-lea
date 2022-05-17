## 함수 (Function)

특정 일을 처리하는 코드 묶음
input, output이 존재

```js
function 감자튀김만들기() {
  감자, 조리, 요리사;
  return 감자;
}
```

## 함수 실행 (함수 호출) : 정의한 함수를 실행

```js
감자튀김만들기(); //함수호출 (실행)
const 감자튀김 = 감자튀김만들기(); //실행한 뒤, 호출 결과를 변수에 담음(js식)
```

```js
function func() {
  if (10 > 0) {
    return 'Hello
  }
}
console.log(func()); // Hello
```

## 함수 선언문

```js
// JS는 return 값이 없으면 undefined (Void함수)
function func(num) {
  if (10 > num) {
    return "Hello";
  }
}
console.log(fun()); // undefined
```

```js
//매개변수에 값을 넣어보자
function func(num) {
  if (10 > num) {
    return "Hello";
  }
}
console.log(fun(1)); // Hello
```

```js
//함수 선언문
function sum(num1, num2) {
  return num1 + num2;
}

function multiple(num1, num2) {
  return num1 * num2;
}

//함수 호출
console.log(sum(1, 2)); //3
console.log(multiple(1, 2)); // 2
```

```js
//매개변수를 활용할 때는 매개변수의 순서를 지켜야 한다.
function sum(num1, num2, num3, num4) {
  return num1 + num4;
}

console.log(sum(1, 4)); //NaN
```
