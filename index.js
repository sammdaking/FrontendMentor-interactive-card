//automatic credit card filling is disable because this form does not use a secure connection

//front card   number  /   name  / date
const frontCardName = document.getElementById("front-card-name");
const frontCardNumber = document.getElementById("font-card-number");
const frontCardMonth = document.getElementById("front-card-month");
const frontCardYear = document.getElementById("front-card-year");

const backCardCvc = document.getElementById("back-card-text");

//Inputs
const cardHolderNameInput = document.getElementById("card-holder-name");
const cardNumberInput = document.getElementById("card-number");

const cardMonthInput = document.getElementById("month");
const cardYearInput = document.getElementById("year");
const cardCvcInput = document.getElementById("cvc");

const confirmButton = document.getElementById("confirm-button");

cardHolderNameInput.addEventListener("input", () => {
  const holderNameRegex = /^\d{30}$/;
  if (!holderNameRegex.test(cardHolderNameInput.value)) {
    cardHolderNameInput.value = cardHolderNameInput.value.slice(0, 30);
  }
  frontCardName.innerText = cardHolderNameInput.value;
});

cardNumberInput.addEventListener("input", () => {
  const cardNumberRegex = /^\d{15}$/;
  if (!cardNumberRegex.test(cardCvcInput.value)) {
    cardNumberInput.value = cardNumberInput.value.slice(0, 15);
  }
  frontCardNumber.innerText = cardNumberInput.value;
});

cardMonthInput.addEventListener("input", () => {
  const ayRegex = /c/;
  if (!ayRegex.test(cardMonthInput.value)) {
    cardMonthInput.value = cardMonthInput.value.slice(0, 2);
  }
  frontCardMonth.innerText = `${cardMonthInput.value}/`;
});
cardYearInput.addEventListener("input", () => {
  const yılRegex = /^\d{4}$/;
  if (!yılRegex.test(cardYearInput)) {
    cardYearInput.value = cardYearInput.value.slice(0, 4);
  }
  frontCardYear.innerText = cardYearInput.value;
});

cardCvcInput.addEventListener("input", () => {
  const cvcRegex = /^\d{3}$/; // 0 ile 3 haneli sayılar
  if (!cvcRegex.test(cardCvcInput.value)) {
    cardCvcInput.value = cardCvcInput.value.slice(0, 3); // Fazlasını kes
  }
  backCardCvc.innerText = cardCvcInput.value; // Doğru değeri güncelle
});
