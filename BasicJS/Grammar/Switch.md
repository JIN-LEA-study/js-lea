## Switch

보통 값이 하나로 떨어지는 경우 사용

```js
// if문
let menu = 1;

if (menu == 1) {
  console.log("물건 사기");
} else if (menu == 2) {
  console.log("잔고 확인");
} else if (menu == 3) {
  console.log("히스토리 확인");
} else {
  console.log("홈으로 돌아가기");
}
```

```js
let munu = 1;

switch (menu) {
  case 1:
    console.log("물건 사기");
    break;
  case 2:
    console.log("잔고 확인");
    break;
  case 3:
    console.log("히스토리 확인");
  default:
    console.log("홈으로 돌아가기");
}
```
