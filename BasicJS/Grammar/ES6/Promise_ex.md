### Promise EX

```js
let ImgLoading = new Promise(function (resolve, reject) {
  let img = document.querySelect("#test");
  img.addEventListener("load", function () {
    resolve();
  });
  img.addEventListener("err", function () {
    reject();
  });
});

ImgLoading.then(function () {
  console.log("성공했어요");
}).catch(function () {
  console.log("실패했어요");
});
```
