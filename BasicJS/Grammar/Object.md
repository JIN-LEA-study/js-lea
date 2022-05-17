## 객체 Object

```js
// 나라는 사람을 프로그래밍 언어로 표현하자면?

const lea = {
  // key(property), 속성 : value (행동 메서드)
  name: "lea-kim",
  age: 31,
  gender: "female",
  introduce: function (love) {
    return "hello" + love + "lea";
  },
  hobby: ["youtube", "study"],
};

console.log(lea.name); //lea-kim
console.log(lea.introduce()); //hello i'm lea 함수를 실행해보고 싶을 땐 함수를 호출하듯이 메서드 호출
console.log(lea.introduce(love)); // hello love lea
```

```js
const lea = {
  name: {
    first: "lea",
    last: "kim",
  },
};

console.log(lea.name); // {first: 'lea', last: 'kim'}
console.log(lea.name.first); // lea
console.log(lea["name"]["first"]); // lea
console.log(lea.name.last); // kim
```
