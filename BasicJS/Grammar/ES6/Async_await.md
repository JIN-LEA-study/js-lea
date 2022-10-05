### Async, await

```js
async function Plus() {
  1 + 1;
}

Plus().then(function () {
  console.log("성공"); //성공
});
```

```js
async function Plus() {
  return 1 + 1;
}

Plus().then(function (결과) {
  console.log(결과); //2
});
```

- Async 함수 앞에 붙여주면 끝. 함수 실행 후에 Promise 오브젝트가 남는다.(.then을 사용할 수 있다)
- 단점은 성공만 판정할 수 있다.

```js
async function Plus() {
  return Promise.reject("실패");
}

Plus().then(function (결과) {
  console.log(결과); //실패
});
```

- 강제로 실패를 만들어줄 수는 있음. Promise.reject();

```js
async function Plus() {
  let promise = new Promise(function (성공, 실패) {
    let deficultPlus = 1 + 1;
    성공();
  });

  // let 결과 = await Promise;
  // console.log(결과);

  try {
    //이걸해보고 에러나면
    let 결과 = await Promise;
    console.log(결과);
  } catch {
    //이걸 실행해주셈
    console.log("실패했네염");
  }
}
```

- Promise를 함수 안에서 직접 디자인 하고 싶다.
- await : promise가 해결될 때까지 기다려주셈(성공, 실패 판정), then 대신 사용 가능
