### How TypeScript Works

- 타입스크립트는 어떻게 개발자를 보호해주는가? 자바스크립트가 코드로 변환하기 전에 코드를 확인한 다음 실수가 일어나지 않도록 확인해준다.

```tsx
const lea = {
  nickname: "lea",
};

lea.hello(); //err
```

```tsx
[1, 2, 3, 4] + false; //err
```

```tsx
function divide(a, b) {
  return a / b;
}

divide("hello"); //err
```

```tsx
const player = {
  age: 12,
};

player.age = false; //err
```

### Implicit Types vs Explicit Types

- 타입스크립트는 데이터와 변수의 타입을 명시적으로 정의할 수도 있고, 그냥 자바스크립트처럼 변수만 생성해줘도 된다
- 타입스크립트가 타입을 추론해준다.

```tsx
let a = "hello"; //string
a = "bye"; //string
a = 1; //err

let b: boolean = "x"; //err
let b: boolean = true;

let c: number[] = [1, 2, 3];
c.push("1"); //err
```

- 명시적 표현은 최소한으로 하는 것이 좋다. 키보드 치는 시간을 줄이는게 좋다.

```tsx
const player = {
  name: "lea",
};
player.name = 1; //err
player.hello(); //err
player.name = "lulu";
```
