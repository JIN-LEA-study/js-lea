## 배열 Array

변수 이름 하나로 여러개의 데이터 저장이 가능

```js
let fruit = ["banana", "apple", "grape", "mango"];
console.log(fruit);
console.log(fruit[0]); //banana
```

```js
//값을 바꾸고 싶을 땐 인덱스 변호로 접근
fruit[0] = "cherry";
console.log(fruit); //["cherry", "apple" ...]
```

## pop()

마지막에 있는 아이템을 뺌

```js
fruit.pop();
comsole.log(fruit); //["banana", "apple", "grape"];
```

## push()

마지막에 아이템이 들어감

```js
fruit.push("painapple");
console.log(fruit);
["banana", "apple", "grape", "painapple"];
```

## includes()

배열 안에 아이템을 포함하고 있는지 확인

```js
console.log(fruit.includes("apple")); //true
console.log(fruit.includes("pear")); //false
```

## indexOf()

인덱스 번호 확인하고 싶을 때

```js
console.log(fruit.indexOf("apple")); //1
```

## slice() : 기존의 배열을 건들이지 않고 새로운 배열을 만들어냄

인덱스 배열을 잘아냄. (시작점, 끝점-끝점 미포함)

```js
//["cherry", "apple", "tomato", "painapple"];
console.log(fruit.slice(1)); //["apple", "tomato", "piaeapple"];
console.log(fruit.slice(1, 3)); //["apple", "tomato"];
```

```js
//함수사용해서 담아줌
//["cherry", "apple", "tomato", "painapple"];
let extrafruit = fruit.slice(1, 3);
console.log(extrafruit); //["apple", "tomato"];
console.log("original fruit", fruit); //["cherry", "apple", "tomato", "painapple"];
```

## splice() : 기존의 배열에서 배열이 잘림

인덱스 배열을 잘아냄. (시작점, 갯수)
시작점으로부터 몇개의 아이템을 제거하고 싶을 때

```js
//["cherry", "apple", "tomato", "painapple"];
console.log(fruit.splice(2, 1)); //["cherry", "apple", "painapple"]; 잘린 후의 값이 나옴
console.log(fruit.splice(2, 2)); //["cherry", "apple"]; 잘린 후의 값이 나옴
```
