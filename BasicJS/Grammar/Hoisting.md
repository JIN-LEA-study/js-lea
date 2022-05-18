## 호이스팅 Hoisting

함수가 실행되기 전에 안에 있는 변수들을 범위의 최 상단으로 끌어올리는 것.
호이스팅시 변수의 선언과 초기화(undefined)를 같이 시켜버리고 값 할당은 나중에 함

```js
console.log(a); //a가 선언되기 전 a를 사용
var a = 1;
console.log(a); // undefined, 1
```

```js
console.log(a);
a = 1;
var a; //선언을 할당 뒤에 함
console.log(a); //undefined, 1
```

## 전역변수

블락 {} 밖에서 선언을 한 어디서든 쓰일 수 있은 변수

```js
// js는 전역변수와 지역변수의 개념이 확실하지 않음
```

## 지역변수

블락 {} 안에서 선언된 변수, 블락 안에서만 사용할 수 있음

```js
function foo() {
  var b = 1; //foo()안에서만 사용 가능
}
console.log(b); //error
```

## var

```js
for (var i = 1; i < 6; i++) {
  console.log(i);
}
console.log(i); //함수만 지역변수, 나머지는 다 전역변수
```

```js
// 변수의 이름은 절대로 중복되면 안되는데 JS는 I don't care ~ !
var a = 1;
console.log(a); //1
var a = 2;
console.log(a); //2
```

## let

```js
let a = 1;
console.log(a);
let a = 2;
console.log(a);

//a가 이미 선언되어졌기 때문에 불가
```

## TDZ Temporal Death Zone

```js
console.log(a); // cannot access 'a' before initialization
let a = 1;
console.log(a);
```
