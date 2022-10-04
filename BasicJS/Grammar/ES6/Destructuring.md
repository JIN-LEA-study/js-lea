### Destructuring

```js
let arr = [2, 3, 4];
let [a, b, c] = [2, 3, 4];

//defalut 변수값을 지정할 수 있다.
let [a, b, c = 10] = [2, 3];

// 선언만 하고 할당을 하지 않은 경우엔 undefined
```

```js
let obj = { name: "lea", age: 31 };

let name = obj.name;
let age = obj.age;

var { name, age } = { name: "lea", age: 31 };
```

```js
let name = "lea";
let age = 31;
let obj = { name: name, age: age };
// {name: 'lea', age: 31}
```

```js
let obj = { name: "lea", age: 31 };

function 함수({ name, age }) {
  console.log(name, age); //'lea', 31
}

함수({ name: "lea", age: 31 });
```
