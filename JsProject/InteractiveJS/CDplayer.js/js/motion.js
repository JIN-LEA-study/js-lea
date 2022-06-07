let prev_button, next_button;
let contentWrap;
let disk_inner;

let pageNum = 0;
let totalNum = 0;
let album;
let pointBtnAll;
let bgArray = new Array();
bgArray[0] = ["#ff6670", "#77a88d"];
bgArray[1] = ["#fa9e2f", "#36595b"];
bgArray[2] = ["#f99a90", "#9e6ef7"];
bgArray[3] = ["#eed26d", "#ee736d"];
bgArray[4] = ["#6b64f7", "#f9d890"];

window.onload = function () {
  prev_button = document.querySelectorAll("button")[0];
  next_button = document.querySelectorAll("button")[1];

  contentWrap = document.querySelector(".contentWrap");
  disk_inner = document.querySelectorAll(".disk_inner");
  album = document.querySelectorAll(".album");
  totalNum = album.length;

  prev_button.addEventListener("click", function () {
    if (pageNum > 0) {
      pageNum--;
    } else {
      pageNum = totalNum - 1;
    }
    pageChangeFunc();
  });

  next_button.addEventListener("click", function () {
    if (pageNum < totalNum - 1) {
      pageNum++;
    } else {
      pageNum = 0;
    }
    pageChangeFunc();
  });

  //최초실행
  // pageNum = 2;
  pageChangeFunc();
};

function pageChangeFunc() {
  // console.log(bgArray[pageNum][1])
  contentWrap.style.background =
    "linear-gradient(120deg," +
    bgArray[pageNum][0] +
    ", " +
    bgArray[pageNum][1] +
    ")";

  for (let i = 0; i < totalNum; i++) {
    if (pageNum == i) {
      //현재 컨텐츠(페이지)
      album[i].classList.add("active");
    } else {
      album[i].classList.remove("active");
    }
  }
  // album[pageNum].classList.add("active");

  disk_inner[pageNum].style.background = bgArray[pageNum][0];
}
