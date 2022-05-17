## 연산자 Operator

연산이 대상이 되는 피연산자와 연산자를 '부호로 표현'하는 연산자

= 할당 연산자, == 비교 연산자, + 산술 연산자, & 비트 연산자, && 논리 연산자 등

## 동등 연산자

```js

// 동등, 서로 같은지 느슨하게 검사
==
// 부등, 서로 다른지 느슨하게 검사
!=
// 일치, 서로 같은지 엄격하게 검사 (두 피연사의 값과 타입이 모두 true)
===
// 불일치, 서로 다른지 엄격하게 검사
!==
```

## 산술 연산자

```js
// 증가 연산자 ++

let count = 0;
count = count + 1;

console.log(count); //1

let count = 0;
count++;

console.log(count); //1
```

```js
// 감소연산자 --

let count = 0;
count--;
count--;
count--;
count--;
count--;

console.log(count); //-5
```

## 논리연산자 (굉장히 중요, 실무에서 많이 쓰임)

```js
//논리 AND 둘 다 참일 때 true, 그 외에는 false
&&

//논리 OR
||

// 논리 Not
!

```

## 논리연산자 && (AND) => 그리고

```js
// 둘 다 참일 때 true
// 하나라도 false가 있으면 false

var a1 = true && true; // t && t returns true
var a2 = true && false; // t && t returns false
var a3 = false && true; // f && t returns false // 처음 false가 나오면 둘다 볼 필요없이 false
var a4 = false && 3 == 4; // f && f returns flase
var a5 = "Cat" && "Dog"; // t && t returns Dog
var a6 = false && "Cat"; // f && t returns false
var a7 = "Cat" && false; // t && f returns false
```

## 논리연산자 || (OR) => 또는

```js
// 하나라도 true면 true
var a1 = true || true; // t || t returns true
var a2 = false || true; // t || t returns true
var a3 = true || false; // f || t returns true
var a4 = false || 3 == 4; // f || f returns flase
var a5 = "Cat" || "Dog"; // t || t returns Cat
var a6 = false || "Cat"; // f || t returns Cat
var a7 = "Cat" || false; // t || f returns Cat
```

## 부정연산자 ! (NOT)

```js
// 값을 뒤집는다고 생각하면 됨
var not1 = !true; //false
var not2 = !false; //true
var not3 = !"Cat"; //false
```

```js
//부정연산자를 두번 사용하면 불리언으로 형변
var not4 = !!"Cat"; //true
```

## 삼항연산자 (헷갈릴 수 있으니 주의)

```js
const 삼항연산자 = 조건부 ? "참일 때" : "거짓일 때";
```

```js
const temp = 1 === "1" ? "참일 때" : "거짓일 때";

let temp2;

if (1 === "1") {
  temp2 = "참일 때";
} else {
  temp2 = "거짓일 떄";
}
```

```js
var status = age >= 18 ? "성인" : "미성년자";
```
