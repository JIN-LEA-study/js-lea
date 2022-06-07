## NodeJS

- 서버 기본 세팅(express 라이브러리)

```js
const express = require("express");
const app = express();

app.listen();
```

- 외부와 네트워크가 통신하기 위한 번호

```js
// 서버를 띄울 포트번호, 띄운 후 실행할 코드
app.listen(8080, function () {
  console.log("listening on 8080");
});
```

- 내 컴퓨터에서 8080 포트로 접속하고 싶을 때

```js
node sever.js
```

```js
localhost: 8080;
```

- 누군가 /lea 페이지로 방문하면, lea 관련된 안내문을 띄어주자

```js
app.get("/lea", function (req, res) {
  res.send("하이, 레아입니다");
});
```

```js
res.sendFile(__dirname + "파일경로");
```

- 콜백함수(함수 안에 함수) : 순차적으로 실행하고 싶을 때 사용

- <form> 태그 기능개발

```js
<form action="/add" method="POST">
```

- 어떤 사람이 /add 경로로 POST 요청을 하면 ??를 해주세요.

```js
app.post("경로", function (요청, 응답) {
  응답.send("전송완료");
});
```

- form(input)에 적는 정보들은 모두 req에 저장되어져 있음
- POST 요청으로 서버에 데이터를 전송하고 싶으면 1. body-parser 라이브러리 설치 2. form 데이터의 경우 input에 name 쓰기 (속성)

```js
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
```

```js
// 2021년 이후 설치한 프로젝트들은 body-parser 라이브러리가 express에 기본으로 포함 되기 때문에 따로 설치 X
app.use(express.urlencoded({ extended: true }));
```

### Version

- bootstrap 4.6v

### install

- npm init
- npm i express
- npm i -g nodemon
- npm i body-parser
