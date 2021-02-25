{
  // 変数・定数の定義
  const btn = document.getElementsByClassName("btn");
  const display = document.getElementById("display");
  let securityCheck;

  // イベントハンドラ・イベント
  function btnClick(obj) {
    "use strict";
    if (display.textContent === "Error") {
      display.textContent = "";
    }
    display.textContent += obj.value;
  }

  function calculate() {
    "use strict";
    securityCheck = display.textContent.match(/[^0-9\+\-\*\/~\(\)\{\}\.]/g);
    if (securityCheck !== null) {
      display.textContent = "Error";
    } else {
      try {
        display.textContent = new Function("return (" + display.textContent + ");")();
      } catch (e) {
        console.log(e);
        display.textContent = "Error";
      }
    }
  }

  function allClear() {
    "use strict";
    display.textContent = "";
  }
}
