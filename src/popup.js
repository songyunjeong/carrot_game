"use strict";

export default class Popup {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpTxt = document.querySelector(".pop-up__message");
    this.popUpRefresh = document.querySelector(".pop-up__refresh");
    this.popUpRefresh.addEventListener("click", () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUpTxt.innerText = text;
    this.popUp.classList.remove("hide");
  }

  hide() {
    this.popUp.classList.add("hide");
  }
}
