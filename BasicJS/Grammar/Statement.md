## 문(Statement)

특정 작업(어떤 개발을 하는 행위)을 위한 명령(코딩)으로 프로그래밍의 흐름을 제어

## 조건문

```js
if ((식, 값)) {
  // 문
}
if (식) {
  // 참일 때 실행
} else {
  // 거짓일 때 실행
}
```

```js
if (10 > 1) {
  return "10은 1보다 크다";
} else if (10 === 10) {
  return "";
} else {
  return "";
}
```

## 반복문 for문

```js

// 괄호 안의 코드가 어떠한 조건일 때 반복적으로 실행

for (식; 식; 식) {
  두번째 식의 결과가 참일 때 실행
}

```

```js
// 초기화(기본세팅) let i = 0
// 평가될 식 (if문과 유사하다고 보면 됨)이 true일 때마다 실행 (참 => 실행, 거짓 -> 다음으로);
// 반복될 때마다 매번 실행되는 평가식 i++
const array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  const element = array[i]; // 0,1,2
}
```

```js
const array = [1, 2, 3];
if (array.length === 3) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      console.log(array[i]); //1
    }
  }
}
```

### 반복문 while문

```js

while (식) {
  참일 때만 실행
}
```
