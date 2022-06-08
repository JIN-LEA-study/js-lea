const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); //ejs 사용하겠음

let db;

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb+srv://leaisrevolution:gpdnjsdl27@cluster0.v7mku.mongodb.net/?retryWrites=true&w=majority",
  function (err, client) {
    // why err?
    if (err) return console.log(err);
    db = client.db("todoapp"); //todoapp이라는 datebase에 연결해줘
    db.collection("post").insertOne(
      { name: "LEA", age: 31, _id: 100 },
      function (에러, 결과) {
        console.log("저장완료");
      }
    );
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
  db.collection("counter").findOne(
    { name: "게시물갯수" },
    function (err, result) {
      console.log(result.totalPost);
      let 총게시물갯수 = result.totalPost;
      //DB.post에 새게시물 기록
      db.collection("post").insertOne(
        { _id: 총게시물갯수 + 1, 제목: req.body.title, 날짜: req.body.date },
        function (req, res) {
          console.log("저장완료");
          db.collection("counter").updateOne(
            { name: "게시물갯수" },
            { $inc: { totalPost: 1 } },
            function (err, result) {
              if (err) {
                return console.log(err);
              }
            }
          );
        }
      );
    }
  );
});

app.get("/list", function (req, res) {
  db.collection("post")
    .find()
    .toArray(function (err, result) {
      console.log(result);
      res.render("list.ejs", { posts: result });
    });
});

app.delete("/delete", function (req, res) {
  console.log(req.body);
  rew.body._id = perseInt(req.doby._id);
  db.collection("post").deleteOne(req.body, function (err, result) {
    console.log("삭제완료");
    res.status(200).send({ message: "성공했습니다" });
  });
});
