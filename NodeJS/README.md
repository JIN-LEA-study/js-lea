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
localhost: 8080;
```

- 누군가 /lea 페이지로 방문하면, lea 관련된 안내문을 띄어주자

```js
app.get("/lea", function (req, res) {
  res.send("하이, 레아입니다");
});
```

- install
- npm init
- npm i express
