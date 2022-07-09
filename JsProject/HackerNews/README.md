## HACKERNEWS

### study note

- JSON.parse : 자바스크립트가 제공하는 함수, JSON data -> 객체로 바꿔서 반환
- 자바스크립트의 변수 안의 내용을 보여주고 싶을 땐 ${}형식을 사용해주면 됨

```js
document.getElementById("root").innerHTML = `
<ul>
  <li>${newsFeed[0].title}</li>
  <li>${newsFeed[1].title}</li>
  <li>${newsFeed[2].title}</li>
</ul>
`;
```
