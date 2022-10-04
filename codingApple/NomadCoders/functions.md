### Call signatures

- 함수의 타입과 함수의 반환 타입이 아니라 인자(Arguments)의 타입이랑 함수의 반환 타입을 알려준다.

```tsx
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
const add: Add = (a, b) => {
  a + b;
}; //err
```

- 프로그램을 디자인하면서 타입을 먼저 생각하고 코드를 구현해야 한다.

### Overloading

- 실제로 많은 오버로딩된 함수를 직접 작성하지는 않는다.
- 어떻게 생겼는지 아는 것은 매우 중요하다.
- **함수가 여러개의 call signatures를 가지고 있을 때 발생시킨다.**

```tsx
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => a + b; //err
const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
}; //좋은 코드가 아님
```

```tsx
Router.push({
  path: "/home",
  state: 1,
}).push("/home"); //err
```

- 패키지나 라이브러리를 디자인 할 때 많은 사람들이 사용한다.

```tsx
type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};
```

```tsx
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c) => {
  return a + b; //err
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
```

### Polymorphism

- poly : 많은, 다수 / morphos : 형태, 구조
- 여러가지 다른 구조 / 형태

#### Generic

- generic이란 타입의 placeholder 같은 것이다
- call signature를 작성할 때, 확실한 타입을 모를 때 generic을 사용한다.
- generic을 사용하는 방법은 타입스크립트에게 generic을 사용하고 싶다고 먼저 알려줘야 한다.

```tsx
// bad ex

type SuperPrint = {
    (arr: number[]): void;
    (arr: boolean[]): void;
    (arr: string[]): void;
    (arr: (number|boolean)[]): void;

}

const superPrint: SuperPrint = (arr) => {
  arr.forEach(i -> console.log(i))
}
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1,2, true, false]);
```

```tsx
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];

const d = superPrint([1, 2, true, false, "hello"]); // superPrint: <string | number | boolean> (arr (string | number | boolean)[] => void)
```

### Generics Recap

- generic은 개발자가 요구한 대로 signature를 생성해줄 수 있는 도구라고 생각하면 된다.

```tsx
SuperPrint = <T,>(a: T[]) => T;
const superPrint: SuperPrint = (a) => a[0];
const a = superPrint([1, 2, 3, 4]);
```

```tsx
SuperPrint = <T, M>(a: T[], b: M) => T;
const superPrint: SuperPrint = (a) => a[0];
const a = superPrint([1, 2, 3, 4], "lea");
```
