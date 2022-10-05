### Promise

```js
// 성공/실패 여부를 판정
let 프로미스 = new Promise(function (resolve, reject) {
  //성공하면 then 실행
  resolve();
  //실패 catch 실행
  reject();
});

// 프로미스가 성공일 경우 실행할 코드
프로미스
  .then(function () {})
  .then(function () {})
  .then(function () {});
```

```js
//프로미스가 실패 했을 경우 실행할 코드
프로미스.catch(function () {});
```

```js
//프로미스가 실패or성공 했을 경우 실행할 코드
프로미스.finally(function () {});
```

```js
let promise = new Promise(function (resolve, reject) {
  let Plus = 1 + 1;
  resolve(Plus);
});

// resolve, reject 파라미터 값을 then으로 전달
promise
  .then(function (결과) {
    console.log(결과); //2
  })
  .catch(function () {
    console.log("실패");
  });
```

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 1000);
});

promise
  .then(function () {
    console.log("성공"); //(1초 후에) 성공
  })
  .catch(function () {
    console.log("실패");
  });
```

- Promise는 특별한 object 이다.
- <resolved> : 성공이 된 상태, <pending> : 성공/실패 판단 전, <rejected> :실패한 상태
- **비동기적 처리가 가능하게 바꿔주는 문법이 아님**. 비동기 처리 함수를 사용은 가능하지만 비동기 문법과는 전혀 상관없다.

### fetch()

- promise를 리턴한다.

```js
fetch().then().catch();
```
