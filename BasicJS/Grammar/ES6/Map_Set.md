### Map

- 자료간의 연간성을 표현하기 위해 사용 (자료간의 의존성)

```js
let person = new Map();
person.set("name", "lea"); // {"name" => "lea"}
person.set("age", 20); //{"age" => 20}
```

```js
person.get("age"); //20
person.size; // 데이터개수
```

```js
for let key of person.key() {
  console.log(key)
} // name, age
```

### Set

- 중복 자료를 허용하지 않는다.

```js
let 출석부 = ["lea", "lulu", "summer", "lulu"];
let 출석부2 = new Set(["lea", "lulu", "summer", "lulu"]); // {"lea", "lulu", "summer"}
```

- Array의 중복 자료를 제거 하고 싶을땐?

```js
let 출석부 = ["lea", "lulu", "summer", "dooho"];
let 출석부2 = new Set(["lea", "lulu", "summer", "dooho"]);

출석부 = [...출석부2]; //괄호 제거 ["lea", "lulu", "summer"]
```
