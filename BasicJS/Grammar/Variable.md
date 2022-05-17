## 변수 Variable

다양한 값을 담을 수 있는 박스와 같은 컨테이너
값이 저장된 메모리 주소와 이름을 연결

```js
// 선언
var, let, const
let lang;
```

```js
// 할당
lang = "JavaScript";
```

```js
// 선언과 동시에 할당 (이 방식을 권유)
let lang = "JavaScript"; // 선언과 동시에 할당
```

```js
// 재할당
lang = "JS";
```

```js
// 복합할당 연산자

let count = 0;

// 보기 좋고 간단하겠지만 실수를 유발할 가능성이 더 높다.
count = count += 1;

// 잘 읽히고 예상하기 쉬움
count = count + 1;
```
