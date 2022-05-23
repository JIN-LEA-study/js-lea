## Promise

비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값

```js
console.log(promise); // [Function : Promise]
// 생성자를 통해서 프로미스 객체를 만들 수 있음
// 생성자의 인자를 executor(resolve, reject)라는 함수를 이용
// 생성자를 통해 프로미스 객체를 만드는 순간 pending(대기)상태
// executor 함수 인자 중 하나인 resolve 함수를 실행하면 fulfilled (이행)상태가 됨
// executor 함수 인자 중 하나인 reject를 실행하면 rdjected (거부)상태가 됨

new Promise((resolve, reject) => {
  //pending
  //...비동기적인 처리
  resolve(); // 성공적으로 처리 됐을 경우 fulfilled
  reject(); // 이행이 제대로 되지 않았을 경우 rejected
});
```

```js
//P라는 프로미스 객체를 1000ms 후에 fulfilled 됨
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000); //1초 후에 실행되는 함수
});
```

```js
// p라는 프로미스 객체가 fulfilled 되는 시점에서 p.then 안에 설정한 callback 함수가 실행
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000); //1초 후에 실행되는 함수
});

p.then(() => {
  console.log("1000ms 후에 fulfilled 됩니다");
});
```

```js
// then을 설정하는 시점을 정확히하고,
// 함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해 프로미스 객체를 생성하면서 리턴하는 함수 (p) 를 만들어 함수(p) 실행과 동시에 the을 설정
function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

p().then(() => {
  console.log("1000ms 후에 fulilled 됩니다.");
});
```
