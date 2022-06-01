const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = 12;

function addAnswer(answerText, qIdex) {
  let a = document.querySelector(".answerBox");
  let answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("mx-auto");
  answer.classList.add("fadeIn");
  a.appendChild(answer);
  answer.innerHTML = answerText;
  answer.addEventListener(
    "click",
    function () {
      let children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qIdex);
      }, 450);
    },
    false
  );
}

function goNext(qIex) {
  let q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIex].q;
  for (let i in qnaList[qIex].a) {
    addAnswer(qnaList[qIex].a[i].answer, qIex);
  }
  let status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIex + 1) + "%";
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
