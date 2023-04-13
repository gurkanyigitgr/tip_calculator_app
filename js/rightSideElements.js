window.addEventListener("load", rightSide);

function rightSide() {
  let rightSideContainer = document.createElement("div");
  document.querySelector(".container").appendChild(rightSideContainer);
  rightSideContainer.classList.add("right-side");

  let flexStart = document.createElement("div");
  document.querySelector(".right-side").appendChild(flexStart);
  flexStart.classList.add("flex-start");

  let tipAmount = document.createElement("div");
  document.querySelector(".flex-start").appendChild(tipAmount);
  tipAmount.classList.add("tip-amount");

  let content = document.createElement("div");
  document.querySelector(".tip-amount").appendChild(content);
  content.classList.add("content");

  let pAmount = document.createElement("p");
  document.querySelector(".content").appendChild(pAmount);
  pAmount.textContent = "Tip Amount";

  let pPerson = document.createElement("p");
  document.querySelector(".content").appendChild(pPerson);
  pPerson.textContent = "/ person";

  let tipResult = document.createElement("p");
  document.querySelector(".tip-amount").appendChild(tipResult);
  tipResult.classList.add("tip-result");
  tipResult.textContent = "$ 0.00";

  let totalPerson = document.createElement("div");
  document.querySelector(".flex-start").appendChild(totalPerson);
  totalPerson.classList.add("total-person");

  let contentSecond = document.createElement("div");
  document.querySelector(".total-person").appendChild(contentSecond);
  contentSecond.classList.add("contentSecond");

  let pTotalAmount = document.createElement("p");
  document.querySelector(".contentSecond").appendChild(pTotalAmount);
  pTotalAmount.textContent = "Total Amount";

  let pTotalPerson = document.createElement("p");
  document.querySelector(".contentSecond").appendChild(pTotalPerson);
  pTotalPerson.textContent = "/ person";

  let totalResult = document.createElement("p");
  document.querySelector(".total-person").appendChild(totalResult);
  totalResult.classList.add("total-result");
  totalResult.textContent = "$ 0.00";

  let resetBtn = document.createElement("button");
  document.querySelector(".right-side").appendChild(resetBtn);
  resetBtn.classList.add("btn", "btn-reset");
  resetBtn.textContent = "Reset";

  let js = document.createElement("script");
  document.body.appendChild(js);
  js.setAttribute("src", "js/script.js");
}
