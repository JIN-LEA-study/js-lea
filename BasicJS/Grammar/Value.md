## 값(Value)

더 이상 나눌 수 없는 값
더 이상 평가될 수 없는 하나의 식으로 '자료형을 간단한 이루는 값'

```js
// 좌항에는 문자열의 '0' == 우항에는 숫자의 0
// 동등 연사자를 사용할 때 엄격한 비교 => ===. 느슨한 비교 => ==

if (num == 0) {
  console.log("num은 0입니다"); //num은 0입니다
} else {
  console.log("num은 0이 아닙니다"); //num은 0이 아닙니다
}
```

## 자료형 (Data Type)

```js
// typeof : 어떤 데이터 타입을 가지고 있는지 알 수 있게 해줌

undefined: typeof instance === "undefined";
Boolean: typeof instance === "boolean";
Number: typeof instance === "number";
String: typeof instance === "string";
```

```js

null: typeof instance === 'object';

```

## 객체 Object

```js
const obj = {
  name: "lea",
};

const arr = ["lea"];

function func() {
  return "lea";
}

console.log(typeof obj); //object
console.log(typeof arr); //object
console.log(typeof func); //functiom
```
