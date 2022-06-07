const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb+srv://leaisrevolution:gpdnjsdl27@cluster0.v7mku.mongodb.net/?retryWrites=true&w=majority",
  function (에러, client) {
    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  }
);

// app.listen(8080, function () {
//   console.log("listening on 8080");
// });

app.get("/lea", function (req, res) {
  res.send("하이, 레아입니다");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/write.html");
});

app.post("/add", function (req, res) {
  res.send("전송완료");
  console.log(req.body.title);
});
