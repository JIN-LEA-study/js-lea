//랜덤번호지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다
//랜덤번호가 < 유저번호 Down!
//랜덤번호가 < 유저번호 Up!
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다.(버튼이 disable)
//유저가 1-100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깍지 않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");

playButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1; //정수로 변환 후, 소수점을 버리기
}

function paly() {
  console.log("게임시작");
}

pickRandomNum();
