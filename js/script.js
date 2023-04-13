const billAmountInput = document.querySelector(".bill-input");
const numOfPeopleInput = document.querySelector(".people-input");
const btnTip = document.querySelector(".btn-tip");
const tipResult = document.querySelector(".tip-result");
const totalResult = document.querySelector(".total-result");
const btnReset = document.querySelector(".btn-reset");

const tip5Btn = document.getElementById("five");
const tip10Btn = document.getElementById("ten");
const tip15Btn = document.getElementById("fifteen");
const tip25Btn = document.getElementById("twentyfive");
const tip50Btn = document.getElementById("fifty");
const inputCustom = document.querySelector(".btn-custom");

let customPercent, people, bill;
let numPeople = 1;
let tipPercent = 2;

const tips = [tip5Btn, tip10Btn, tip15Btn, tip25Btn, tip50Btn];

for (let i = 0; i < 5; i++) {
  tips[i].addEventListener("click", function () {
    tipPercent = parseFloat(tips[i].textContent);
  });
}

billAmountInput.addEventListener("input", function () {
  bill = parseFloat(billAmountInput.value);
});

numOfPeopleInput.addEventListener("input", function () {
  people = parseFloat(numOfPeopleInput.value);
});

inputCustom.addEventListener("input", function () {
  customPercent = parseFloat(inputCustom.value);
});

const calculate = function () {
  if (customPercent) {
    tipPercent = customPercent;
  }
  if (people) {
    numPeople = people;
  }
  tipResult.textContent = `$${((bill * tipPercent) / 100 / numPeople).toFixed(
    2
  )}`;
  totalResult.textContent = `$${(
    ((bill * tipPercent) / 100 + bill) /
    numPeople
  ).toFixed(2)}`;
};

billAmountInput.addEventListener("input", calculate);
numOfPeopleInput.addEventListener("input", calculate);

btnReset.addEventListener("click", function () {
  totalResult.textContent = "$0.0";
  tipResult.textContent = "$0.0";
  billAmountInput.value = "";
  numOfPeopleInput.value = 1;
  customPercent = "";
  tipPercent = 0;
});
