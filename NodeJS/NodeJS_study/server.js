const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/lea", function (req, res) {
  res.send("하이, 레아입니다");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
