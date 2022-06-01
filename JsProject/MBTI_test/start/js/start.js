const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer(answerText) {
  let a = document.querySelector(".answerBox");
  let answer = document.createElement("button");
  a.appendChild(answer);
  answer.innerHTML = answerText;
}

function goNext(qIex) {
  let q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIex].q;
  for (let i in qnaList[qIex].a) {
    addAnswer(qnaList[qIex].a[i].answer);
  }
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIut 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdex = 0;
    goNext(qIdex);
  }, 450);
}
