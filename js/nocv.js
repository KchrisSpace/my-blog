document.addEventListener("copy", function (e) {
  e.preventDefault();
  e.clipboardData.setData("text/plain", "禁止复制");
  console.log(e.target);
});
//禁用右键（防止右键查看源代码）
window.oncontextmenu = function () {
  return false;
};

//禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具）
// 禁止任何键盘敲击事件（防止F12和Shift+Ctrl+I调起开发者工具）
// function preventDefaultAction(event) {
//   event.preventDefault(); // 阻止默认行为
// }

// // 绑定事件
// window.addEventListener("keydown", preventDefaultAction);
// window.addEventListener("keyup", preventDefaultAction);
// window.addEventListener("keypress", preventDefaultAction);

//如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面
var h = window.innerHeight,
  w = window.innerWidth;
window.onresize = function () {
  if (h != window.innerHeight || w != window.innerWidth) {
    alert("禁止使用开发者工具");
    window.close();
    window.location = "about:blank";
  }
};
