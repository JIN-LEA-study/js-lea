const ajax = new XMLHttpRequest();

// 변수로 담아서 가독성 높이기
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

ajax.open("GET", NEWS_URL, false);
ajax.send();

// console.log(ajax.response);

const newsFeed = JSON.parse(ajax.response);

// console.log(newsFeed);

document.getElementById("root").innerHTML = `
<ul>
  <li>${newsFeed[0].title}</li>
  <li>${newsFeed[1].title}</li>
  <li>${newsFeed[2].title}</li>
</ul>
`;

const ul = document.createElement("ul");

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
}

document.getElementById("root").appendChild(ul);
