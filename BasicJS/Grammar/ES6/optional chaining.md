### optional chaining

```js
let user = {
  name: "lea",
  age: { value: 20 },
};

console.log(user.age); //31

//데이터가 없다면 (null, undefined) undefined를 남겨준다
console.log(user?.age);
console.log(user.age?.value); //20
```

- 중첩된 object 자료에서 자료를 뽑을 때 reference 에러없이 안전하게 뽑을 수 있다.

```js
// ?? 왼쪽이 undifined, null 이면 오른쪽을 보여줘
console.log(undefined ?? "띠용");
```

```js
let user;
console.log(user ?? "로딩중");
```

- 데이터 렌더링이 늦어질 때 사용하면 유용
