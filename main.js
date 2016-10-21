
const Router = require("./router");



document.addEventListener("DOMContentLoaded", () => {

  const changeWindowHash = (e) => {
    let text = e.currentTarget.innerText.toLowerCase();
    window.location.hash = text;
  };

  const ulList = document.querySelector(".sidebar-nav");
    Array.prototype.slice.call(ulList.children).forEach((el) => {
      el.addEventListener("click", changeWindowHash);
    });

  let content = document.querySelector(".content");
  let router = new Router(content);
  router.start();

});
