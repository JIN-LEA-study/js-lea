### Types of TS part One

```tsx
let a: number = 1;
let b: string = "il";
let c: boolean = true;
let a: number[] = [1, 2, 3];
```

```tsx
const player = {
  name: "lea",
};
player.name = 1; //err

const player: {
  name: string;
  age?: number;
} = {
  name: "lea",
};

if (player.age < 10) {
} //err

if (palyer.age && player.age < 10) {
}
```

- player.age가 undefined 일 수도 있기 때문에 err 발생한다.

```tsx
type Player = {
	name: string,
	age?: number
}

const lea: Player {
	name: "lea"
}

const lulu: Player {
	name: "lulu",
	age: 6,
}
```

```tsx
const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1); //err
```

- Tuple은 array를 생성할 수 있게 하는데, 최소한의 길이를 가져야 하고 특정 위치에 특정 타입이 있어야 한다.
- 항상 정해진 갯수의 요소를 가져야 하는 array를 지정할 수 있다.

```tsx
["lea", 12, false];
const player: [string, number, boolean] = []; //err
const player: readonly [string, number, boolean] = ["lea", 12, false];
player[0] = 1; //err
player[0] = "hi";
```

```tsx
let a: undefined = undefined;
let b: null = null;
```

- **?** (물음표)는 단축어라고 생각하면 된다. undefined를 정의해줌

```tsx
type Player = {
  age?: number;
};
```

- **any** : typescript로부터 빠져나오고 싶을 때 사용, typescript의 보호 장치로부터 벗어나고 싶을 때. anything.
- **unknown** : 변수의 타입을 미리 알지 못할 때 사용한다.

```tsx
let a: unknown;
if(typeof a === 'number') {
	let b = a + 1
}
if(typeof a === 'string) {
	let b = a.toUpperCase();
}
```

- **void** : 아무것도 return 하지 않는 함수를 대상으로 사용한다. 보통 void는 따로 지정해줄 필요가 없다. (TypeScript가 자동으로 인식)

```tsx
function hello() {
  console.log("x");
}
```

```tsx
const a = hello();
a.toUpperCase(); //err
```

- **never** : 함수가 절대 return을 하지 않을 때 발생한다.

```tsx
function hello(): never {
  return "X"; //err
  throw new Error("xxx");
}
```

```tsx
function hello(name: string | number): never {
	it(typeof name === "string") {
		name // string
	} else if (typeof name === "number") {
		name // number
	} else {
		name //never
	}
}
```
