# NodeJS with codingApple

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

```
node sever.js
```

```
localhost:8080
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

- DM종류 관계형(SQL언어 사용)/ NoSQL(Object자료형 입출력 가능)

- MongoDB

```js
const MongoClient = require("mongodb").MongoClient;
```

- MongoDB 관련된 함수들은 전부 콜백함수에서 에러 처리가 가능

```js
// why err?
if (err) return console.log(err);
```

```js
var db;
db = client.db("todoapp"); //todoapp이라는 datebase에 연결해줘
db.collection("post").insertOne("저장할 데이터(Object)", function (에러, 결과) {
  console.log("저장완료");
});
```

- \_id를 넣어 id를 부여해주는 것을 권장 (id를 넣지 않으면 몽고DB가 알아서 id 강제부여)

```js
db.collection("post").insertOne(
  { name: "LEA", age: 31, _id: 100 },
  function (에러, 결과) {
    console.log("저장완료");
  }
);
```

- HTML 안에서 EJS 사용하는 방법

```HTML
<%= %>
```

- MongoDB에서 모든 데이터 가져올 때 사용하는 문법

```js
db.collection("post").find().toArray();
```

```ejs
    <h4>할 일 제목 : <%= posts[0].제목 %></h4>
    <p>할일 마감 날짜 : <%= posts[0].날짜 %></p>
    <h4>할 일 제목 : <%= posts[1].제목 %></h4>
    <p>할일 마감 날짜 : <%= posts[1].날짜 %></p>
```

- ejs 안에서 JS 사용하는 법

```ejs
<% for (let i = 0; i < 5; i++) { %>
      <h4>할 일 제목 : <% posts[0].제목 %></h4>
    <p>할일 마감 날짜 : <% posts[0].날짜 %></p>
<% } %>
```

## REST API

- API(Application Programming Interface) : 서버와 클라이언트간의 소통 방법
- HTTP 요청 시스템(GET, POST, PUT, DELETE)
- REST 원칙

```
1. Uniform interface (가장중요)
- 하나의 자료는 하나의 URL
- URL 하나를 알면 둘을 알 수 있어야 함
- 요청과 응답은 정보가 충분히 들어있어야 함
```

```
2. Client-Server 역할구분
- 브라우저는 요청말 할 뿐
- 서버는 응답만 할 뿐
```

```
3. Stateless
- 요청1, 요청2는 의존성이 없어야함
```

```
4. Casheable
- 서버에서 보내주는 정보들은 캐싱이 가능해야함
- 캐싱을 위한 버전 같은 것도 관리 잘해야함
```

```
5. Layered System
```

```
6. Code on Demand
```

## 좋은 REST API 이름짓기 원칙

```
www.example.com/products/66432
```

- URL을 명사로 작성추천
- 하위문서를 나타날 땐 /
- 파일확장자(.html) 쓰지말기
- 띄어쓰기는 대시(-) 이용
- 자료 하나당 하나의 URL

## notice

### Version

- bootstrap 4.6v
- mongodb@3.6.4

### install

- npm init
- npm i express
- npm i -g nodemon
- npm i body-parser
- npm i mongodb
- npm i ejs
